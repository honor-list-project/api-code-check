interface UserReq{
    id: string,
    cargo: string,
}

declare namespace Express{
    // configurando no tipo request padrão do express um novo campo que pode haver dentro desse tipo
    export interface Request {
        userReq: UserReq;
    }
}