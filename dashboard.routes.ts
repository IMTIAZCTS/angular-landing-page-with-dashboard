
import { Routes } from "@angular/router";
import { EmployeesComponent } from "./employees/employees.component";
import { LogoutComponent } from "./logout/logout.component";
export const dashboardRoutes:Routes=[
    {path:'employees',component:EmployeesComponent},
    {path:'logout',component:LogoutComponent}

];