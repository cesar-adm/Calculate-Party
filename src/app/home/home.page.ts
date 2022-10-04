import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quantidadeAdulto: number = 0;
  quantidadeCrianca: number = 0;

  quantidadeSalgado: number = 0;
  quantidadeRefri: number = 0;
  quantidadeBolo: number = 0;
  siglaRefri: string = 'ml';
  siglaBolo: string = 'g';

  constructor() { }

  calcularTotalSalgado() {
    this.quantidadeSalgado = 0;
    this.quantidadeSalgado = (this.quantidadeAdulto * 10) + (this.quantidadeCrianca * 7);
  }

  calcularTotalRefri() {
    this.siglaRefri = 'ml';
    this.quantidadeRefri = 0;
    this.quantidadeRefri = (this.quantidadeAdulto * 400) + (this.quantidadeCrianca * 300);
    if (this.quantidadeRefri >= 1000) {
      this.quantidadeRefri = this.quantidadeRefri / 1000;
      this.siglaRefri = 'L';
    }
  }

  calcularTotalBolo() {
    this.siglaBolo = 'g';
    this.quantidadeBolo = 0;
    this.quantidadeBolo = (this.quantidadeAdulto * 100) + (this.quantidadeCrianca * 100);
    if (this.quantidadeBolo >= 1000) {
      this.quantidadeBolo = this.quantidadeBolo / 1000;
      this.siglaBolo = 'kg';
    }
  }

  adicionarAdulto() {
    this.quantidadeAdulto++;
    this.calcularTotalBolo();
    this.calcularTotalRefri();
    this.calcularTotalSalgado();
  }

  adicionarCrianca() {
    this.quantidadeCrianca++;
    this.calcularTotalBolo();
    this.calcularTotalRefri();
    this.calcularTotalSalgado();
  }

  removerAdulto() {
    if (this.quantidadeAdulto > 0) {
      this.quantidadeAdulto--;
      this.calcularTotalBolo();
      this.calcularTotalRefri();
      this.calcularTotalSalgado();
    }
  }

  removerCrianca() {
    if (this.quantidadeCrianca > 0) {
      this.quantidadeCrianca--;
      this.calcularTotalBolo();
      this.calcularTotalRefri();
      this.calcularTotalSalgado();
    }
  }
}


