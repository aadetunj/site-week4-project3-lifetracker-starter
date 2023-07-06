// const express = require("express")
// const cors = require("cors")
// const morgan = require("morgan")

// const app = express()

// // allows cross origin resource sharin for all origns
// app.use(cors())

// // parse incomingn req bodies with JSON payloads
// app.use(morgan("tiny"))
// app.use(express.json());

// // this ensures its working, 
// // QUESTION: without this get, will i always get a 404? shud it work regardless?
// app.get('/', (req, res) => {
//     res.send("Hi There!")
// })
// const PORT = process.env.PORT || 3002

// app.listen(PORT, () => {
//     console.log(`server runnin' on http://localhost:${PORT}`)
// })
const app = require('./app'); 
const {PORT} = require("./config")
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));