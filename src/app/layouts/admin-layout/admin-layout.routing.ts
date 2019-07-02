import { PaymentsComponent } from './../../payments/payments.component';
import { GeneratorComponent } from './../../generator/generator.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'generator',      component: GeneratorComponent },
    { path: 'payments',       component: PaymentsComponent },
];
