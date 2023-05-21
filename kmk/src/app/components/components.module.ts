import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RrssComponent } from './rrss/rrss.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    HeaderComponent,
    RrssComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports : [
    HeaderComponent,
    RrssComponent,
    FooterComponent,
    SliderComponent
  ]
})
export class ComponentsModule { }
