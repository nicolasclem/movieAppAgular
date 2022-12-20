import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaDTO, peliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form: FormGroup

  @Input()
  modelo:PeliculaDTO;

  @Output()
  onSubimt:EventEmitter<peliculaCreacionDTO> = new EventEmitter<peliculaCreacionDTO>();

  ngOnInit(): void {

    this.form= this.formBuilder.group({
      titulo:[
        '',
        {
          validators: [Validators.required]
        }
      ],
      resumen:'',
      enCines:false,
      trailer:'',
      fechaLanzamiento:'',
      poster:''
    });
    if(this.modelo != undefined){
      this.form.patchValue(this.modelo);
    }

  }

  guardarCambios(){

    this.onSubimt.emit(this.form.value);

  }

  archivoSeleccionado(archivo : File){
    this.form.get('poster').setValue(archivo)
  }
}
