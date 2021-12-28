import express from 'express';
import Car from '../models/Car';

const router = express.Router();

// Get All Cars
router.get('/findall', async (req, res) => {
    const cars = await Car.find();

    return res.send({
        cars
    })
})

// Get Car By ID
router.get('/findbyid/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id)
        if (car) {
            return res.send({
                car
            })
        }
    } catch (err) {
        return res.status(404).send({
            message: 'Car not Found'
        })
    }
})

// Post Car
router.post('/register', async (req, res) => {
    try {
        await Car.create(req.body);
        return res.send({
            message: 'Success! New Car Registered'
        })
    } catch (err) {
        return res.status(400).send({
            error: 'Fail! Car not Registered'
        })
    }
})

// Update Car
router.put('/update/:id', async (req, res) => {
    try {
        await Car.updateOne({ $oid: req.params.id }, req.body)
        return res.send({
            message: 'Success! Car Updated'
        })
    } catch (err) {
        return res.status(400).send({
            error: 'Fail! Car not Updated'
        })
    }
})

// Delete Car
router.delete('/delete/:id', async (req, res) => {
    try {
        await Car.deleteOne({ $oid: req.params.id })
        return res.send({
            message: 'Car Deleted!'
        })
    } catch (err) {
        return res.status(400).send({
            error: 'Fail! Car not Deleted'
        })
    }
})

module.exports = (app: any) => app.use('/cars', router);