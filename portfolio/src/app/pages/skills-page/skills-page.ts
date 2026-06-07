import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../../components/skills/skills';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  template: `
    <div class="pt-24 min-h-screen">
      <app-skills></app-skills>
    </div>
  `
})
export class SkillsPageComponent {}
