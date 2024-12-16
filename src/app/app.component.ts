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
  /* Método para desplazarse a una sección específica
  navigateToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }*/
/*
    showBackToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showBackToTop = scrollTop > 300; // Muestra el botón si se ha scrolleado 300px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }*/
}
