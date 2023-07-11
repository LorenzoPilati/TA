import Middleware from "../middleware/Middleware";

export default class Server{
    private middleware: Middleware;

    setMiddleware(middleware: Middleware){
        this.middleware = middleware;
    }

    login(email: string, password: string): boolean{
        if(this.middleware.check(email, password)){
            console.log("Usuario Autenticado");
            return true;
        }
        return false;
    }
}