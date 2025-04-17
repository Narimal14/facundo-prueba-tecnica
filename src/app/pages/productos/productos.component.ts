import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablaGenericaComponent } from '../../components/tabla-generica/tabla-generica.component';
import { ModalFormularioComponent } from '../../components/modal-formulario/modal-formulario.component';
import { TotallumService } from '../../services/totallum.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, TablaGenericaComponent, ModalFormularioComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: any[] = [];
  searchTerm = '';
  mostrarModal = false;

  campos = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'precio', label: 'Precio' },
    { key: 'categoria', label: 'Categoría' },
    { key: 'cantidad', label: 'Cantidad' },
  ];

  constructor(private totalumService: TotallumService) {
    this.totalumService.getProductos().then((res: any) => {
      this.productos = res.items || res;
    });
  }

  productosFiltrados() {
    return this.productos.filter(p =>
      Object.values(p).some(valor =>
        String(valor).toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  guardarProducto(producto: any) {
    this.productos.push(producto);
    this.mostrarModal = false;
  }

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
}
