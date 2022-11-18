"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.isDataExistInEnum = exports.CargoUser = void 0;
//  Modelo da tabela de users do banco de dados
const typeorm_1 = require("typeorm");
var CargoUser;
(function (CargoUser) {
    CargoUser["ADM"] = "Admin";
    CargoUser["SUB_ADM"] = "SubAdmin";
    CargoUser["USER"] = "User";
    CargoUser["FUNCIONARIO"] = "Funcionario";
})(CargoUser = exports.CargoUser || (exports.CargoUser = {}));
const valuesUserCargo = {
    [CargoUser.ADM]: true,
    [CargoUser.USER]: true,
    [CargoUser.SUB_ADM]: true,
    [CargoUser.FUNCIONARIO]: true,
};
//verifica se o valor informado existe dentro do enum de Cargos do Usuário
const isDataExistInEnum = (value) => {
    return valuesUserCargo[value] || false;
};
exports.isDataExistInEnum = isDataExistInEnum;
let User = class User {
    id;
    nome;
    email;
    telefone;
    cpf;
    password;
    cargo;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: CargoUser,
        default: CargoUser.USER
    }),
    __metadata("design:type", String)
], User.prototype, "cargo", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
