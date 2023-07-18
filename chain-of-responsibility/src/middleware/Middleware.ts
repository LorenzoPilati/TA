export default abstract class Middleware{
    public next: Middleware;
    
    public linkWith(next: Middleware): Middleware{
        if(this.next == null){
            this.next = next;
        }else{
            this.next.linkWith(next);
        }
        return next;
    }

    public abstract check(email, password): boolean;

    protected checkNext(email: string, password: string): boolean{
        if(this.next == undefined){
            return true;
        }
        return this.next.check(email, password);
    }
}