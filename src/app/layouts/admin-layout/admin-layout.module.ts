import { GeneratorService } from './../../services/generator.service';
import { AlphaOnlyDirective } from './../../directives/alpha-only.directive';
import { ClockService } from './../../components/clock/clock.service';
import { ClockComponent } from './../../components/clock/clock.component';
import { GeneratorComponent } from '../../generator/generator.component';
import { PaymentsComponent } from '../../payments/payments.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NgxCurrencyModule } from 'ngx-currency';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxCurrencyModule
  ],
  declarations: [
    DashboardComponent,
    GeneratorComponent,
    PaymentsComponent,
    ClockComponent,
    AlphaOnlyDirective
  ],
  exports: [
    ClockComponent
  ],
  providers: [
    ClockService,
    GeneratorService
  ],
})

export class AdminLayoutModule {}
