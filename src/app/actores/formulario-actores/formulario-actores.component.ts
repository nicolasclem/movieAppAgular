import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup
  @Output()
  submit:EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {

    this.form= this.formBuilder.group({
      nombre:['',
    {
      validators:[Validators.required]
    },
    ],
    fechaNacimiento:''
    })
  }

  onSubmit(){
    this.submit.emit(this.form.value);
  }

}
