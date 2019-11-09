import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';

import { PerfilAtletaPage } from './perfil-atleta.page';
import { UsuarioBenchmarkComponent } from '../../components/usuario-benchmark/usuario-benchmark.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilAtletaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilAtletaPage]
})
export class PerfilAtletaPageModule {}
