import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }



  control: FormControl= new FormControl();

  actores=[
    {nombre:'Tom Holland',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg'},
    {nombre:'Tom Hanks',foto:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg'},
    {nombre:'Tom Hiddleston',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg/1200px-Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg'},
    {nombre:'Tom Hardy',foto:'https://upload.wikimedia.org/wikipedia/commons/4/43/Tom_Hardy_by_Gage_Skidmore.jpg'}]

  actoresOriginal= this.actores

  actoresSeleccionados=[];
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
  }

}
