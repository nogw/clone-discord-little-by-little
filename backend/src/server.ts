import express, { Request, Response, NextFunction } from "express";
import mongoose, { mongo } from "mongoose"
import cors from "cors"
import Pusher from "pusher"
import channelSchema from "./models/Channel";
import User from './models/User'

// app config
const port = process.env.PORT || 8000
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// db config
const mongoURI = "";

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('hi')
});

// routes
app.get("/", (req: Request, res: Response) => res.status(200).send("testing"))

// later I add a simple password encryption, but for now I will pass it directly
app.post("/register", (req: Request, res: Response) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })

  console.log(req.body.name)
  user.save()
  .then((user: any) => {
    res.status(201).json({
      message: 'User added'
    })
  })
  .catch((error: any) => {
    res.status(500).json({
      message: 'An error occured',
      errorMessage: error
    })
  })
})

app.post("/login", (req: Request, res: Response) => {
  var email = req.body.email
  var password = req.body.password

  User.find({ email: email })
  .then((user: any) => {
    if (user) {
      console.log(user)
    } else {
      res.json({
        message: 'No user found'
      })
    }
  })
})

// listen
app.listen(port, () => console.log(`run in ${port}`))