import { LoaderInterceptorService } from './interceptors/loader-interceptor.service';
import { ClientUpsertComponent } from './client-list/upsert/upsert.component';
import { ProductUpsertComponent } from './product-list/upsert/upsert.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatTabsModule } from '@angular/material/tabs'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatRadioModule } from '@angular/material/radio'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './shared-components/toolbar/toolbar.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientListComponent } from './client-list/client-list.component';
import { BarberListComponent } from './barber-list/barber-list.component';
import { RoleDirective } from './role.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductListComponent } from './product-list/product-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { OfficeListComponent } from './office-list/office-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BarberUpsertComponent } from './barber-list/upsert/upsert.component';
import { OfficeUpsertComponent } from './office-list/upsert/upsert.component';
import { ServiceUpsertComponent } from './service-list/upsert/upsert.component';
import { MatIconModule } from '@angular/material/icon';
import { DeleteDialogComponent } from './shared-components/delete-dialog/delete-dialog.component';
import { BackComponent } from './shared-componets/back/back.component';
import { AddCutComponent } from './client-list/add-cut/add-cut.component';
import { CutSummaryComponent } from './shared-components/cut-summary/cut-summary.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseUpsertComponent } from './expense-list/expense-upsert/expense-upsert.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { EarningListComponent } from './earning-list/earning-list.component';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { LoaderService } from './services/loader.service';
import { PaymentsComponent } from './payments/payments.component';
import { SummaryDialogComponent } from './summary-dialog/summary-dialog.component';
import { DashboardCardComponent } from './shared-components/dashboard-card/dashboard-card.component';
import { StockAlertComponent } from './stock-alert/stock-alert.component';
import { StockRowComponent } from './stock-row/stock-row.component';
import { StockColorPipe } from './stock-color.pipe';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { PaymentMethodPipe } from './payment-method.pipe';
import { SummaryDialogProductComponent } from './summary-dialog-product/summary-dialog-product.component';
import { EarningsDayComponent } from './earnings-day/earnings-day.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    SidebarComponent,
    DashboardComponent,
    ProductUpsertComponent,
    ClientListComponent,
    OfficeUpsertComponent,
    BarberUpsertComponent,
    BarberListComponent,
    RoleDirective,
    ProductListComponent,
    ServiceUpsertComponent,
    ServiceListComponent,
    OfficeListComponent,
    DeleteDialogComponent,
    ClientUpsertComponent,
    BackComponent,
    AddCutComponent,
    CutSummaryComponent,
    ExpenseListComponent,
    ExpenseUpsertComponent,
    EarningListComponent,
    MyLoaderComponent,
    PaymentsComponent,
    SummaryDialogComponent,
    DashboardCardComponent,
    StockAlertComponent,
    StockRowComponent,
    StockColorPipe,
    PaymentMethodPipe,
    SummaryDialogProductComponent,
    EarningsDayComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatExpansionModule,
    MatMenuModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    NgxTrimDirectiveModule,
    NgxDaterangepickerMd.forRoot()

  ],
  entryComponents: [DeleteDialogComponent, SummaryDialogComponent, SummaryDialogProductComponent],
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
