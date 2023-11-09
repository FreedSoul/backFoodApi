import express, { NextFunction, Response, Request } from 'express'
import boom, { Boom } from '@hapi/boom'
import { orderService } from '../services/orderService'

const router = express.Router()
const resultOrders = new orderService()
const cache = {}


router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orders = await resultOrders.find()
        // res.status(200).json(dishes)
        if ( orders.length > 0 ) {
            res.status(200).json({
                status: "success",
                data: { orders }
            })
        }
        
        throw boom.notFound('no existe el plato con el id ')
        // res.status(400).send('no existe el plato con el id ' + papaId)
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})
router.get('/:orderID', async (req: Request, res: Response, next: NextFunction) => {
    try {
        let order = []
        const { orderID } = req.params
        console.log(typeof orderID)
        if (typeof orderID === 'string') {
            order = await resultOrders.findOne(orderID)
        }
        if (order.length !== 0) {
            res.status(200).json({
                status: "success",
                data: { order }
            })
        } else {
            throw boom.notFound('no existe el plato con el id ' + orderID)
        }
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})

router.put('/:orderID', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const header = req.headers['x-idempotence-key']
        cache[header] = res;
        //  else {
        //     throw boom.notFound('need all the field to change and orderID')
        //     // res.status(400).send('no existe el plato con el id ' + papaId)
        // }
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})


router.patch('/:orderID', async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})

router.delete('/:orderID', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { orderID } = req.params
        if (orderID) {
            const deleteOrder: number = await resultOrders.delete(orderID)
            if (deleteOrder > 0) {
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