import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from '@enums/routes.enum';
import { mainRoute as consumidorRoute } from '@pages/consumidor/consumidor.routes';

const routes: Routes = [
  consumidorRoute,
  { path: RoutesEnum.ROOT, pathMatch: 'full', redirectTo: RoutesEnum.HOME }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
