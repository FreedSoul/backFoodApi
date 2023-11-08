import express, { NextFunction, Response, Request } from 'express'
import boom, { Boom } from '@hapi/boom'
import { dishesService } from '../services/dishesService'

const router = express.Router()
const resultDishes = new dishesService()


router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {

        const dishes = await resultDishes.find()
        // res.status(200).json(dishes)
        res.status(200).json({
            status: "success",
            data: { dishes }
        })
        // throw boom.notFound('no existe el plato con el id ' + dishID)
        // res.status(400).send('no existe el plato con el id ' + papaId)

    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})
router.get('/dish/:dishID', async (req: Request, res: Response, next: NextFunction) => {
    try {
        let dish = []
        const { dishID } = req.params
        console.log(typeof dishID)
        if (typeof dishID === 'string') {
            dish = await resultDishes.findOne(dishID)
        }
        if (dish.length !== 0) {
            res.status(200).json({
                status: "success",
                data: { dish }
            })
        } else {
            throw boom.notFound('no existe el plato con el id ' + dishID)
        }
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { dish_name, available, price, ingredients }:
            { dish_name: string, available: boolean, price: number, ingredients: string } = req.body
        let valuesField: Array<string | number | boolean | Array<string>> = []
        let bodyKeys: Array<string> = []
        let createDish = null
        // reemplazar con zod
        if (typeof dish_name === 'string' && typeof available === 'boolean' && typeof price === 'number' && typeof ingredients === 'object') {
            valuesField = Object.values(req.body)
            bodyKeys = Object.keys(req.body)
        }
        if (valuesField.length !== 0 && bodyKeys) {
            createDish = await resultDishes.create(bodyKeys, valuesField)
        }
        if (createDish !== null) {
            res.status(200).json({
                status: "success",
                data: { message: 'dish created' }
            })
        } else {
            throw boom.notFound('dish not created')
        }
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})

router.put('/:dishID', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { dishID } = req.params
        const { dish_name, available, price, ingredients }:
            { dish_name: string, available: boolean, price: number, ingredients: string } = req.body
        let valuesField: Array<string | number | boolean | Array<string>> = []
        let counter: number = 0
        let bodyKeys: Array<string> = []
        let dishes = null
        //reemplazar por zod
        if (typeof dish_name === 'string' && typeof available === 'boolean' && typeof price === 'number' && typeof ingredients === 'object') {
            // counter++
            // queryFields.push(`dish_name = $${counter}`)
            // valuesField.push(dish_name)
            // counter++
            // queryFields.push(`available = $${counter}`)
            // valuesField.push(available)
            // counter++
            // queryFields.push(`price = $${counter}`)
            // valuesField.push(price)
            // counter++
            // queryFields.push(`ingredients = $${counter}`)
            // valuesField.push(ingredients)

            bodyKeys = Object.keys(req.body)
            bodyKeys = bodyKeys.map((key, index) => `${key} = $${index + 1}`)
            // console.log(bodyKeys, "bodyKeys1")
            valuesField = Object.values(req.body)
        }
        if (dishID) {
            valuesField.push(dishID)

            // console.log(valuesField, "valuesField")
        }
        if (bodyKeys.length === 0 || dishID === undefined) {
            // throw boom.notFound('need all the fields and dishID to make a new register')
            res.status(400).json({ status: "error", message: 'need all the fields and dishID to make a new register' })
        } else {
            dishes = await resultDishes.update(bodyKeys, valuesField)
        }

        if (dishes !== null) {
            if (dishes === 0) {
                res.status(200).json({
                    status: "error",
                    message: `the register with the id ${dishID} doesn't exist`
                })
            } else {

                // console.log(dishes)
                res.status(200).json({
                    status: "success",
                    message: "the register has been updated"
                })
            }
        }
        //  else {
        //     throw boom.notFound('need all the field to change and dishID')
        //     // res.status(400).send('no existe el plato con el id ' + papaId)
        // }
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})


router.patch('/:dishID', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { dishID } = req.params
        const { dish_name, available, price, ingredients }:
            { dish_name: string, available: string, price: string, ingredients: Array<string> } = req.body
        const queryFields: Array<string> = []
        const valuesField: Array<string | number | boolean | Array<string>> = []
        let counter = 0
        // console.log(dish_name, available, price, ingredients, 'BODYYYYYYYYYYYY')
        if (typeof dish_name === 'string') {
            counter++
            queryFields.push(`dish_name = $${counter}`)
            valuesField.push(dish_name)
        }
        if (typeof available === 'boolean') {
            counter++
            queryFields.push(`available = $${counter}`)
            valuesField.push(available)
        }
        if (typeof price === 'number') {
            counter++
            queryFields.push(`price = $${counter}`)
            valuesField.push(price)
        }
        if (typeof ingredients === 'object') {
            counter++
            queryFields.push(`ingredients = $${counter}`)
            valuesField.push(ingredients)
        }
        if (dishID) {
            valuesField.push(dishID)
        }
        if (queryFields.length === 0) {
            throw boom.notFound('need at least 1 field to change and dishID')
            res.status(400).json({ Error: 'no fields to update specified' })
        }

        const dishes = await resultDishes.update(queryFields, valuesField)
        if (dishes) {
            console.log(dishes)
            res.status(200).json({
                status: "success",
                message: "the register has been updated"
            })
        }
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})

router.delete('/:dishID', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { dishID } = req.params
        if (dishID) {
            const deleteDishes: number = await resultDishes.delete(dishID)
            if (deleteDishes > 0) {
                res.status(200).json({
                    status: "success",
                    data: { message: 'deleted successfully!' }
                })
            } else {
                res.status(200).json({
                    status: "success",
                    data: { message: 'Already deleted' }
                })
            }
        } else {
            throw boom.notFound('tienes que añadir un ID de plato para ejecutar la eliminacion')
        }
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})

// router.get('/malteadas/:malteadaId', async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         res.send('rutas de platos')
//     } catch (error) {
//         res.status(400).send(error)
//         next(error)
//     }
// })


export default router