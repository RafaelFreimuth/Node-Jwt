import { NextFunction, Request, RequestHandler, Response } from "express";
import { TokenService } from "../service/TokenService";

class AuthenticatedMiddleware {
    execute(request: Request, response: Response, next: NextFunction) {
        const { authorization } = request.headers;
        
        if (!authorization) {
            return response.status(401).json({ message: "Usuário não autenticado."});
        }

        const [type, token] = authorization.split(' ');

        const isTokenValid = new TokenService().singIn(token);

        if (isTokenValid) {
            return next();
        }

        return response.status(401).json({message: "Usuário não autenticado."});

    }
}

export default new AuthenticatedMiddleware();