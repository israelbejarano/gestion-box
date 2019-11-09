import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-benchmark',
  templateUrl: './usuario-benchmark.component.html',
  styleUrls: ['./usuario-benchmark.component.scss'],
})
export class UsuarioBenchmarkComponent implements OnInit {

  pesoSel: number;
  tiempo: number;
  fechaBenchamark: Date;
  benchmarkSel = {
    id: '',
    nombre: ''
  };
  benchmarks = [
    {
      id: 1,
      nombre: 'Murph'
    },
    {
      id: 2,
      nombre: 'Fran'
    },
    {
      id: 3,
      nombre: 'Cindy'
    },
    {
      id: 4,
      nombre: 'Diane'
    },
    {
      id: 5,
      nombre: 'Press Banca'
    },
    {
      id: 6,
      nombre: 'Sentadilla'
    },
    {
      id: 7,
      nombre: 'Peso muerto'
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  cambioFecha(event) {
    console.log('ionchange', event);
    this.fechaBenchamark = new Date(event.detail.value);
    console.log('fecha benchmark', this.fechaBenchamark);
  }
  guardar() {
    console.log('benchmark', this.benchmarkSel);
    console.log('peso:', this.pesoSel);
    console.log('tiempo:', this.tiempo);
    console.log('fecha benchmark', this.fechaBenchamark);
  }

  salir() {
    this.modalCtrl.dismiss();
  }

}
