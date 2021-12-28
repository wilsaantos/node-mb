import express from "express";
import carController from "./controllers/carController";

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

app.use('/cars', carController)



app.listen(3000)