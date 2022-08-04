import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { InterestComponent } from './interest/interest.component';
import { AwardsComponent } from './awards/awards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    InterestComponent,
    AwardsComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, NgbTooltipModule],
  exports: [
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    InterestComponent,
    AwardsComponent,
    NavbarComponent,
  ],
})
export class PartsModule {}
