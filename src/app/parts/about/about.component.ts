import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  public info: any;

  ngOnInit(): void {
    this.info = {
      es: {
        name: 'German',
        lastname: 'Brassini',
        subheading1: 'Desarrollador FullStack orientado a Javascript',
        subheading2: {
          title: 'german.brassini@gmail.com',
          mail: 'mailto:german.brassini@gmail.com',
        },
        text: `Principalmente me desempeñé en trabajos relacionados a la industria, la
        tecnología y la medicina. Poseo amplios conocimientos en electrónica,
        química y programación. Me caracterizo por poseer una capacidad de
        aprendizaje veloz y por buscar una constante optimización de los
        procesos. Puntual, prolijo y eficiente.`,
        socialIcons: [
          {
            href: 'https://www.linkedin.com/in/german-brassini-68107114b/',
            target: '_blank',
            icon: 'fab fa-linkedin-in',
          },
          {
            href: 'https://github.com/GermoEDLP',
            target: '_blank',
            icon: 'fab fa-github',
          },
          {
            href: 'mailto:german.brassini@gmail.com',
            target: '_blank',
            icon: 'fa fa-envelope',
          },
          {
            href: 'tel:00542215220891',
            target: '_self',
            icon: 'fas fa-phone',
          }
        ],
      },
    };
  }
}
