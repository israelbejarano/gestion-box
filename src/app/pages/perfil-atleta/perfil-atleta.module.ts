import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilAtletaPage } from './perfil-atleta.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilAtletaPage]
})
export class PerfilAtletaPageModule {}
