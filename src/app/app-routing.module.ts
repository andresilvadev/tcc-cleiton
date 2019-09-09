import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbunsListagemComponent } from './albuns-listagem/albuns-listagem.component';

const routes: Routes = [
  // { path: '', component: AlbunsListagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AlbunsListagemComponent] 
