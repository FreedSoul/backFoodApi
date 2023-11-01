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
        if(dishID){
            const dishes = await resultDishes.findOne(dishID)
            res.status(200).json(dishes)
        }else{
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
        const { papaId } = req.params
        // req.query
        if (papaId === 'papas') {
            const dishes = await resultDishes.find()
            // res.status(201).send('rutas de platos ' + `con el id ${papaId}`)
            res.status(201).json(dishes)
        } else {
            throw boom.notFound('no existe el plato con el id ' + papaId)
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
        // req.query
        if (dishID) {
            const deleteDishes = await resultDishes.delete(dishID)
            res.status(204).json(deleteDishes)
        } else {
            throw boom.notFound('no existe el plato con el id ' + dishID)
            // res.status(400).send('no existe el plato con el id ' + papaId)
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