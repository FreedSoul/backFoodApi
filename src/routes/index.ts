import {Application} from 'express'
// import router from './dishesRoute'
import dishesRoute from './dishesRoute'
import orderRoute from './orderRoute'

function routerApi(app:Application){
    app.use('/menu',dishesRoute)
    app.use('/orders',orderRoute)
    // router.use('/dishes',dishesRoute)
}

export {routerApi}
 
