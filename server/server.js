import express from "express";
import routes from './Routes/index.js'
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json())
// app.use(express.urlencoded({extended:false}))


app.get("/", (req, res) => {
    return res.send('hello')
})

app.listen(PORT, () =>
    console.log("HEY SERVER IS RUNNING")
)

app.use(routes)