import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriptoComponent } from './cripto.component';

const routes: Routes = [
  // Rotas da aplicação
  {
    path: '',
    component: CriptoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriptoRoutingModule {}
