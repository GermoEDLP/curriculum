import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  public info: any;

  constructor() {}

  ngOnInit(): void {
    this.info = {
      es: {
        title: 'Habilidades',
        skills: [
          {
            title: 'Lenguajes',
            items: ['HTML5 / CSS3', 'JavaScript / TypeScript', 'PHP'],
          },
          {
            title: 'Frameworks y librerías',
            items: ['NestJS', 'Angular 11 / AngularJS 1.8', 'React 16+'],
          },
          {
            title: 'Base de datos',
            items: ['MongoDB', 'MySQL'],
          },
          {
            title: 'Herramientas',
            items: [
              'Git / GitHub / GitLab',
              'Node / NPM',
              'BaaS (Firebase, Supabase)',
            ],
          },
        ],
      },
    };
  }
}
