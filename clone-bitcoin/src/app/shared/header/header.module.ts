import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubHeaderComponent } from './components/subheader.component';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [HeaderComponent, SubHeaderComponent],
  imports: [CommonModule, RouterModule, MatMenuModule, MatIconModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
