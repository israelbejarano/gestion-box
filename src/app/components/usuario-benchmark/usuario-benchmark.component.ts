import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-benchmark',
  templateUrl: './usuario-benchmark.component.html',
  styleUrls: ['./usuario-benchmark.component.scss'],
})
export class UsuarioBenchmarkComponent implements OnInit {

  fechaNewBenchmark: Date = new Date();
  customPickerOptions: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log('Clicked Save!');
          console.log(evento);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  cambioFecha(event) {
    console.log('ionchange', event);
    console.log('Date', new Date(event.detail.value));
  }

  salir() {
    this.modalCtrl.dismiss();
  }

}
