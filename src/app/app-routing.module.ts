import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndicePeliculasComponent } from './peliculas/indice-peliculas/indice-peliculas.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarActoresComponent } from './actores/editar-actores/editar-actores.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},

  {path:'generos',component:IndiceGenerosComponent},
  {path:'generos/crear', component:CrearGeneroComponent},
  {path:'generos/editar/:id', component:EditarGenerosComponent},

  {path:'actores', component:IndiceActoresComponent},
  {path:'actores/crear', component:CrearActoresComponent},
  {path:'actores/editar/:id', component:EditarActoresComponent},

  {path:'cines', component:IndiceCinesComponent},
  {path:'cines/crear', component:CrearCineComponent},
  {path:'cines/editar/:id', component:EditarCineComponent},

  {path:'peliculas/crear', component:CrearPeliculaComponent},
  {path:'peliculas/editar/:id', component:EditarPeliculaComponent},

  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
