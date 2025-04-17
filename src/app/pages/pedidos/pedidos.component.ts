import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablaGenericaComponent } from '../../components/tabla-generica/tabla-generica.component';
import { ModalFormularioComponent } from '../../components/modal-formulario/modal-formulario.component';
import { TotallumService } from '../../services/totallum.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule, TablaGenericaComponent, ModalFormularioComponent],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  pedidos: any[] = [];
  searchTerm = '';

  campos = [
    { key: 'numero', label: 'Número' },
    { key: 'importe', label: 'Importe' },
    { key: 'impuestos', label: 'Impuestos' },
    { key: 'cantidad', label: 'Cantidad' },
    { key: 'fecha', label: 'Fecha' },
    { key: 'cliente', label: 'Cliente' }
  ];

  constructor(private totalumService: TotallumService) {
    this.totalumService.getPedidos().then((res: any) => {
      this.pedidos = res;
    });
  }

  pedidosFiltrados() {
    if (!this.searchTerm.trim()) return this.pedidos;
    return this.pedidos.filter(pedido =>
      Object.values(pedido).some(valor =>
        String(valor).toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  guardarPedido(pedido: any) {
    this.pedidos.push(pedido);
  }
}
