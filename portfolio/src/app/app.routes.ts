import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProjectsPageComponent } from './pages/projects-page/projects-page';
import { SkillsPageComponent } from './pages/skills-page/skills-page';
import { ContactPageComponent } from './pages/contact-page/contact-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'skills', component: SkillsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' }
];
