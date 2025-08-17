 const express = require('express')
const app = express()
const cors=require('cors');

const Groq = require('groq-sdk');  
require('dotenv').config();
const nodemailer=require('nodemailer');
const port = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });



app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);



const transporter=nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:process.env.GMAIL_USER,
    pass:process.env.GMAIL_PASS
  }
});

const sendOtpEmail = async (email, summary) => {
  if (!email || !summary) {
    return {
      success: false,
      error: 'Email and summary are required'
    };
  }
  console.log('Sending email to:', email);
  console.log('Summary:', summary);

  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Summary of the Transcript',
      text:summary };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    
    return {
      success: true,
      messageId: 'Email sent successfully'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: 'Error sending email'
    };
  }
};


app.post('/generateSummary', async (req, res) => {
  const { transcript, customPrompt } = req.body;

  if (!transcript) {
    return res.status(400).json({ error: 'Transcript is required' });
  }

  try {
    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192", 
      messages: [
        { role: "system", content: "You are a meeting notes summarizer." },
        { role: "user", content: `${customPrompt || "Summarize the following transcript:"}\n\n${transcript}` },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const summary = completion.choices[0].message.content;
    res.json({ summary });

  } catch (err) {
    console.error("Groq API error:", err);
    res.status(500).json({ error: "Failed to generate summary" });
  }
});



app.post('/sendEmail',async(req,res)=>{
  const { recipients, summary } = req.body;
  if (!recipients || !summary) {
    return res.status(400).json({ error: 'Recipients and summary are required' });
  }

try{
  const emailPromises = recipients.map(email => sendOtpEmail(email, summary));
  const results = await Promise.all(emailPromises);
  const failedEmails = results.filter(result => !result.success);
  if (failedEmails.length > 0) {
    return res.status(500).json({ error: 'Failed to send email to some recipients', details: failedEmails });
  }
  res.json({ message: 'Emails sent successfully' });
} catch (error) {
  console.error('Error sending emails:', error);
  res.status(500).json({ error: 'Failed to send emails' });
}
})

app.get('/', (req, res) => res.send('<a href="/generateSummary">Generate Summary</a>'))

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))