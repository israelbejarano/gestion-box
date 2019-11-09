import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-benchmark',
  templateUrl: './usuario-benchmark.component.html',
  styleUrls: ['./usuario-benchmark.component.scss'],
})
export class UsuarioBenchmarkComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  salir() {
    this.modalCtrl.dismiss();
  }

}
