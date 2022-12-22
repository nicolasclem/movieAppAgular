import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }



  control: FormControl= new FormControl();

  actores=[
    {nombre:'Tom Holland',personaje:'',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg'},
    {nombre:'Tom Hanks',personaje:'',foto:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg'},
    {nombre:'Tom Hiddleston',personaje:'',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg/1200px-Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg'},
    {nombre:'Tom Hardy',personaje:'',foto:'https://upload.wikimedia.org/wikipedia/commons/4/43/Tom_Hardy_by_Gage_Skidmore.jpg'}]

  actoresOriginal= this.actores

  actoresSeleccionados=[];

  columnasAMostrar=['imagen','nombre','personaje','acciones'];

  @ViewChild(MatTable) table: MatTable<any>;

    ngOnInit(): void {
    this.control.valueChanges.subscribe(valor=>{
      this.actores= this.actoresOriginal;
      this.actores= this.actores.filter(actor=>actor.nombre.indexOf(valor)!==-1)
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
      if(this.table !== undefined){
        this.table.renderRows();
      }
  }

  eliminar(actor){
    const indice = this.actoresSeleccionados.findIndex(a=>a.nombre ===actor.nombre);
    this.actoresSeleccionados.splice(indice,1);
    this.table.renderRows();
  }

  finalizaArrastre(event:CdkDragDrop<any[]>){
     const indicePrevio =  this.actoresSeleccionados.findIndex(
       actor=>actor === event.item.data
    )


     moveItemInArray(this.actoresSeleccionados,indicePrevio,event.currentIndex);
    this.table.renderRows();
  }

}
