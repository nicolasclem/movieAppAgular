import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtros-peliculas',
  templateUrl: './filtros-peliculas.component.html',
  styleUrls: ['./filtros-peliculas.component.css']
})
export class FiltrosPeliculasComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder,
                private location:Location,
                private activatedRoute: ActivatedRoute) { }

  form: FormGroup;

  generos=[
    {id:1,nombre:"Drama"},
    {id:2,nombre:"Accion"},
    {id:3,nombre:"Comedia"},

  ]

  peliculas=[
    {titulo:"Spider-Man",enCines:false, proximosEstrenos:true,generos:[1,2],poster:"https://images.cdn3.buscalibre.com/fit-in/360x360/80/2b/802bcb15421a3d1950a2793988d8b60e.jpg"},
    {titulo:"Doce Monos",enCines:true, proximosEstrenos:false,generos:[3],poster:"https://i.pinimg.com/originals/a8/bb/36/a8bb3637344058edd4203cd36d034bf1.png"},
    {titulo:"Donnie Darko",enCines:false, proximosEstrenos:false,generos:[1],poster:"https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"},

  ]

  peliculasOriginal = this.peliculas

  formularioOriginal = {
    titulo:'',
    generoId:0,
    proximosEstrenos:false,
    enCines:false
  }
  ngOnInit(): void {
    this.form= this.FormBuilder.group(
      this.formularioOriginal
    );
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges.subscribe( valores=>{
      this.peliculas= this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.escribirParametrosEnUrl();
    })
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params)=>{
      var objeto: any={};
      if(params.titulo){
        objeto.titulo = params.titulo;
      }
      if(params.generoId){
        objeto.generoId = Number(params.generoId);
      }
      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if(params.enCines){
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto)
    });
  }

  private escribirParametrosEnUrl(){
    var queryString =[];
    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo){
      queryString.push(`titulo=${valoresFormulario.titulo}`);
    }

    if(valoresFormulario.generoId != '0'){
      queryString.push(`generoId=${valoresFormulario.generoId}`);
    }

    if(valoresFormulario.proximosEstrenos){
      queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if(valoresFormulario.enCines){
      queryString.push(`enCines=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryString.join('&'));
  }

  buscarPeliculas(valores : any){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo)!==-1);
    }
    if(valores.generoId !==0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId)!==-1);
    }
    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula=>pelicula.proximosEstrenos);
    }
    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula=>pelicula.enCines);
    }


  }


  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }
}
