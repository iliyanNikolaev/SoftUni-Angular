import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Injectable ({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree{
        const loginRequired = route.data['loginRequired'];
        const guestRequired = route.data['guestRequired'];
        if(!this.authService.user && loginRequired) {
            return this.router.createUrlTree(['/auth/login']);
        }

        return true;
    }
}

