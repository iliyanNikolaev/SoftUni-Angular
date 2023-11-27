import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuard } from "../shared/guards/AuthGuard";

const routes = [
    {
        path: 'auth/login',
        component: LoginComponent,
    },
    {
        path: 'auth/register',
        component: RegisterComponent,
    },
    {
        path: 'auth/logout',
        component: LogoutComponent
    },
    {
        path: 'auth/profile',
        canActivate: [AuthGuard],
        component: ProfileComponent,
        data: {
            loginRequired: true
        }
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);