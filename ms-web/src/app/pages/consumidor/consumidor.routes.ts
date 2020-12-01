import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from '@enums/routes.enum';
import { ConsumidorCadastroComponent } from './pages/cadastro/consumidor-cadastro.component';
import { ConsumidorListaComponent } from './pages/lista/consumidor-lista.component';

const routes: Routes = [
    { component: ConsumidorCadastroComponent, path: RoutesEnum.CADASTRAR },
    { component: ConsumidorCadastroComponent, path: RoutesEnum.ID_PARAM},
    { component: ConsumidorCadastroComponent, path: `${RoutesEnum.ID_PARAM}/${RoutesEnum.EDITAR}` },
    { component: ConsumidorListaComponent, path: RoutesEnum.ROOT, pathMatch: 'full' }
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
