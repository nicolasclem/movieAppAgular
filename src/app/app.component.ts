import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines=[
        {
          titulo:"Spider-Man",
          fecha: new Date(),
          precio:1400.99
        },
        {
          titulo:"Moana",
          fecha: new Date(),
          precio:200.99
        }
      ]

    }, 2000);

    setTimeout(() => {
      this.peliculasProximosEstrenos=[
        {
          titulo:"1985",
          fecha: new Date(),
          precio:1800.99
        },
        {
          titulo:"Rocky",
          fecha: new Date(),
          precio:600.99
        },
        {
          titulo:"Argentina",
          fecha: new Date(),
          precio:800.99
        }
      ]
    }, 1500);


  }
  title = 'front-end';
  ocultar= false;
  peliculasEnCines;
  peliculasProximosEstrenos;

  manejarRated(voto : number):void
  {
    alert(voto);
  }
}
