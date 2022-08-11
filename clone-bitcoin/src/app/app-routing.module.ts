import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Importa para usar rotas
import { AppComponent } from './app.component';

const routes: Routes = [
  //array de objetos onde coloco o path, component(Representa aquela rota),
  // Rotas da aplicação
  {
    path: '', // Rota Raiz
    redirectTo: 'bitcoin', // Redireciona para bitcoin
    pathMatch: 'full',
  },
  {
    path: ':cripto',
    loadChildren: () =>
      import('./modules/cripto/cripto.module').then((m) => m.CriptoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Rotas começam do route(raiz)
  exports: [RouterModule],
})
export class AppRoutingModule {}
