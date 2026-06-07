import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalData } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Cosmic Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-purple-950 via-indigo-900 to-black z-0"></div>
      <div class="absolute inset-0 bg-black/40 z-10"></div>
      
      <!-- Particle Overlay (Simple CSS Particles) -->
      <div class="absolute inset-0 z-20 pointer-events-none opacity-30">
        <div class="stars"></div>
      </div>

      <!-- Content -->
      <div class="relative z-30 text-center px-4 max-w-5xl mx-auto">
        <!-- New Badge -->
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
          <span class="px-2 py-0.5 rounded-full bg-purple-500 text-[10px] font-bold uppercase tracking-wider">New</span>
          <span class="text-sm text-white/80 shiny-text">Building in Public →</span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Turning ideas into <br>
          <span class="italic text-gradient">secure, intelligent systems</span>
        </h1>

        <!-- Subtitle -->
        <div class="flex flex-col items-center space-y-4">
          <div class="relative inline-block px-8 py-2">
            <div class="absolute inset-0 bg-purple-600/30 transform -skew-x-12 rounded-lg"></div>
            <p class="relative text-xl md:text-2xl font-semibold text-white">
              Hello, I'm <span class="text-purple-400">{{ personalData.name }}</span>
            </p>
          </div>
          <p class="text-lg md:text-xl text-white/60 max-w-2xl">
            A {{ personalData.title }}
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" class="group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center transition-all hover:scale-105 active:scale-95">
            View My Work
            <svg class="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a [href]="'mailto:' + personalData.email" class="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold flex items-center transition-all hover:bg-white/10">
            <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>
        </div>
      </div>

      <!-- Bottom Gradient Fade -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
    </section>
  `,
  styles: [`
    .stars {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(white, transparent 2px);
      background-size: 50px 50px;
      animation: stars 20s linear infinite;
    }

    @keyframes stars {
      0% { background-position: 0 0; }
      100% { background-position: 0 1000px; }
    }

    .shiny-text {
      background: linear-gradient(90deg, #fff, #a855f7, #fff);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shiny 3s linear infinite;
    }

    @keyframes shiny {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `]
})
export class HeroComponent implements OnInit {
  personalData!: PersonalData;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.personalData = this.portfolioService.getPersonalData();
  }
}
