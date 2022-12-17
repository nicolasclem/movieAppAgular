import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraMayuscula } from 'src/app/utilidades/validadores/primeraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-generos',
  templateUrl: './formulario-generos.component.html',
  styleUrls: ['./formulario-generos.component.css']
})
export class FormularioGenerosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: generoCreacionDTO;
  @Output()
  submit: EventEmitter<generoCreacionDTO>=new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:['',{
        validators: [Validators.required, Validators.minLength(3), primeraMayuscula()]
      }]

    });

    if(this.modelo!= undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
      this.submit.emit(this.form.value);
  }


  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre')
    if (campo.hasError('required')){
        return 'El campo es requerido!';
    }
    if (campo.hasError('minlength')){
      return 'Longitud minima es de 3 caracteres!';
    }
    if(campo.hasError('primeraMayuscula')){
       return campo.getError('primeraMayuscula').mensaje;
    }
  }

}
