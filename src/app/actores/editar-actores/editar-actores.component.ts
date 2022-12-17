import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actores',
  templateUrl: './editar-actores.component.html',
  styleUrls: ['./editar-actores.component.css']
})
export class EditarActoresComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      //alert(params.id);

    })
  }

}
