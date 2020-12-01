import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from '@enums/routes.enum';
import { ProdutoCadastroComponent } from './pages/cadastro/produto-cadastro.component';
import { ProdutoListaComponent } from './pages/lista/produto-lista.component';

const routes: Routes = [
    { component: ProdutoCadastroComponent, path: RoutesEnum.CADASTRAR },
    { component: ProdutoCadastroComponent, path: RoutesEnum.ID_PARAM},
    { component: ProdutoCadastroComponent, path: `${RoutesEnum.ID_PARAM}/${RoutesEnum.EDITAR}` },
    { component: ProdutoListaComponent, path: RoutesEnum.ROOT, pathMatch: 'full' }
];

export const mainRoute: Route = {
    // canActivate: [AuthGuard],
    path: RoutesEnum.PRODUTO,
    loadChildren: () => import('@pages/produto/produto.module').then(m => m.ProdutoModule)
};

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }
