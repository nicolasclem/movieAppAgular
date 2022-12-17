import { Component, OnInit } from '@angular/core';
import { generoCreacionDTO } from '../genero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-generos',
  templateUrl: './editar-generos.component.html',
  styleUrls: ['./editar-generos.component.css']
})
export class EditarGenerosComponent implements OnInit {

  constructor(private router:Router) { }

  modelo: generoCreacionDTO = {nombre: 'Accion'};

  ngOnInit(): void {
  }
  guardarCambios(genero : generoCreacionDTO){
      //guardar Cambios desde edit
      console.log(genero);

       this.router.navigate(['/generos'])

  }
}
