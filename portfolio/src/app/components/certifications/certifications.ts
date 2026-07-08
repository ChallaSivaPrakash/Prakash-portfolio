import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Certification } from '../../models/portfolio.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certifications" class="py-20 bg-black">
      <div class="max-w-7xl mx-auto px-4">
        <div class="mb-16">
          <p class="text-purple-500 font-bold uppercase tracking-widest text-sm mb-2">Credentials & Expertise</p>
          <h2 class="text-4xl md:text-6xl font-bold text-white">
            <span class="text-white/40">Certified</span> Excellence
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let cert of certifications"
            class="glass-morphism rounded-3xl p-8 group hover:scale-[1.02] transition-transform duration-300"
          >
            <div class="flex items-start justify-between mb-6">
              <div class="text-5xl">{{ cert.icon }}</div>
              <span
                class="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold border border-white/10"
              >
                {{ cert.category }}
              </span>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-2 leading-tight">
              {{ cert.title }}
            </h3>
            <p class="text-white/60 text-sm mb-6">{{ cert.issuer }}</p>
            
            <div class="mt-6">
              <a
                *ngIf="cert.credentialUrl; else inProgress"
                [href]="cert.credentialUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-bold transition-colors group"
              >
                Verify Link →
                <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <ng-template #inProgress>
                <span class="inline-flex items-center text-white/30 text-sm font-medium italic select-none">
                  🔒 Verification Pending
                </span>
              </ng-template>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.certifications = this.portfolioService.getCertifications();
  }
}