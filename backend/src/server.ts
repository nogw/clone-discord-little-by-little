require('dotenv').config()
import express, { Request, Response, NextFunction } from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import Pusher from 'pusher'
import channelSchema from './models/Channel'
import User from './models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import validateRegister from './validation/validateRegister'
import validateLogin from './validation/validateLogin'

// app config
const port = process.env.PORT || 8000
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// db config
const mongoURI = process.env.MONGO_SECRET_URI

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
  console.log('hi')
})

// routes
app.get('/', (req: Request, res: Response) => res.status(200).send('testing'))

// later I add a simple password encryption, but for now I will pass it directly
app.post('/register', async (req: Request, res: Response) => {
  const { errors, isValid } = validateRegister(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    const user = await User.find({ email: req.body.email }).exec()

    if (user.length > 0) {
      return res.status(400).json({
        message: 'Email already exists.',
      })
    }

    return bcrypt.hash(req.body.password, 10, function (err: any, hashedPass: any) {
      if (err) {
        return res.json({
          error: err,
        })
      }

      let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
        passwordConfirm: hashedPass,
        avatarColor: Math.floor(Math.random() * 18) + 1,
      })

      user
        .save()
        .then((user: any) => {
          return res.status(200).json({
            message: 'User added',
          })
        })
        .catch((error: any) => {
          return res.status(400).json({
            message: 'An error occured',
            errorMessage: error,
          })
        })
    })
  } catch (err: any) {
    return res.status(400).json({
      errorMessage: err,
    })
  }
})

app.post('/login', async (req: Request, res: Response) => {
  const { errors, isValid } = validateLogin(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  try {
    var emailField = req.body.email
    var password = req.body.password

    const user = await User.findOne({ email: req.body.email }).exec()

    if (!user) {
      return res.status(400).json({
        email: 'Could not find email.',
      })
    }

    return bcrypt.compare(password, user.password, function (err, result) {
      
      if (err) {
        return res.status(400).json({
          errorMessage: err,
        })
      }
      
      if (result) {
        let token: any = jwt.sign(
          { 
            name: user.name,
            avatarColor: user.avatarColor
          }, 
          process.env.JWT_SECRET
        )

        return res.status(200).json({
          message: 'Login successful',
          token,
        })
      } 
      
      else {
        return res.status(400).json({
          message: 'Password does not matched!',
        })
      }

    })
  } catch (err) {
    return res.status(400).json({ message: err })
  }
})
// listen
app.listen(port, () => console.log(`run in ${port}`))
