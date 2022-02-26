// var requirejs = require('requirejs')
// const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_ID,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// })

// const sendWelcomeEmail = (email, name, message) =>
//   transporter.sendMail(
//     {
//       from: process.env.EMAIL_ID,
//       to: email,
//       subject: 'We have received your query!',
//       text: `Thanks for joining us, ${name} `,
//     },
//     (err, info) => {
//       if (err) {
//         return console.log(err)
//       }
//       console.log('Message sent: %s', info.messageId)
//     }
//   )

function sendEmail() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'varmalokita282@gmail.com',
    Password: 'lpkojihugyftdrseawq',
    To: 'lokitavarma282@gmail.com',
    From: 'varmalokita282@gmail.com',
    Subject: '<email subject>',
    Body: '<email body>',
  }).then((message) => alert('mail sent successfully'))
}

const ideaScriptURL =
  'https://script.google.com/macros/s/AKfycbwFxy4hsIK-JeblK2dDbI7G4RJf2LPNhO3U1Ss8q24KsvVaeb16/exec'
const ideaForm = document.forms['idea']

ideaForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if ($('input[name=Student]:checked').val() == 'No') {
    $('#stream').val('')
    $('#year').val('')
  }
  fetch(ideaScriptURL, { method: 'POST', body: new FormData(ideaForm) })
    .then(() => {
      ideaForm.reset()
      $('#stream').val('CSE')
      $('#year').val('FE')
      swal({
        title: 'Idea Submitted!',
        text: "We'll review your idea and get in contact with you soon",
        icon: 'success',
      })
    })
    .catch((error) =>
      swal({
        title: 'Error',
        text: error.message,
        icon: 'error',
      })
    )
})

// const contactScriptURL =
//   'https://script.google.com/macros/s/AKfycbwk1hTys494MwG7wqYbQ4yhon8LwoZltz4JLbFh7lEASsabBcBf/exec'
// const contactForm = document.forms['contact']
// const name = document.querySelector('#name')
// const email = document.querySelector('#email')
// const message = document.querySelector('#message')

// contactForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   // fetch(contactScriptURL, { method: 'POST', body: new FormData(contactForm) })
//   console.log('hi ' + name.value)
//   console.log('hi ' + email.value)
//   console.log('hi ' + message.value)
//   sendWelcomeEmail(email.value, name.value, message.value)

//   // .then(() => {
//   //   contactForm.reset()
//   //   swal({
//   //     title: 'Thank you',
//   //     text: "We'll get in contact with you soon",
//   //     icon: 'success',
//   //   })
//   // })
//   // .catch((error) => {
//   //   console.log(error)
//   //   swal({
//   //     title: 'Error',
//   //     text: error.message,
//   //     icon: 'error',
//   //   })
//   // })
// })

                      // var myHeaders = new Headers()
                      // myHeaders.append('Content-Type', 'application/json')

                      // var raw = JSON.stringify({
                      //   email: 'lokitavarma282@gmail.com',
                      //   name: 'Loki',
                      //   message: 'this is a query',
                      // })

                      // var requestOptions = {
                      //   method: 'POST',
                      //   headers: myHeaders,
                      //   body: raw,
                      //   redirect: 'follow',
                      // }

                      // fetch('http://localhost:5000/api/email/new', requestOptions)
                      //   .then((response) => response.text())
                      //   .then((result) => console.log(result))
                      //   .catch((error) => console.log('error', error))

const contactScriptURL =
  'http://localhost:5000/api/email/new'
const contactForm = document.forms["contact"];
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')

// console.log(name)
contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  var raw = JSON.stringify({
    email: email.value,
    name: name.value,
    message: message.value,
  })

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  fetch('https://ecell-contact-us.herokuapp.com/api/email/new', requestOptions)
    .then((response) => {
      response.text()
      contactForm.reset()
      swal({
        title: 'Thank you',
        text: "We'll get in contact with you soon",
        icon: 'success',
      })
    })
    .catch((error) => {
      console.log('error', error)
      {
        console.log(error)
        swal({
          title: 'Error',
          text: error.message,
          icon: 'error',
        })
      }
    })
})
