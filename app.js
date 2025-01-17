import express from "express"
import dbConnect from "./connecters/db.js"
import projectRouter from "./router/projectRouter.js"
import cors from 'cors'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use(cors());

app.use("/portfolio",projectRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
dbConnect()