import { Routes } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoutes } from '../dashboard/dashboard.routes';
 export const routes: Routes = [
    // Master layout wrapper
    {
      path: '',
      component: MasterComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'service', component: ServicesComponent },
        { path: 'gallery', component: GalleryComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        {path:'aboutus',component:AboutusComponent},
        { path: '', redirectTo: 'home', pathMatch: 'full' }
      ]
    },
  
    // Dashboard layout wrapper (no MasterComponent)
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: dashboardRoutes
    }
  ];
  