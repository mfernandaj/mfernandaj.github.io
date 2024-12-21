import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JustificacionComponent } from './justificacion/justificacion.component';
import { InstalacionComponent } from './instalacion/instalacion.component';
import { PrimerosPasosComponent } from './primeros-pasos/primeros-pasos.component';
import { UtilizacionComponent } from './utilizacion/utilizacion.component';
import { ExplicacionComponent } from './explicacion/explicacion.component';
import { ConclusionesComponent } from './conclusiones/conclusiones.component';


export const routes: Routes = [
    { path: 'justificacion', component: JustificacionComponent },
    { path: 'instalacion', component: InstalacionComponent },
    { path: 'primeros-pasos', component: PrimerosPasosComponent },
    { path: 'utilizacion', component: UtilizacionComponent },
    { path: 'explicacion', component: ExplicacionComponent },
    { path: 'conclusiones', component: ConclusionesComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  { path: '**', redirectTo: '' } // Manejar rutas no encontradas

];


