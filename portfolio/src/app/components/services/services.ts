import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Service } from '../../models/portfolio.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-20 bg-black">
      <div class="max-w-7xl mx-auto px-4">
        <div class="mb-16 text-center">
          <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">
            Services <span class="text-white/40">Offered</span>
          </h2>
          <p class="text-white/60 max-w-2xl mx-auto">Providing end-to-end digital solutions with a focus on security, performance, and user experience.</p>
        </div>

        <div class="flex overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar gap-6">
          <div 
            *ngFor="let service of services" 
            class="flex-shrink-0 w-[300px] md:w-[400px] snap-center glass-morphism rounded-3xl p-10 hover:border-purple-500/50 transition-all group"
          >
            <div class="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
              {{ service.icon }}
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
            <p class="text-white/60 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="flex justify-center mt-4 space-x-2">
          <div class="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
            <div class="w-1/3 h-full bg-purple-500 rounded-full"></div>
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
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.services = this.portfolioService.getServices();
  }
}
