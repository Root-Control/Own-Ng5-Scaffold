import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuard } from '../guards/authentication-guard.service';

export const authRoutes = [
    {
        path: 'auth', children: [
        	{ path: 'signin', component: LoginComponent },
            { path: 'signup', component: RegisterComponent }
        ]
    },
];