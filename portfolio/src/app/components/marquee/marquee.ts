import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="py-10 bg-black border-y border-white/5 overflow-hidden">
      <div class="marquee-container">
        <div class="marquee-content py-4">
          <span *ngFor="let item of items" class="text-6xl md:text-8xl font-black mx-8 text-transparent stroke-text uppercase tracking-tighter">
            {{ item }}
          </span>
          <!-- Duplicate for seamless loop -->
          <span *ngFor="let item of items" class="text-6xl md:text-8xl font-black mx-8 text-transparent stroke-text uppercase tracking-tighter">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .stroke-text {
      -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
    }
    .marquee-content {
      display: flex;
      width: max-content;
      animation: marquee 30s linear infinite;
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `]
})
export class MarqueeComponent {
  items = [
    'Siva Prakash Challa',
    '# Full Stack',
    '# Cybersecurity',
    '# AI',
    '# Software Engineer',
    '#'
  ];
}
