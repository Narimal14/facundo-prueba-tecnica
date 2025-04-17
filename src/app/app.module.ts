import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'clientes', loadComponent: () => import('./pages/clientes/clientes.component').then(m => m.ClientesComponent) },
      { path: 'productos', loadComponent: () => import('./pages/productos/productos.component').then(m => m.ProductosComponent) },
      { path: 'pedidos', loadComponent: () => import('./pages/pedidos/pedidos.component').then(m => m.PedidosComponent) },
      { path: '', redirectTo: 'clientes', pathMatch: 'full' }
    ]),
    AppComponent // ✅ Agregar AppComponent acá porque es standalone
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
