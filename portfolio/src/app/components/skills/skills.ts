import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 relative overflow-hidden">
      <!-- Decorative SVG Triangle -->
      <div class="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <path d="M400 0L0 400H400V0Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="400" y1="0" x2="200" y2="400" gradientUnits="userSpaceOnUse">
              <stop stop-color="#a855f7" />
              <stop offset="1" stop-color="black" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="max-w-7xl mx-auto px-4">
        <div class="mb-16">
          <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">
            <span class="text-white/40">Technical</span> Expertise
          </h2>
          <p class="text-white/60 max-w-2xl">A comprehensive toolkit spanning full-stack development, AI orchestration, and security engineering.</p>
        </div>

        <div class="space-y-12">
          <div *ngFor="let category of skills" class="animate-on-scroll">
            <h3 class="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-6">{{ category.category }}</h3>
            <div class="flex flex-wrap gap-4">
              <div 
                *ngFor="let skill of category.items" 
                class="px-6 py-3 rounded-2xl glass-morphism border border-white/5 hover:border-purple-500/30 transition-all hover:scale-105 group"
              >
                <span class="text-white/80 group-hover:text-white transition-colors">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(20px);
      animation: slideUp 0.6s ease-out forwards;
    }

    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.skills = this.portfolioService.getSkills();
  }
}
