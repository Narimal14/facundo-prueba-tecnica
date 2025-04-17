import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalFormularioComponent } from '../modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-tabla-generica',
  standalone: true,
  templateUrl: './tabla-generica.component.html',
  styleUrls: ['./tabla-generica.component.css'],
  imports: [CommonModule, FormsModule, ModalFormularioComponent],
})
export class TablaGenericaComponent {
  @Input() columnas: string[] = [];
  @Input() datos: any[] = [];
  @Input() tipo: 'clientes' | 'productos' | 'pedidos' = 'clientes';
  @Input() campos: { key: string; label: string }[] = [];

  searchTerm: string = '';
  paginaActual: number = 1;
  itemsPorPagina: number = 5;
  mostrarModal: boolean = false;

  datosFiltrados(): any[] {
    if (!this.searchTerm.trim()) return this.datos;
    const termino = this.searchTerm.toLowerCase();
    return this.datos.filter(item =>
      Object.values(item).some(valor =>
        String(valor).toLowerCase().includes(termino)
      )
    );
  }

  datosPaginados(): any[] {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    return this.datosFiltrados().slice(inicio, inicio + this.itemsPorPagina);
  }

  totalPaginas(): number {
    return Math.ceil(this.datosFiltrados().length / this.itemsPorPagina);
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) this.paginaActual--;
  }

  paginaSiguiente(): void {
    if (this.paginaActual < this.totalPaginas()) this.paginaActual++;
  }

  abrirModal(): void {
    console.log(`Crear nuevo ${this.tipo}`);
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }
}
