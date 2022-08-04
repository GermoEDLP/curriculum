import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
})
export class AwardsComponent implements OnInit {
  public info: any;

  constructor() {}

  ngOnInit(): void {
    this.info = {
      es: {
        title: 'Varios',
        var: [
          {
            title: 'Lenguajes: "',
            class: 'fas fa-quote-left text-warning',
            items: [
              'Español: Nativo',
              'Ingles: Comprensión y lectura avanzada / Escritura nivel medio',
            ],
          },
          {
            title: 'Registro de conductor categorías B.1. y F.',
            class: 'fas fa-car text-warning',
          },
        ],
      },
    };
  }
}
