import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UsuarioBenchmarkComponent } from './usuario-benchmark/usuario-benchmark.component';



@NgModule({
  declarations: [UsuarioBenchmarkComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  entryComponents:[UsuarioBenchmarkComponent],
  exports: [
    UsuarioBenchmarkComponent
  ]
})
export class ComponentsModule { }
