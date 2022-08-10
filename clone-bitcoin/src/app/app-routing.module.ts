import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // Rotas da aplicação
  {
    path: '',
    component: AppComponent,
    loadChildren: () =>
      import('./modules/cripto/cripto.module').then((m) => m.CriptoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
