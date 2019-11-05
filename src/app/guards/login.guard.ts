import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements  CanLoad {

  constructor(private usuarioService: UsuarioService) {

  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
