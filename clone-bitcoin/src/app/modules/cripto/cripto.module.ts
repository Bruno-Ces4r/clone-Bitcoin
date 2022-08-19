import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { CriptoRoutingModule } from './cripto-routing.module';
import { CriptoComponent } from './cripto.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlaceholderLoadingModule } from 'src/app/shared/placeholder-loading/placeholder-loading.module';

@NgModule({
  declarations: [CriptoComponent],
  imports: [
    CommonModule,
    CriptoRoutingModule,
    HeaderModule,
    MatProgressSpinnerModule,
    PlaceholderLoadingModule,
  ],
  exports: [CriptoComponent],
})
export class CriptoModule {}
