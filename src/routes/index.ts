import express,{Express,Application,Response,Request} from 'express'
// import router from './dishesRoute'
import dishesRoute from './dishesRoute'
import availableDishesRoute  from './availableDishesRoute'


function routerApi(app:Application){
    app.use('/dishes',dishesRoute)
    app.use('/availableDishes',availableDishesRoute)
    // router.use('/dishes',dishesRoute)
}

export {routerApi}
 
