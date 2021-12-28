import { mongoose } from "../database/mongoose";

const CarSchema = new mongoose.Schema({
    modelo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true,
        min: 2000
    },
    cor: {
        type: String,
        required: true
    }
})

const Car = mongoose.model('Car', CarSchema);

export default Car;