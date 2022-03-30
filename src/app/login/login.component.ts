import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent {
    email: string | undefined;
    password: string | undefined;

    constructor(public usersService: UsersService){}

    login(){
        console.log(this.email);
        console.log(this.password)
    }
}