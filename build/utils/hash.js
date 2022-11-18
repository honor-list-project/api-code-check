"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.createHash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
async function createHash(password) {
    try {
        const hashPass = await bcrypt_1.default.hash(password, 10);
        return ([true, hashPass]);
    }
    catch (err) {
        return ([false, err]);
    }
}
exports.createHash = createHash;
async function compareHash(informedPassword, originalPassoword) {
    try {
        const hashCompare = await bcrypt_1.default.compare(informedPassword, originalPassoword);
        return hashCompare;
    }
    catch (err) {
        return err;
    }
}
exports.compareHash = compareHash;
