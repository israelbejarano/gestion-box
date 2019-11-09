import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UsuarioBenchmarkComponent } from './usuario-benchmark/usuario-benchmark.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsuarioBenchmarkComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  entryComponents:[UsuarioBenchmarkComponent],
  exports: [
    UsuarioBenchmarkComponent
  ]
})
export class ComponentsModule { }
