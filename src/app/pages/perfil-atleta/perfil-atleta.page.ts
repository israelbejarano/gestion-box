import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-atleta',
  templateUrl: './perfil-atleta.page.html',
  styleUrls: ['./perfil-atleta.page.scss'],
})
export class PerfilAtletaPage implements OnInit {

  constructor(private router: Router, public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  verOpciones() {
    console.log('click en opciones');
  }

  editarPerfil() {
    console.log('click en editar perfil');
  }

  verReservas() {
    console.log('click ver reservas');
  }

  async nuevoBenchmark() {
    console.log('clik en nuevo benchmark');
    // TODO modal controler y esto habre un componente propio ver el ejemplo oficial de ionic
    /* const modal = await this.modalCtrl.create({
      component: NuevoBenchmarkUsuarioPage
    });
    await modal.present(); */
  }

  verHistoricosBenchmark() {
    console.log('click en ver historicos de benchmarks');
  }

  logout() {
    this.router.navigateByUrl('/home');
    // TODO ver como pasar variables en la navegaciones para el
    // tema de mantener la coherencia de datos sobre todo para el header

    // TODO o ver si es mejor hacer un Header global opto por esta opcion casi seguro
  }

}
