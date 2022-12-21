import { Component, OnInit } from '@angular/core';
import { PeliculaDTO, peliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO= {titulo:'bauti',
                        trailer:'jajajaja',
                        enCines:true,
                        resumen:'resumen de pelicula',
                        fechaLanzamiento: new Date(),
                        poster:'https://media.ambito.com/p/10c9ba4158473f32328f0fa07ca1e4eb/adjuntos/239/imagenes/040/326/0040326036/1200x675/smart/lali-espositojpg.jpg'}
  ngOnInit(): void {
  }

  guardarCambios(pelicula : peliculaCreacionDTO){
    console.log(pelicula);

  }

}
