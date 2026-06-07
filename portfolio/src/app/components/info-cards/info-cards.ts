import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalData } from '../../models/portfolio.model';

@Component({
  selector: 'app-info-cards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 px-4 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Card 1: Tech Enthusiast -->
        <div class="md:col-span-4 md:row-span-2 glass-morphism rounded-3xl p-8 flex flex-col justify-between group hover:border-purple-500/50 transition-all">
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">Tech Enthusiast</h3>
            <p class="text-white/60 leading-relaxed">
              Always excited to build secure and intelligent systems. I thrive on solving complex problems and staying at the forefront of emerging technologies.
            </p>
          </div>
          <div class="mt-8 relative h-32 overflow-hidden rounded-xl bg-purple-500/10 border border-purple-500/20">
            <div class="absolute inset-0 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">🚀</div>
          </div>
        </div>

        <!-- Card 2: Let's Work Together -->
        <div class="md:col-span-4 h-64 glass-morphism rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:border-accent-blue/50 transition-all">
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue to-purple-600 flex items-center justify-center text-xl font-bold mb-4">SP</div>
          <h3 class="text-xl font-bold mb-4">Let's work together on your next project</h3>
          <a [href]="'mailto:' + personalData.email" class="px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Copy Email
          </a>
        </div>

        <!-- Card 3: Remote · India -->
        <div class="md:col-span-4 h-64 glass-morphism rounded-3xl p-8 flex flex-col justify-between group hover:border-accent-emerald/50 transition-all">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-xl font-bold">Remote · India</h3>
              <p class="text-white/60 text-sm">Flexible with time zone communications</p>
            </div>
            <span class="text-2xl">🌍</span>
          </div>
          <div class="w-full h-24 bg-accent-emerald/10 rounded-xl overflow-hidden relative">
             <div class="absolute inset-0 flex items-center justify-center opacity-20">
               <svg class="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
             </div>
          </div>
        </div>

        <!-- Card 4: Behind the Scenes -->
        <div class="md:col-span-8 glass-morphism rounded-3xl p-8 group hover:border-accent-pink/50 transition-all">
          <div class="mb-6">
            <h3 class="text-xl font-bold">Behind the Scenes</h3>
            <p class="text-white/60">Currently mastering Java Full Stack Development.</p>
          </div>
          
          <div class="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
            <div *ngFor="let step of steps" class="flex-shrink-0 w-32 h-20 glass-morphism rounded-xl p-3 flex flex-col justify-center items-center text-center space-y-1">
              <span class="text-xs font-bold text-white/40">{{ step.index }}</span>
              <span class="text-xs font-semibold">{{ step.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `]
})
export class InfoCardsComponent implements OnInit {
  personalData!: PersonalData;
  steps = [
    { index: '01', label: 'Planning' },
    { index: '02', label: 'Design' },
    { index: '03', label: 'Development' },
    { index: '04', label: 'Testing' },
    { index: '05', label: 'Security' },
    { index: '06', label: 'Deployment' }
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.personalData = this.portfolioService.getPersonalData();
  }
}
