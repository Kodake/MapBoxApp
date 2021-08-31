import { Component } from '@angular/core';

interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})
export class PropiedadesComponent {

  propiedades: Propiedad[] = [
    {
      titulo: 'Palacio Nacional, República Dominicana',
      descripcion: 'Palacio Nacional, República Dominicana',
      lngLat: [-69.8978, 18.4743]
    },
    {
      titulo: 'Palacio de los deportes, República Dominicana',
      descripcion: 'Palacio de los deportes, República Dominicana',
      lngLat: [-69.9190, 18.4750]
    },
    {
      titulo: 'Parque Nacional del Este, República Dominicana',
      descripcion: 'Parque Nacional del Este, República Dominicana',
      lngLat: [-68.6844, 18.2444]
    },
    {
      titulo: 'Parque Nacional Los Tres Ojos, República Dominicana',
      descripcion: 'Parque Nacional Los Tres Ojos, República Dominicana',
      lngLat: [ -69.8432, 18.4802 ]
    },
  ]

}
