import Database from "../server/Database";
import Middleware from "./Middleware";

export default class CheckPasswordMiddleware extends Middleware{
    
    public check(email: any, password: any): boolean {
        
        const varificaSenha = (Database.filter(item => item.password === password))
        if(!varificaSenha.length){
            console.log("Senha invalida.");
            return false;
        }

        return this.checkNext(email, password);
    }

}