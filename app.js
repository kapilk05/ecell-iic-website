const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const list = require('./events');
const router = require('./emails/account');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const MongoDBConnected = require('./regiConn')
const { Database, Team } = require('./regiSchema')

MongoDBConnected()
// express app
const app = express();

// listen for requests
app.listen(process.env.PORT || 8000);

app.use(express.json())
app.use(cors())

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use('/api/email', router)

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json())

app.get("/", (req, res) => {
  // res.sendFile('./views/index.html', { root: __dirname });
  res.render("index", { events_list: list });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
  //   res.render('about');
});

app.get("/team", (req, res) => {
  res.sendFile("./views/team.html", { root: __dirname });
  //   res.render('team');
});

app.get("/register", (req, res) => {
  // res.sendFile("./views/register.html", { root: __dirname });
  res.render('register', { htmlContent: "" })
});

app.post("/form1", (req, res) => {

  const newTeamObj = {
    tName: req.body.tName,
    tLead: req.body.tLead
  }
  const newTeam = new Database(newTeamObj)
  let teamId
  newTeam.save()
    .then((doc) => {
      console.log('Team created successfully')
      // console.log(typeof (doc._id))
      console.log('Instance ID : ', doc._id.toString())
      teamId = doc.id.toString()
    })
    .catch((err) => console.log('Error creating Team\n', err))

  const newPlayerObj = {
    pName: req.body.tLead,
    mobNo: req.body.mobNo,
    eMail: req.body.emailId,
    tName: newTeam._id
  }
  const newPlayer = new Team(newPlayerObj)
  newPlayer.save()
    .then((doc) => {
      console.log('Player registered successfully')
      console.log('Player ID: ', doc._id.toString())
      res.render("regiSucc", { teamId: teamId })
    })
    .catch((err) => console.log('Error registering player\n', err))
})

app.post("/form2", (req, res) => {
  // content for identification and updation of the database
  let id = mongoose.Types.ObjectId(req.body.teamId)
  const query = Database.where({ _id: id });
  query.findOne(function (err, instance) {
    if (err) {
      console.log("Team not found.\n", err)
      const htmlContent = '<p style ="color:red;">Sorry, the team does not exist</p>'
      res.render('register', { htmlContent: htmlContent })
    } else if (!instance) {
      console.log('Instance not found')
    } else {
      console.log(instance)
      const newPlayerObj = {
        pName: req.body.Name,
        mobNo: req.body.MobNo,
        eMail: req.body.eMail,
        tName: id
      }
      const newPlayer = new Team(newPlayerObj)
      newPlayer.save()
        .then((doc) => {
          console.log('Player registered successfully')
          console.log('Player ID: ', doc._id.toString())
          Team.find({ tName: id }, function (err, arr) {
            if (err) {
              console.log("Error : \n", err)
            } else {
              console.log(arr)
              let instArr = arr.map(arr => arr.pName)
              res.render('joinTeamSucc', { instArr: instArr })
            }
          })
        })
        .catch((err) => console.log('Error registering player\n', err))
    }
  })
})

app.get("/partners", (req, res) => {
  res.sendFile("./views/partners.html", { root: __dirname });
  //   res.render('partners');
});

function getEventImages(id) {
  return new Promise(function (resolve, reject) {
    images = [];
    const directoryPath = path.join(__dirname, "/public/images/" + id);
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        reject(err);
      } else {
        files.forEach(function (file) {
          images.push(path.join("/images", id, file));
        });
        resolve(images);
      }
    });
  });
}

app.get("/events/:id", (req, res) => {
  const selected_event = list.find((c) => c.id === req.params.id);
  if (!selected_event)
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
      );
  getEventImages(req.params.id)
    .then((images) => {
      selected_event.images = images;
      res.render("detail", { event: selected_event });
    })
    .catch((error) => {
      return null;
    });
});

// app.listen(8000, ()=>console.log("Server running on 8000"))
