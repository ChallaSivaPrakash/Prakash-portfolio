import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalData } from '../../models/portfolio.model';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-black/50 border-y border-white/5">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div *ngFor="let stat of personalData.stats" class="text-center group">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-500 transition-colors">
              {{ stat.value }}
            </div>
            <div class="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class StatsComponent implements OnInit {
  personalData!: PersonalData;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.personalData = this.portfolioService.getPersonalData();
  }
}
