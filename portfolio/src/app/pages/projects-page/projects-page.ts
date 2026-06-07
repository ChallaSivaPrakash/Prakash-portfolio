import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../../components/projects/projects';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectsComponent],
  template: `
    <div class="pt-24 min-h-screen">
      <app-projects></app-projects>
    </div>
  `
})
export class ProjectsPageComponent {}
