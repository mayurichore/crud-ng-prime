import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {StyleClassModule} from 'primeng/styleclass';


import { ToastModule } from 'primeng/toast';
import { ProductComponent } from './product.component';
import { AddEditProductModule } from './add-edit-product/add-edit-product.module';





@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ToastModule,
    AddEditProductModule,
    ConfirmDialogModule,
    NgxChartsModule,
    BrowserModule,
    StyleClassModule
    
  ],
  exports: [
    ProductComponent
  ],
  providers: [MessageService, ConfirmationService]
})
export class ProductModule { }
