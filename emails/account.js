const nodemailer = require('nodemailer');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config()

const router = new express.Router()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {   
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
})

const sendEmailToUser = (name, email, message) =>
  transporter.sendMail(
    {
      from: process.env.EMAIL_ID,
      to: email,
      subject: 'We have received your query!',
      text: `Hi, ${name}! We have received your message which states '${message}'. We will get back to you shortly!`,
    },
    (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('Message sent: %s', info.messageId)
    }
  )

const sendEmailToUs = (name, email, message) =>
  transporter.sendMail(
    {
      from: process.env.EMAIL_ID,
      to: process.env.EMAIL_ID,
      subject: `${name} has contacted us.`,
      text: `Name: ${name} \nEmail: ${email} \nQuery: ${message}`,
    },
    (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('Message sent: %s', info.messageId)
    }
  )

//Create email
router.post('/new', async (req, res) => {
  try {
    sendEmailToUser(req.body.name, req.body.email, req.body.message)
    sendEmailToUs(
      req.body.name,
      req.body.email,
      req.body.message
    )
    res.status(200).json({
      message: 'success'
    })
  } catch (e) {    
    res.status(400).json({
      success: false,
      message: e.message,
    })
  }
})

module.exports = router
