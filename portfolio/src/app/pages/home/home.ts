import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';
import { InfoCardsComponent } from '../../components/info-cards/info-cards';
import { ProjectsComponent } from '../../components/projects/projects';
import { SkillsComponent } from '../../components/skills/skills';
import { CertificationsComponent } from '../../components/certifications/certifications';
import { StatsComponent } from '../../components/stats/stats';
import { ServicesComponent } from '../../components/services/services';
import { MarqueeComponent } from '../../components/marquee/marquee';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    InfoCardsComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificationsComponent,
    StatsComponent,
    ServicesComponent,
    MarqueeComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-info-cards></app-info-cards>
    <app-projects></app-projects>
    <app-skills></app-skills>
    <app-certifications></app-certifications>
    <app-stats></app-stats>
    <app-services></app-services>
    <app-marquee></app-marquee>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HomeComponent {}
