import express,{Express,Application,Response,Request} from 'express'

const router = express.Router()

router.get('/',async(req:Request,res:Response)=>{
    res.send('Aqui lista de todos los platos disponibles')
})

// router.get('/',(req:Request,res:Response)=>{
//     res.send('rutas de platos')
// })

export default router