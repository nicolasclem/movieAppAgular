import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaDTO, peliculaCreacionDTO } from '../pelicula';
import { SelectorMultipleModelo } from '../../utilidades/selector-multiple/selectorMultiple';

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

  generosNoSeleccionados: SelectorMultipleModelo[]= [
  {llave:1,valor:'Comedia'},
  {llave:2,valor:'Drama'},
  {llave:3,valor:'Accion'},
  {llave:4,valor:'Terror'},
    ]
    generosSeleccionados: SelectorMultipleModelo[]=[]

  cinesNoSeleccionados:SelectorMultipleModelo[]=[
    {llave:1, valor:'Gran Rex'},
    {llave:2, valor:'Roma'},
    {llave:3, valor:'Cinema Center'},

  ]
  cinesSeleccionados: SelectorMultipleModelo[]=[]
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
      poster:'',
      generosId:'',
      cinesId:''
    });
    if(this.modelo != undefined){
      this.form.patchValue(this.modelo);
    }

  }

  guardarCambios(){
    const generosIds= this.generosSeleccionados.map(val=>val.llave);
    this.form.get('generosId').setValue(generosIds);


    const cinesIds = this.cinesSeleccionados.map(val=>val.llave);
    this.form.get('cinesId').setValue(cinesIds);

    this.onSubimt.emit(this.form.value);

  }

  archivoSeleccionado(archivo : File){
    this.form.get('poster').setValue(archivo)
  }
}
