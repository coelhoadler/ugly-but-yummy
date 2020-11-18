import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from '@enums/routes.enum';
import { ConsumidorComponent } from './consumidor.component';

const routes: Routes = [
    { component: ConsumidorComponent, path: RoutesEnum.CADASTRAR },
    { component: ConsumidorComponent, path: RoutesEnum.ID_PARAM},
    { component: ConsumidorComponent, path: `${RoutesEnum.ID_PARAM}/${RoutesEnum.EDITAR}` },
    { component: ConsumidorComponent, path: RoutesEnum.ROOT, pathMatch: 'full' }
];

export const mainRoute: Route = {
    // canActivate: [AuthGuard],
    path: RoutesEnum.CONSUMIDOR,
    loadChildren: () => import('@pages/consumidor/consumidor.module').then(m => m.ConsumidorModule)
};

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsumidorRoutingModule { }
