import express from "express";
import mongoose, { mongo } from "mongoose"
import cors from "cors"
import Pusher from "pusher"

// app config
const port = process.env.PORT || 8000
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// db config
const mongoURI = ""

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
  console.log('db connected')
})

// routes
app.get("/", (req, res) => res.status(200).send("testing"))

// listen
app.listen(port, () => console.log(`run in ${port}`))