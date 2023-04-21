const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
app.use(cors())
app.get('/', (req, res, next) => {
    res.json({message: "ok I'm fine"})
})
app.listen(port, () => {
    console.log("Express app running");
})