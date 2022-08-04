import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  public info: any;

  public lang: string = 'en';

  constructor() {}

  ngOnInit(): void {
    this.info = {
      es: {
        title: 'Educación',
        items: [
          {
            institute: 'Universidad Nacional de La Plata (UNLP)',
            grade: 'Ingenieria Industrial',
            obs: ['Proximo a carrera de grado: 90%', 'Calif.: 7,3'],
            date: 'Enero 2010 - Actualidad'
          },
          {
            institute: 'Universidad Nacional de La Plata (UNLP)',
            grade: 'Licenciatura en Sistemas',
            obs: ['Avance actual: 33%', 'Calif.: 8'],
            date: 'Enero 2019 - Actualidad'
          },
          {
            institute: 'Instituto Madre de la Divina Gracia',
            grade: 'Bachiller en Cs. Naturales y Cs. Químicas',
            obs: ['Egreso: 2010', 'Calif.: 9,7'],
            date: 'Diciembre 2009'
          },
        ],
      },
      en: {
        title: 'Education',
        items: [
          {
            institute: 'Universidad Nacional de La Plata (UNLP)',
            grade: 'Ingenieria Industrial',
            obs: ['Proximo a carrera de grado: 90%', 'Calif.: 7,3'],
            date: 'Enero 2010 - Actualidad'
          },
          {
            institute: 'Universidad Nacional de La Plata (UNLP)',
            grade: 'Licenciatura en Sistemas',
            obs: ['Avance actual: 33%', 'Calif.: 8'],
            date: 'Enero 2019 - Actualidad'
          },
          {
            institute: 'Instituto Madre de la Divina Gracia',
            grade: 'Bachiller en Cs. Naturales y Cs. Químicas',
            obs: ['Egreso: 2010', 'Calif.: 9,7'],
            date: 'Diciembre 2009'
          },
        ],
      },
    };
  }
}
