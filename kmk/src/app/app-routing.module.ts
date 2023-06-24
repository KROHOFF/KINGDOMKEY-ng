import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { JugadorComponent } from './pages/jugador/jugador.component';
import { TorneosComponent } from './pages/torneos/torneos.component';
import { JugadorInfoComponent } from './pages/jugador-info/jugador-info.component';
import { TorneoInfoComponent } from './pages/torneo-info/torneo-info.component';

const routes: Routes = [
  { path : '', component : InicioComponent },
  { path : 'jugadores', component : JugadoresComponent },
  { path : 'jugador', component : JugadorComponent },
  { path : 'jugador-info', component : JugadorInfoComponent },
  { path : 'torneos', component: TorneosComponent },
  { path : 'torneo-info', component: TorneoInfoComponent },
  { path : '**', redirectTo : '', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
