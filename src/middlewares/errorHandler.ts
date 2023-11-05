import { ErrorRequestHandler, Request, Response, NextFunction } from "express"
import boom,{Boom} from "@hapi/boom"

function logErrors(
    error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction
) {
    console.log("logErrors")
    console.error(error)
    next(error)
}

function errorHandler(
    error: ErrorEvent, req: Request, res: Response, next: NextFunction
) {
    console.log("errorHandler")
    // res.status(500).json({
    //     error: error.message,
    //     type: error.type,
    // })
}

function boomHandler(
    error: Boom, req: Request, res: Response, next: NextFunction
) {
    if (error.isBoom) {
        const { output } = error
        res.status(output.statusCode).json(output.payload.message)
    }else{
        next(error)
    }
    // console.log("errorHandler")
    // res.status(500).json({
    //     error: error.message,
    // })
}

export { logErrors, errorHandler, boomHandler }