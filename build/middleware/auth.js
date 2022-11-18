"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function auth(req, res, next) {
    if (req.headers.authorization === undefined) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = req.headers.authorization;
    await jsonwebtoken_1.default.verify(token, process.env.JWT_KEY, (err, token) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.userReq = {
            id: token.id,
            cargo: token.cargo
        };
    });
    next();
}
exports.auth = auth;
