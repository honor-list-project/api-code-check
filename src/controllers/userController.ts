import { Response, Request } from 'express';
import Db from '../database/configDb';
import { User, CargoUser, isDataExistInEnum} from '../models/userModel';
import { createHash, compareHash } from '../utils/hash';

interface IuserController{
    registerUser(req: Request, res: Response): Promise<Response>;
    readAllUsers(req: Request, res: Response): Promise<Response>;
    readOneUser(req: Request, res: Response): Promise<Response>;
    updateUser(req: Request, res: Response): Promise<Response>;
    deleteUser(req: Request, res: Response): Promise<Response>;
}

class UserController implements IuserController {
    async registerUser(req: Request, res: Response): Promise<Response>{
        const { nome, email, telefone, cpf, password } = req.body;
        try{
            const user = new User();
            user.nome = nome;
            user.email = email;
            user.telefone = telefone;
            user.cpf = cpf;
            user.cargo = CargoUser.USER;

            const hashPassword = await createHash(password);

            if(!hashPassword[0]){
                console.log(hashPassword[1]);
                return  res.status(500).json({message: 'error!'}); 
            }
            
            user.password = hashPassword[1];

            const userRepository = (await Db).getRepository(User);
            await userRepository.save(user);

            return res.status(200).json({message: "success"});
        }catch(e){
            console.error(e);
            return res.status(500).json({message: "Error"});
        }
    }
    
    async readAllUsers(req: Request, res: Response): Promise<Response>{
        try{
            const userRepository = (await Db).getRepository(User);
            const allUsers = await userRepository.find({
                select: {
                    id: true,
                    cpf: true,
                    nome: true,
                    email: true,
                    telefone: true,
                }
            });

            return res.status(200).json({message: "success", data: allUsers});
        }catch(e){
            console.error(e);
            return res.status(500).json({message: "Error"});
        }
    }

    async readOneUser(req:Request, res: Response): Promise<Response>{
        const { id } = req.params;

        try{
            const userRepository = (await Db).getRepository(User)
            // const user = await userRepository.findOneBy({id: id});
            const user = await userRepository.findOne({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    cpf: true,
                    nome: true,
                    email: true,
                    telefone: true,
                    cargo: true,
                }
            });

            if(user == null){
                return res.status(404).json({message: 'user not found!'});
            }

            return res.status(200).json({message: "success", data: user});
        }catch(e){
            console.error(e);
            return res.status(500).json({message: "Error"});
        }
    }

    async updateUser(req:Request, res: Response): Promise<Response>{
        const { cargo, id } = req.body;
        try{
            const userRepository = (await Db).getRepository(User);
            const userUpdate = await userRepository.findOneBy({id: id,});

            if(userUpdate == null){
                return res.status(404).json({message: 'user not found'})
            }

            if(cargo.length === 0 || !isDataExistInEnum(cargo)){
                return res.status(401).json({message: "invalid data"});
            }

            userUpdate.cargo = cargo;
            await userRepository.save(userUpdate);

            return res.status(200).json({message: "data updated successfully"});
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