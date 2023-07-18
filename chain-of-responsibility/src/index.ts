import CheckPermissionMiddleware from "./middleware/CheckPermissionMiddleware";
import CheckEmailMiddleware from "./middleware/CheckEmailMiddleware";
import Server from "./server/Server";
import * as readline from "readline";
import CheckPasswordMiddleware from "./middleware/CheckPasswordMiddleware";

declare var process;
const server = new Server();

function setPromptQuestion(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite seu email: ", email =>{
        rl.question("Digite sua senha: ", password => {
            server.login(email, password);
            rl.close;
        })
    })

    rl.on("close", () => setPromptQuestion());
}

const middleware = new CheckEmailMiddleware();
middleware.linkWith(new CheckPasswordMiddleware());
middleware.linkWith(new CheckPermissionMiddleware());
server.setMiddleware(middleware);
setPromptQuestion();