import express,{Express,Application,Response,Request} from 'express'
// import router from './dishesRoute'
import dishesRoute from './dishesRoute'
import availableDishesRoute  from './availableDishesRoute'
import orderRoute from './orderRoute'

function routerApi(app:Application){
    app.use('/menu',dishesRoute)
    app.use('/order',orderRoute)
    app.use('/availableDishes',availableDishesRoute)
    // router.use('/dishes',dishesRoute)
}

export {routerApi}
 
