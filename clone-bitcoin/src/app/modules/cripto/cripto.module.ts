import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CriptoRoutingModule } from './cripto-routing.module';
import { CriptoComponent } from './cripto.component';

@NgModule({
  declarations: [CriptoComponent],
  imports: [CommonModule, CriptoRoutingModule],
  exports: [CriptoComponent],
})
export class CriptoModule {}
