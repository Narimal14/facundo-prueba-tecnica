import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablaGenericaComponent } from '../../components/tabla-generica/tabla-generica.component';
import { ModalFormularioComponent } from '../../components/modal-formulario/modal-formulario.component';
import { TotallumService } from '../../services/totallum.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, TablaGenericaComponent, ModalFormularioComponent],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes: any[] = [];
  searchTerm = '';

  campos = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'nacimiento', label: 'Fecha de nacimiento' },
    { key: 'email', label: 'Email' },
    { key: 'telefono', label: 'Teléfono' }
  ];

  constructor(private totalumService: TotallumService) {
    this.totalumService.getClientes().then((res: any) => {
      this.clientes = res;
    });
  }

  clientesFiltrados() {
    if (!this.searchTerm.trim()) return this.clientes;
    return this.clientes.filter(cliente =>
      Object.values(cliente).some(valor =>
        String(valor).toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  guardarCliente(cliente: any) {
    this.clientes.push(cliente);
  }
}
