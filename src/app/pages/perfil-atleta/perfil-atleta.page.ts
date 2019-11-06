import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-atleta',
  templateUrl: './perfil-atleta.page.html',
  styleUrls: ['./perfil-atleta.page.scss'],
})
export class PerfilAtletaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nuevoRecord() {
    console.log('click en nuevo record');
  }

  logout() {
    this.router.navigateByUrl('/home');
    // TODO ver como pasar variables en la navegaciones para el
    // tema de mantener la coherencia de datos sobre todo para el header

    // TODO o ver si es mejor hacer un Header global opto por esta opcion casi seguro
  }

}
