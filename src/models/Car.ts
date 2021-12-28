import { mongoose } from "../database/mongoose";

const CarSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 2000
    },
    color: {
        type: String,
        required: true
    }
})

const Car = mongoose.model('Car', CarSchema);

export default Car;