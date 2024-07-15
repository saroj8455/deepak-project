import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, InputTextModule, ProgressBarModule, ToastModule],
})
export class PrimeModule {}
