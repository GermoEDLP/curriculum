import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  public info: any;

  constructor() { }

  ngOnInit(): void {
    this.info = {
      'es': {
        title: 'Cursos',
        courses: [
          {
            title: 'PHP y MySQL Avanzado',
            site: 'Universidad Tecnológica Nacional de Buenos Aires (UTN.BA)',
            date: 'Marzo 2020',
            credential: 'CER-HVNALHX5-438775',
            credentialUrl: 'https://sigead.online/alumnos/validar_certificado',
          },
          {
            title: 'Fundamentos de las Bases de Datos',
            site: 'Universidad Tecnológica Nacional de Buenos Aires (UTN.BA)',
            date: 'Marzo 2020',
            credential: 'CER-1NNLP4E9-438458',
            credentialUrl: 'https://sigead.online/alumnos/validar_certificado',
          }
        ]
      }
    }
  }

}
