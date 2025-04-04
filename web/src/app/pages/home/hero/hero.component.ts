import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section
      class="relative h-screen bg-black/60 overflow-hidden"
    >
      <img
        class="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="./hero.webp"
        alt="Personas de negocios analizando un software ERP"
      />
      <div class="h-screen pt-32">
        <div
          class="flex flex-col items-center text-white gap-10"
        >
          <h1 class="text-7xl font-bold max-w-[800px] text-center">
            Simplifica la gestión de tu negocio con ERP Fácil
          </h1>
          <div class="flex flex-col items-center gap-4">
            <p class="text-lg">
              Administra clientes, productos y ventas en un solo lugar.
            </p>
            <button class="bg-primary text-black py-2 px-4 rounded cursor-pointer">
              Comienza Ahora Gratis
            </button>
          </div>
        </div>
      </div>
      <div
        class="bg-gradient-to-t from-primary/50 to-transparent absolute bottom-0 h-52 w-full"
      >
    </div>
  </section>
  `,
})
export class HeroComponent {

}
