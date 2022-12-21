import { Component, Input, OnInit } from '@angular/core';
import { SelectorMultipleModelo } from './selectorMultiple';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent implements OnInit {

  constructor() { }

  @Input()
  seleccionados: SelectorMultipleModelo[]=[];

  @Input()
  noSeleccionados: SelectorMultipleModelo[]=[];

  ngOnInit(): void {
  }

  seleccionarTodo(){
    this.seleccionados.push(...this.noSeleccionados);
    this.noSeleccionados=[];
  }

  desseleccionarTodo(){
    this.noSeleccionados.push(...this.seleccionados);
    this.seleccionados=[];
  }
  seleccionar(item: SelectorMultipleModelo, index: number){
    this.seleccionados.push(item);
    this.noSeleccionados.splice(index,1)
  }

  deseleccionar(item: SelectorMultipleModelo, index: number){
    this.noSeleccionados.push(item);
    this.seleccionados.splice(index,1)
  }
}
