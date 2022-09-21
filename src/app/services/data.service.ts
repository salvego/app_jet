import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {


    public url = 'https://localhost:7008/v1';

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`)
    }

    postProduct(data: any) {
        return this.http.post(`${this.url}/products`, data);
    }

    getProduct(id: string) {
        return this.http.get<Product>(`${this.url}/products/${id}`)
    }

    putProduct(id: string, data: any) {
        return this.http.put(`${this.url}/products/${id}`, data);
    }

    deleteProduct(id: string) {
        return this.http.delete(`${this.url}/products/${id}`);
    }

    findProducts(title: string){
        return this.http.get<Product[]>(`${this.url}/find-products/${title}`)
    }

}