import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-formulario.component.html',
  styleUrl: './modal-formulario.component.css'
})
export class ModalFormularioComponent {
  @Input() campos: { key: string, label: string }[] = [];
  @Input() visible = false;
  @Input() tipo: 'clientes' | 'productos' | 'pedidos' = 'clientes';
  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<any>();

  datos: any = {};

  onGuardar() {
    this.guardar.emit(this.datos);
    this.datos = {};
  }

  onCerrar() {
    this.cerrar.emit();
    this.datos = {};
  }
}
