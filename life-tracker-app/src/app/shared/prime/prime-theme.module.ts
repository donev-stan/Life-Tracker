import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';

@NgModule({
  imports: [CommonModule],
  exports: [
    CardModule,
    CheckboxModule,
    PasswordModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
  ],
})
export class PrimeThemeModule {}
