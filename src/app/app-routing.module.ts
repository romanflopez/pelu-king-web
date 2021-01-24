import { ActiveUsersComponent } from './active-users/active-users.component';
import { DeletePaymentsComponent } from './delete-payments/delete-payments.component';
import { EarningsDayComponent } from './earnings-day/earnings-day.component';
import { PaymentsComponent } from './payments/payments.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseUpsertComponent } from './expense-list/expense-upsert/expense-upsert.component';
import { AddCutComponent } from './client-list/add-cut/add-cut.component';
import { ClientUpsertComponent } from './client-list/upsert/upsert.component';
import { OfficeUpsertComponent } from './office-list/upsert/upsert.component';
import { ServiceUpsertComponent } from './service-list/upsert/upsert.component';
import { ProductUpsertComponent } from './product-list/upsert/upsert.component';
import { OfficeListComponent } from './office-list/office-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BarberListComponent } from './barber-list/barber-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { RoleGuard } from './role.guard';
import { BarberUpsertComponent } from './barber-list/upsert/upsert.component';
import { EarningListComponent } from './earning-list/earning-list.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard]

  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'client-list',
    component: ClientListComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
  },
  {
    path: 'client/edit/:id',
    component: ClientUpsertComponent,
    canActivate: [AuthGuardGuard, RoleGuard]
  },
  {
    path: 'client/add',
    component: ClientUpsertComponent,
    canActivate: [AuthGuardGuard, RoleGuard],

  },
  {
    path: 'barber-list',
    component: BarberListComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'barber/add',
    component: BarberUpsertComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'barber/edit/:id',
    component: BarberUpsertComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'product/add',
    component: ProductUpsertComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'product/edit/:id',
    component: ProductUpsertComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'service-list',
    component: ServiceListComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'service/add',
    component: ServiceUpsertComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'service/edit/:id',
    component: ServiceUpsertComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'office-list',
    component: OfficeListComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'expense/add',
    component: ExpenseUpsertComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'expenses-list',
    component: ExpenseListComponent,
    canActivate: [AuthGuardGuard, RoleGuard]
  },
  {
    path: 'office/add',
    component: OfficeUpsertComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'office/edit/:id',
    component: OfficeUpsertComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'client/add/cut/:id',
    component: AddCutComponent,
    canActivate: [AuthGuardGuard, RoleGuard]
  },
  {
    path: 'earning/list',
    component: EarningListComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'payments',
    component: PaymentsComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'delete-payments',
    component: DeletePaymentsComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'active-users',
    component: ActiveUsersComponent,
    canActivate: [AuthGuardGuard, RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'earnings-day',
    component: EarningsDayComponent,
    canActivate: [AuthGuardGuard, RoleGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
