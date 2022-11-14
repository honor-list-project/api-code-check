import { Response, Request } from 'express';

interface IuserController{
    readAllUsers(req: Request, res: Response): Promise<Response>;
    readOneUser(req: Request, res: Response): Promise<Response>;
    updadeUser(req: Request, res: Response): Promise<Response>;
    deleteUser(req: Request, res: Response): Promise<Response>;
}

class UserController implements IuserController {
    async readAllUsers(req: Request, res: Response): Promise<Response>{
        try{

            return res.status(200).json({message: "success", data: "Welcome to the users route"});
        }catch(e){
            console.error(e);
            return res.status(500).json({message: "Error"});
        }
    }

    async readOneUser(req:Request, res: Response): Promise<Response>{
        try{

            return res.status(200).json({message: "success", data: "Welcome to the users route"});
        }catch(e){
            console.error(e);
            return res.status(500).json({message: "Error"});
        }
    }

    async updadeUser(req:Request, res: Response): Promise<Response>{
        try{

            return res.status(200).json({message: "success", data: "Welcome to the users route"});
        }catch(e){
            console.error(e);
            return res.status(500).json({message: "Error"});
        }
    }

    async deleteUser(req:Request, res: Response): Promise<Response>{
        try{

            return res.status(200).json({message: "success", data: "Welcome to the users route"});
        }catch(e){
            console.error(e);
            return res.status(500).json({message: "Error"});
        }
    }
}

export default new UserController();