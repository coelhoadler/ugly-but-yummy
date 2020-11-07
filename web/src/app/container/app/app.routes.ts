import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from '@enums/routes.enum';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: RoutesEnum.HOME }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
