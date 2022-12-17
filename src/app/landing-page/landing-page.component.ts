import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines=[
        {
          titulo:"Spider-Man",
          fecha: new Date(),
          precio:1400.99,
          poster:"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/219935/SMFFH-ExtendedCut-1sheet-935x1381.jpg"
        },
        {
          titulo:"Moana",
          fecha: new Date(),
          precio:200.99,
          poster:"https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg"
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
