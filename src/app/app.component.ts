import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

    setTimeout(() => {
      this.peliculas=[
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

  }
  title = 'front-end';

  peliculas;


  duplica(valor: number): number{
        return valor*2
  }
}
