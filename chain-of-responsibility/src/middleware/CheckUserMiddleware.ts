import Database from "../server/Database";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware{
    
    public check(email: any, password: any): boolean {
        
        if(email.indexOf("@") === -1){
            console.log("Formato de email inválido");
            return false;
        }

        const varificaEmail = (Database.filter(item => item.email === email))
        if(!varificaEmail.length){
            console.log("Email invalido.");
            return false;
        }

        const varificaSenha = (Database.filter(item => item.password === password))
        if(!varificaSenha.length){
            console.log("Senha invalida.");
            return false;
        }

        return this.checkNext(email, password);
    }

}