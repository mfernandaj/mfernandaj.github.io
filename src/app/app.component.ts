import { Component,HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JustificacionComponent } from './justificacion/justificacion.component';
import { InstalacionComponent } from './instalacion/instalacion.component';
import { PrimerosPasosComponent } from './primeros-pasos/primeros-pasos.component';
import { UtilizacionComponent } from './utilizacion/utilizacion.component';
import { ConclusionesComponent } from './conclusiones/conclusiones.component';
import { ExplicacionComponent } from './explicacion/explicacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    JustificacionComponent,
    InstalacionComponent,
    PrimerosPasosComponent,
    UtilizacionComponent,
    ExplicacionComponent,
    ConclusionesComponent,],
  templateUrl: './app.component.html',
  //template: '<h1>Hola Mundo con Angular!</h1>',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'tutorial-angular';
  
}
