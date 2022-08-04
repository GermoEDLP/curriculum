import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  public info: any;

  constructor() {}

  ngOnInit(): void {
    this.info = {
      es: {
        items: [
          {
            title: 'Desarrollador Web Full Stack',
            company: 'Torre Tres',
            content: [
              `Desarrollo en FrontEnd: HTML5, CSS3, ECMAScript 6, Angular 11 y Bootstrap 4.`,
              `Desarrollo en BackEnd: PHP7, NodeJS y Firebase.`,
            ],
            date: 'Febrero 2019 - Presente',
          },
          {
            title: 'Técnico en Electromedicina',
            company: 'H.I.G.A. Gral. San Martin de La Plata',
            content: [
              `Cargo tecnico en Electromedicina. Mantenimiento preventivo y
              correctivo de los siguientes equipos médicos: Respiradores, Maquinas
              de Rayos X, Tomógrafos, Monitores multiparámetros, heladeras para
              sangre humana, crio freezers, centrifugas y micro centrifugas,
              campanas de flujo laminar, microscopios ópticos, UPS´s y
              estabilizadores, Lamparas scialiticas, mesas de cirugía, camas
              eléctricas y equipos de testeo de signos vitales. Desarrollo de
              métodos de reparación específicos para equipos que cuentan con
              problemas recurrentes. Desarrollo de modelos circuitales de mayor
              eficiencia para equipos con problemas. Desarrollo del programa que
              actualmente utiliza el Servicio de Ingeniería Clínica del HIGA Gral
              San Martin para monitorear el estado de funcionamiento y la locación
              de los equipos del hospital, asi como sus movimientos fuera del mismo
              (reparaciones externas). Realicé estudios sobre eficiencia de lamparas
              de Cirugía que dieron lugar al desarrollo de nuevas configuraciones de
              desarrollo circuital para mejorar rendimientos energéticos y alargar
              la vida útil de los componentes de las mismas.`,
            ],
            date: 'Octubre 2015 - Febrero 2019',
          },
          {
            title: 'Técnico',
            company: 'Hospital Español de La Plata',
            content: [
              `Manufacturación de componentes Ácidos (X-1, X-15 y X-16) y básicos
              (X-10 y Bicarbonato de sodio) utilizados en el proceso de
              Hemodiálisis. Mantenimiento preventivo y correctivo de los mezcladores
              y el ozonizador. Mantenimiento preventivo del Equipo de Ósmosis
              Inversa (variaciones de presión y flujo, chequeo de bombas, cabezales
              y micro filtros). Transporte y manejo de materiales peligrosos. Testeo
              de productos parciales y finales.`,
            ],
            date: 'Marzo 2016 - Febrero 2017',
          },
          {
            title: 'Técnico en Tratamiento de Agua',
            company: 'H.I.G.A. Gral. San Martin de La Plata',
            content: [
              `Operación y mantenimiento preventivo (desinfecciones) y correctivo de
              Equipos de Ósmosis Inversa, incluyendo pre-tratamiento (Lecho arenoso,
              resina cationica de base sódica y carbón activado), membranas de
              Ósmosis Inversa y bombas. Testeo de producto parcial y final bajo
              normativa AAMI y Farmacopea para tratamiento de Hemodialisis. Manejo y
              transporte de productos peligrosos. Diseño de plantas de Ósmosis
              Inversa, montaje y puesta en marcha. Seteo de equipamiento y puesta en
              funcionamiento. Desarrollo de manuales y protocolos para la
              optimización del funcionamiento de los servicios.`,
            ],
            date: 'Agosto 2014 - Octubre 2015',
          },
        ],
      },
    };
  }
}
