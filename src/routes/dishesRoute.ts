import express, { NextFunction, Express, Application, Response, Request } from 'express'
import boom, { Boom } from '@hapi/boom'

const router = express.Router()

router.post('/papas', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        res.status(201).send({ data })
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})

router.get('/papas/:papaId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { papaId } = req.params
        req.query
        if (papaId === 'papas') {
            res.status(201).send('rutas de platos ' + `con el id ${papaId}`)
        } else {
            throw boom.notFound('no existe el plato con el id ' + papaId)
            // res.status(400).send('no existe el plato con el id ' + papaId)
        }
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})

router.get('/malteadas/:malteadaId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send('rutas de platos')
    } catch (error) {
        res.status(400).send(error)
        next(error)
    }
})


export default router