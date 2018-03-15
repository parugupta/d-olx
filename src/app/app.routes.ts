import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DemoComponent } from './containers/demo/demo.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent },
  { path: 'demo', component: DemoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);