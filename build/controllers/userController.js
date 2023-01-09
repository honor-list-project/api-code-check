"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configDb_1 = __importDefault(require("../database/configDb"));
const userModel_1 = require("../models/userModel");
const hash_1 = require("../utils/hash");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    async registerUser(req, res) {
        const { nome, email, telefone, cpf, password } = req.body;
        try {
            const user = new userModel_1.User();
            user.nome = nome;
            user.email = email;
            user.telefone = telefone;
            user.cpf = cpf;
            user.cargo = userModel_1.CargoUser.USER;
            const hashPassword = await (0, hash_1.createHash)(password);
            if (!hashPassword[0]) {
                return res.status(500).json({ message: 'error!' });
            }
            user.password = hashPassword[1];
            const userRepository = (await configDb_1.default).getRepository(userModel_1.User);
            await userRepository.save(user);
            await jsonwebtoken_1.default.sign({
                id: user.id,
                cargo: user.cargo
            }, process.env.JWT_KEY, { expiresIn: '24h' }, (err, token) => {
                if (err) {
                    return res.status(500).json({ message: "Error in server" });
                }
                return res.status(200).json({
                    message: 'success',
                    token: token
                });
            });
            // return res.status(200).json({message: "success"});
        }
        catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Error" });
        }
    }
    async loginUser(req, res) {
        const { email, password } = req.body;
        try {
            const userRepository = (await configDb_1.default).getRepository(userModel_1.User);
            const user = await userRepository.findOneBy({ email: email });
            if (user === null) {
                return res.status(404).json({ message: 'user not found!' });
            }
            if (!await (0, hash_1.compareHash)(password, user.password)) {
                return res.status(401).json({ message: 'Invalid ail or password!' });
            }
            await jsonwebtoken_1.default.sign({
                id: user.id,
                cargo: user.cargo
            }, process.env.JWT_KEY, { expiresIn: '24h' }, (err, token) => {
                if (err) {
                    return res.status(500).json({ message: "Error in server" });
                }
                return res.status(200).json({
                    message: 'success',
                    token: token
                });
            });
        }
        catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Error" });
        }
    }
    async readAllUsers(req, res) {
        try {
            const userRepository = (await configDb_1.default).getRepository(userModel_1.User);
            const allUsers = await userRepository.find({
                select: {
                    id: true,
                    cpf: true,
                    nome: true,
                    email: true,
                    telefone: true,
                }
            });
            return res.status(200).json({ message: "success", data: allUsers });
        }
        catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Error" });
        }
    }
    async readOneUser(req, res) {
        const { id } = req.params;
        try {
            const userRepository = (await configDb_1.default).getRepository(userModel_1.User);
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
            if (user == null) {
                return res.status(404).json({ message: 'user not found!' });
            }
            return res.status(200).json({ message: "success", data: user });
        }
        catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Error" });
        }
    }
    async updateUser(req, res) {
        const { cargo, id } = req.body;
        const userReq = req.userReq;
        try {
            if (id === userReq.id) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            if (!["Admin", "SubAdmin"].includes(userReq.cargo)) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            if (userReq.cargo === 'SubAdmin' && !["User", "Funcionario"].includes(cargo)) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const userRepository = (await configDb_1.default).getRepository(userModel_1.User);
            const userUpdate = await userRepository.findOneBy({ id: id, });
            if (userUpdate == null) {
                return res.status(404).json({ message: 'user not found' });
            }
            if (cargo.length === 0 || !(0, userModel_1.isDataExistInEnum)(cargo)) {
                return res.status(401).json({ message: "invalid data" });
            }
            userUpdate.cargo = cargo;
            await userRepository.save(userUpdate);
            return res.status(200).json({ message: "data updated successfully" });
        }
        catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Error" });
        }
    }
    async deleteUser(req, res) {
        const { id } = req.params;
        const userReq = req.userReq;
        try {
            if (id === userReq.id) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            if (userReq.cargo !== userModel_1.CargoUser.ADM) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const userRepository = (await configDb_1.default).getRepository(userModel_1.User);
            const userRemove = await userRepository.findOneBy({ id: id });
            if (userRemove.cargo === 'Admin') {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            if (userRemove == null) {
                return res.status(404).json({ message: 'user not found' });
            }
            await userRepository.remove(userRemove);
            return res.status(200).json({ message: "success" });
        }
        catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Error" });
        }
    }
}
exports.default = new UserController();
