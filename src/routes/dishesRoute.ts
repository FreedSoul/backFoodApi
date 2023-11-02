import express, { NextFunction, Response, Request } from 'express'
import boom, { Boom } from '@hapi/boom'
import { dishesService } from '../services/dishesService'

const router = express.Router()
const resultDishes = new dishesService()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {

        const dishes = await resultDishes.find()
        res.status(200).json(dishes)

        // throw boom.notFound('no existe el plato con el id ' + dishID)
        // res.status(400).send('no existe el plato con el id ' + papaId)

    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})
router.get('/dish/:dishID', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { dishID } = req.params
        if (dishID) {
            const dishes = await resultDishes.findOne(dishID)
            res.status(200).json(dishes)
        } else {
            throw boom.notFound('no existe el plato con el id ' + dishID)
        }
        // res.status(400).send('no existe el plato con el id ' + papaId)
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const createDish = await resultDishes.create(data)
        res.status(201).send({ data })
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})

router.put('/:dishID', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        res.status(201).send({ data })
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})


router.patch('/:dishID', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { dishID } = req.params
        const { dish_name, available, price, ingredients } = req.query
        const data = { dishID, dish_name, available, price, ingredients }
        console.log(dish_name, available, price, ingredients, 'BODYYYYYYYYYYYY')
        if (dish_name || available || price || ingredients) {
            const dishes = await resultDishes.update(data)
            // res.status(201).send('rutas de platos ' + `con el id ${papaId}`)
            res.status(201).json(dishes)
        } else {
            throw boom.notFound('need at least 1 field to change and dishID')
            // res.status(400).send('no existe el plato con el id ' + papaId)
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
                res.status(200).json({ message: 'deleted successfully!' })
            } else {
                res.status(200).json({ message: 'Already deleted' })
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