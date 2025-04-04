import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricesComponent } from './prices/prices.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, BenefitsComponent, FeaturesComponent, TestimonialsComponent, PricesComponent, FooterComponent],
  template: `
    <main class="min-h-screen">
      <nav class="flex justify-end items-center gap-4 bg-dark py-3 px-5 text-accent font-bold fixed top-0 w-screen z-20">
        <select name="language" id="" class="text-accent p-1 bg-dark">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <button>Iniciar Sesión</button>
      </nav>

      <app-hero></app-hero>
      <app-benefits></app-benefits>
      <app-features></app-features>
      <app-testimonials></app-testimonials>
      <app-prices></app-prices>
      <app-footer></app-footer>

    </main>
  `,
})
export class HomeComponent { }
