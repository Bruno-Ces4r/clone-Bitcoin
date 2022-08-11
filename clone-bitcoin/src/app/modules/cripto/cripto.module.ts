import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { CriptoRoutingModule } from './cripto-routing.module';
import { CriptoComponent } from './cripto.component';

@NgModule({
  declarations: [CriptoComponent],
  imports: [CommonModule, CriptoRoutingModule, HeaderModule],
  exports: [CriptoComponent],
})
export class CriptoModule {}
