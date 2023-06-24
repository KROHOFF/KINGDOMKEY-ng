import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { TorneosComponent } from './torneos/torneos.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JugadorInfoComponent } from './jugador-info/jugador-info.component';
import { ComponentsModule } from "../components/components.module";
import { TorneoInfoComponent } from './torneo-info/torneo-info.component';


@NgModule({
    declarations: [
        InicioComponent,
        JugadoresComponent,
        TorneosComponent,
        JugadorComponent,
        JugadorInfoComponent,
        TorneoInfoComponent,
    ],
    exports: [
        InicioComponent,
        JugadoresComponent,
        TorneosComponent,
        JugadorComponent,
        JugadorInfoComponent,
        TorneoInfoComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule
    ]
})
export class PagesModule { }
