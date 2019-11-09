import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UsuarioBenchmarkComponent } from './usuario-benchmark/usuario-benchmark.component';
import { ReservasUsuarioComponent } from './reservas-usuario/reservas-usuario.component';



@NgModule({
  declarations: [
    UsuarioBenchmarkComponent,
    ReservasUsuarioComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  entryComponents: [
    UsuarioBenchmarkComponent,
    ReservasUsuarioComponent
  ],
  exports: [
    UsuarioBenchmarkComponent,
    ReservasUsuarioComponent
  ]
})
export class ComponentsModule { }
