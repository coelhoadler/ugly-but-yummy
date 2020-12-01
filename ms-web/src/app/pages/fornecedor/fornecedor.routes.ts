import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from '@enums/routes.enum';
import { FornecedorCadastroComponent } from './pages/cadastro/fornecedor-cadastro.component';
import { FornecedorListaComponent } from './pages/lista/fornecedor-lista.component';

const routes: Routes = [
    { component: FornecedorCadastroComponent, path: RoutesEnum.CADASTRAR },
    { component: FornecedorCadastroComponent, path: RoutesEnum.ID_PARAM},
    { component: FornecedorCadastroComponent, path: `${RoutesEnum.ID_PARAM}/${RoutesEnum.EDITAR}` },
    { component: FornecedorListaComponent, path: RoutesEnum.ROOT, pathMatch: 'full' }
];

export const mainRoute: Route = {
    // canActivate: [AuthGuard],
    path: RoutesEnum.FORNECEDOR,
    loadChildren: () => import('@pages/fornecedor/fornecedor.module').then(m => m.FornecedorModule)
};

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FornecedorRoutingModule { }
