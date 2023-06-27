export default class Token{
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2xrZW4iOiJ0b2xrZW4ifQ.JfKMBhveJZsn2GRtp4BfSbYDPcyvTeIt4dtBpa3wnYY";

    get token(): string{
        return this._token;
    }

    set token(token: string){
        this._token = token;
    }
}