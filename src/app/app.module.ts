import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';

import {ReactiveFormsModule}from '@angular/forms';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { IndicePeliculasComponent } from './peliculas/indice-peliculas/indice-peliculas.component';
import { EditarActoresComponent } from './actores/editar-actores/editar-actores.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FormularioGenerosComponent } from './generos/formulario-generos/formulario-generos.component';
import { FiltrosPeliculasComponent } from './peliculas/filtros-peliculas/filtros-peliculas.component';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component'

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    CrearGeneroComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    IndiceActoresComponent,
    CrearActoresComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCinesComponent,
    IndicePeliculasComponent,
    EditarActoresComponent,
    EditarGenerosComponent,
    EditarCineComponent,
    EditarPeliculaComponent,
    FormularioGenerosComponent,
    FiltrosPeliculasComponent,
    FormularioActoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
