import { UserI } from "./userI";


export class AuthenticationService {
    currentUser?: UserI;
    isLoggedIn: boolean = false;

    login(email: string, password: string){
        if(email === userDB.email && password === userDB.password){
            this.isLoggedIn = true;
            this.currentUser = {id: "1", username: email, email: email};
            return true;
        }
        return false;
    }
    
    
}

const userDB = {email: "magoup98@gmail.com", password: "123"};