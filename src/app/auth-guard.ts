import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { LoginService } from "./login/loginservice/login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.loginService.authenticated) {
            return true;
        }else{
            return true;
        }
    }
}
