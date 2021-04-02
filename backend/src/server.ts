import express, { Request, Response, NextFunction } from "express";
import mongoose, { mongo } from "mongoose"
import cors from "cors"
import Pusher from "pusher"
import channelSchema from "./models/Channel";
import User from './models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// app config
const port = process.env.PORT || 8000
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// db config
const mongoURI = "mongodb://nogs:mari1981@cluster0-shard-00-00.dheig.mongodb.net:27017,cluster0-shard-00-01.dheig.mongodb.net:27017,cluster0-shard-00-02.dheig.mongodb.net:27017/discordDB?authSource=admin&replicaSet=atlas-rtgkz7-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

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
app.post("/register", async (req: Request, res: Response) => {
  try {
    const user = await User.find({ email: req.body.email }).exec();
    
    if (user.length > 0) {
      return res.status(409).json({ error: 'Email already exists.' });
    }

    return bcrypt.hash(req.body.password, 10, function(err: any, hashedPass: any) {
      if (err) {
        res.json({
          error: err
        })
      }
      
      let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
        passwordConfirm: hashedPass,
        avatarColor: Math.floor(Math.random() * 18) + 1
      })

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
  } catch (err: any) {
    return res.status(500).json({
      errorMessage: err
    })
  }
}
)

app.post("/login", (req: Request, res: Response) => {
  var emailField = req.body.email
  var password = req.body.password

  User.findOne({$or: [{email: emailField}]})
  .then((user: any) => {
    if(user) {
      bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
          res.status(500).json({
            errorMessage: err
          })
        }

        if(result) {
          let token = jwt.sign({ name: user.name }, 'secretValue')
          
          res.json({
            message: 'Login successful', 
            token
          })
        } else {
          res.json ({
            message: "Password does not matched!"
          })
        }
      })
    } else {
      res.status(500).json({
        errorMessage: 'No user found',
      })
    }
  })
})

// listen
app.listen(port, () => console.log(`run in ${port}`))