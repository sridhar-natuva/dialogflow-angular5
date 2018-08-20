import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule , MatTableModule ,MatListModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'

@NgModule({
  imports: [
    MatButtonModule ,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule
  ]
})
export class MaterialAppModule { }