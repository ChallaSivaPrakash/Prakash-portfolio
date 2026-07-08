import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-black">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Heading -->
        <div class="mb-16">
          <p class="text-purple-500 font-bold uppercase tracking-widest text-sm mb-2">Code Meets Creativity</p>
          <h2 class="text-4xl md:text-6xl font-bold text-white">
            <span class="text-white/40">Crafted</span> Projects
          </h2>
        </div>

        <!-- Desktop Split Layout -->
        <div class="hidden lg:grid grid-cols-2 gap-12 relative">
          <!-- Left: Scrollable Cards -->
          <div class="space-y-12 pb-40">
            <div 
              *ngFor="let project of projects; let i = index" 
              class="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer"
              (mouseenter)="activeProject = project"
            >
              <div 
                class="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                [style.background]="'linear-gradient(45deg, ' + project.accent + '22, #000)'"
              ></div>
              <div class="absolute inset-0 flex items-center justify-center text-8xl opacity-20 group-hover:opacity-40 transition-opacity">
                {{ project.icon }}
              </div>
              <div class="absolute bottom-8 left-8">
                <span class="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold border border-white/10 mb-2 inline-block">
                  {{ project.category }}
                </span>
                <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
              </div>
            </div>
          </div>

          <!-- Right: Sticky Detail Panel -->
          <div class="sticky top-32 h-[calc(100vh-160px)] glass-morphism rounded-3xl p-10 flex flex-col justify-between">
            <div *ngIf="activeProject" class="animate-fade-in">
              <div class="flex items-center space-x-4 mb-6">
                <span class="text-4xl">{{ activeProject.icon }}</span>
                <h3 class="text-3xl font-bold" [style.color]="activeProject.accent">{{ activeProject.title }}</h3>
              </div>
              
              <p class="text-xl text-white/80 mb-8 leading-relaxed">{{ activeProject.tagline }}</p>
              
              <div class="space-y-6">
                <div>
                  <h4 class="text-sm font-bold uppercase tracking-widest text-white/40 mb-3">Key Highlights</h4>
                  <ul class="space-y-2">
                    <li *ngFor="let highlight of activeProject.highlights" class="flex items-start text-white/60">
                      <span class="text-purple-500 mr-2">•</span>
                      {{ highlight }}
                    </li>
                  </ul>
                </div>

                <div class="p-4 rounded-xl" [style.background]="'linear-gradient(135deg, ' + activeProject.accent + '22, ' + activeProject.accent + '08)'">
                  <h4 class="text-sm font-bold uppercase tracking-widest mb-3" [style.color]="activeProject.accent">MARKET DIFFERENTIATOR</h4>
                  <p class="text-white/80 text-sm leading-relaxed">{{ activeProject.marketDifferentiator }}</p>
                </div>

                <div>
                  <h4 class="text-sm font-bold uppercase tracking-widest text-white/40 mb-3">Tech Stack</h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      *ngFor="let tech of activeProject.stack" 
                      class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
              <a [href]="activeProject?.github" target="_blank" class="flex items-center text-white hover:text-purple-400 transition-colors">
                <span class="mr-2">View GitHub</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <div class="flex space-x-1">
                <div 
                  *ngFor="let p of projects" 
                  class="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  [class.bg-white]="p === activeProject"
                  [class.bg-white/20]="p !== activeProject"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Stack Layout -->
        <div class="lg:hidden space-y-8">
          <div 
            *ngFor="let project of projects" 
            class="glass-morphism rounded-3xl overflow-hidden"
          >
            <div class="aspect-video relative flex items-center justify-center text-6xl" [style.background]="'linear-gradient(45deg, ' + project.accent + '22, #000)'">
              {{ project.icon }}
            </div>
            <div class="p-6">
              <span class="text-xs font-bold text-purple-500 uppercase mb-2 block">{{ project.category }}</span>
              <h3 class="text-2xl font-bold mb-3">{{ project.title }}</h3>
              <p class="text-white/60 mb-6 text-sm">{{ project.tagline }}</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span *ngFor="let tech of project.stack" class="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/40">
                  {{ tech }}
                </span>
              </div>
              <a [href]="project.github" target="_blank" class="block text-center py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-bold">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  activeProject?: Project;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.projects = this.portfolioService.getProjects();
    this.activeProject = this.projects[0];
  }
}
