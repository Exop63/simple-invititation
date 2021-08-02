import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from 'angular-imask';
@NgModule({
  declarations: [],
  imports: [ReactiveFormsModule, IMaskModule],
  exports: [ReactiveFormsModule, IMaskModule],
})
export class SharedModule {}
