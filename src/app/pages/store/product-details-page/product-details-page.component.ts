import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

  private id: string | null = '';
  public title: string = '';
  public description: string = '';
  public image: string = '';
  public price: any = '';

  constructor( 
    private data: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id != null && this.id != '') {
        
        this.data.getProduct(this.id).subscribe(res => {
          
          this.title = `${res.title}`,
          this.description = `${res.description}`,
          this.image = `${res.image}`,
          this.price = `${res.price}`
        });
    }
  }

}
