// aqui fica o middleware de autenticação
import { Response, Request, NextFunction, response } from 'express';
import jwt from 'jsonwebtoken';

export type tokenType = {
    id: string,
    cargo: string,
}

export async function auth(req: Request, res: Response, next: NextFunction){
    if(req.headers.authorization === undefined){
        return res.status(401).json({message: 'Unauthorized'});
    }

    const token = req.headers.authorization;
    await jwt.verify(token, process.env.JWT_KEY, (err, token: tokenType) => {
        if(err){
            return res.status(401).json({message: 'Unauthorized'});
        }

        req.userReq = {
            id: token.id,
            cargo: token.cargo
        }
    })

    next();
}