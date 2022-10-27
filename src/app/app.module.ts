import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogComponent } from './dialog/dialog.component';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { StartComponent } from './start/start.component';














@NgModule({
  declarations: [

    AppComponent,
    DialogComponent,
    TableComponent,
    StartComponent,
 
    
   
   
   
  
   
   
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
 MatDialogModule,
 BrowserAnimationsModule,
 MatToolbarModule,
 MatIconModule,
 MatButtonModule,
 MatFormFieldModule,
 MatInputModule,
 MatNativeDateModule,
 ReactiveFormsModule,
 MatTableModule,
 MatPaginatorModule


 
 
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: 
    {hasBackdrop: true, direction: 'ltr',height:'500px'}}],
  bootstrap: [AppComponent],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
