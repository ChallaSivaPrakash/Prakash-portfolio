import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav 
      [class.backdrop-blur-lg]="isScrolled" 
      [class.bg-black/50]="isScrolled"
      [class.border-b]="isScrolled"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-white/10"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a routerLink="/" class="text-2xl font-bold text-white tracking-tighter">SP</a>
          </div>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center space-x-8 relative">
            <a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Home</a>
            <a routerLink="/projects" routerLinkActive="active-link" class="nav-link">Projects</a>
            <a routerLink="/skills" routerLinkActive="active-link" class="nav-link">Skills</a>
            <a routerLink="/contact" routerLinkActive="active-link" class="nav-link">Contact</a>
          </div>

          <!-- Right Action -->
          <div class="hidden md:block">
            <a routerLink="/contact" class="px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm font-medium">
              Contact Me
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button (click)="isMenuOpen = !isMenuOpen" class="text-white p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path *ngIf="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                <path *ngIf="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Nav -->
      <div *ngIf="isMenuOpen" class="md:hidden glass-morphism border-t border-white/10">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a routerLink="/" (click)="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors">Home</a>
          <a routerLink="/projects" (click)="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors">Projects</a>
          <a routerLink="/skills" (click)="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors">Skills</a>
          <a routerLink="/contact" (click)="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav-link {
      @apply text-white/60 hover:text-white transition-colors text-sm font-medium relative;
    }
    .active-link {
      @apply text-white;
    }
    .active-link::after {
      content: '';
      @apply absolute -bottom-1 left-0 w-full h-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full;
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
