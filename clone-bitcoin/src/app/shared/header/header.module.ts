import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubHeaderComponent } from './components/subheader.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent, SubHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
