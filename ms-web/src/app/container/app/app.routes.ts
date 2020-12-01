import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from '@enums/routes.enum';
import { mainRoute as consumidorRoute } from '@pages/consumidor/consumidor.routes';
import { mainRoute as fornecedorRoute } from '@pages/fornecedor/fornecedor.routes';
import { mainRoute as produtoRoute } from '@pages/produto/produto.routes';

const routes: Routes = [
  consumidorRoute,
  fornecedorRoute,
  produtoRoute,
  { path: RoutesEnum.ROOT, pathMatch: 'full', redirectTo: RoutesEnum.HOME }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
