import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotallumService {
  private readonly baseUrl = 'https://api.totalum.app/api/v1/crud';
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'api-key': 'sk-eyJrZXkiOiI0MjAxNGY4MDg5ZjY1NGQzYWQxZmMxNjQiLCJuYW1lIjoiRGVmYXVsdCBBUEkgS2V5IGF1dG9nZW5lcmF0ZWQgb3N5eCIsIm9yZ2FuaXphdGlvbklkIjoiZmFjdW5kby1wcnVlYmEtdGVjbmljYSJ9'
  });

  constructor(private http: HttpClient) {}

  // 🔹 CLIENTES
  async getClientes(): Promise<any[]> {
    const res$ = this.http.get<any>(
      `${this.baseUrl}/clientes?sort[createdAt]=1&pagination[page]=0&pagination[limit]=50`,
      { headers: this.headers }
    );
    const res = await firstValueFrom(res$);
    return res.data || [];
  }

  async crearCliente(cliente: any): Promise<void> {
    await firstValueFrom(
      this.http.post(`${this.baseUrl}/clientes`, cliente, { headers: this.headers })
    );
  }

  // 🔹 PRODUCTOS
  async getProductos(): Promise<any[]> {
    const res$ = this.http.get<any>(
      `${this.baseUrl}/productos?sort[createdAt]=1&pagination[page]=0&pagination[limit]=50`,
      { headers: this.headers }
    );
    const res = await firstValueFrom(res$);
    return res.data || [];
  }

  async crearProducto(producto: any): Promise<void> {
    await firstValueFrom(
      this.http.post(`${this.baseUrl}/productos`, producto, { headers: this.headers })
    );
  }

  // 🔹 PEDIDOS
  async getPedidos(): Promise<any[]> {
    const res$ = this.http.get<any>(
      `${this.baseUrl}/pedidos?sort[createdAt]=1&pagination[page]=0&pagination[limit]=50`,
      { headers: this.headers }
    );
    const res = await firstValueFrom(res$);
    return res.data || [];
  }

  async crearPedido(pedido: any): Promise<void> {
    await firstValueFrom(
      this.http.post(`${this.baseUrl}/pedidos`, pedido, { headers: this.headers })
    );
  }
}
