import express from "express";

const app = express();


app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Oi Express' })
})

require('./controllers/carController')(app)



app.listen(3000)