import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalData } from '../../models/portfolio.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pt-32 pb-20 min-h-screen max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Left: Contact Info -->
        <div class="space-y-12">
          <div>
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
              Let's <span class="text-purple-500">Connect</span>
            </h1>
            <p class="text-white/60 text-lg max-w-md">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
            </p>
          </div>

          <div class="space-y-8">
            <div class="flex items-center space-x-6 group">
              <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500 transition-all">
                <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-bold text-white/40 uppercase tracking-widest">Email</p>
                <a [href]="'mailto:' + personalData.email" class="text-xl text-white hover:text-purple-400 transition-colors">{{ personalData.email }}</a>
              </div>
            </div>

            <div class="flex items-center space-x-6 group">
              <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-blue transition-all">
                <svg class="w-6 h-6 text-accent-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div>
                <p class="text-sm font-bold text-white/40 uppercase tracking-widest">LinkedIn</p>
                <a [href]="personalData.linkedin" target="_blank" class="text-xl text-white hover:text-accent-blue transition-colors">Connect on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Contact Form -->
        <div class="glass-morphism rounded-3xl p-8 md:p-12">
          <form class="space-y-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
              <input type="text" placeholder="John Doe" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all">
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
              <input type="email" placeholder="john@example.com" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all">
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-white/40 uppercase tracking-widest ml-1">Message</label>
              <textarea rows="4" placeholder="How can I help you?" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all resize-none"></textarea>
            </div>
            <button class="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold transition-all transform active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  `
})
export class ContactPageComponent implements OnInit {
  personalData!: PersonalData;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.personalData = this.portfolioService.getPersonalData();
  }
}
