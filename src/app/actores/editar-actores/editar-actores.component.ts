import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actores',
  templateUrl: './editar-actores.component.html',
  styleUrls: ['./editar-actores.component.css']
})
export class EditarActoresComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }


  modelo: actorDTO = {nombre:'Bauti',descripcion:'Datos de vida, peliculas etc.',fechaNacimiento: new Date(),foto:'https://media.ambito.com/p/c310a00fb8c98aab69b1a6d3563c36ea/adjuntos/239/imagenes/040/136/0040136397/lali-esposito-1jpg.jpg'}
  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      //alert(params.id);

    })
  }

  guardarCambios(actor:actorCreacionDTO){
    console.log(actor);

  }

}
