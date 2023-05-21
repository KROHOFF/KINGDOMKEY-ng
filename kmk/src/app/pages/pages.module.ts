import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { TorneosComponent } from './torneos/torneos.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JugadorInfoComponent } from './jugador-info/jugador-info.component';
import { ComponentsModule } from "../components/components.module";


@NgModule({
    declarations: [
        InicioComponent,
        JugadoresComponent,
        TorneosComponent,
        JugadorComponent,
        JugadorInfoComponent,
    ],
    exports: [
        InicioComponent,
        JugadoresComponent,
        TorneosComponent,
        JugadorComponent,
        JugadorInfoComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule
    ]
})
export class PagesModule { }
