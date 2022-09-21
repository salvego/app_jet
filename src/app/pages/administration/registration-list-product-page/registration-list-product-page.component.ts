import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-registration-list-product-page',
  templateUrl: './registration-list-product-page.component.html',
  styleUrls: ['./registration-list-product-page.component.css']
})
export class RegistrationListProductPageComponent implements OnInit {

  public products$!: Observable<Product[]>;
  public form: FormGroup;

  constructor( 
    private data: DataService,
    private fb: FormBuilder,
    ) 
    {
      this.form = this.fb.group({
        filter: ['', Validators.compose([
          Validators.minLength(0),
          Validators.maxLength(40)
        ])]
      });
    }

  ngOnInit(): void {
    this.load();
  }

  delete(id: string) {
    this
      .data
      .deleteProduct(id)
      .subscribe(
        (data: any) => {
          'Registro Excluído com Sucesso!';
        },
        (err) => {
          console.log(err);
        }
      );
    this.load();
  }
  
  load(){
    this.products$ = this.data.getProducts();
  }

  findProducts(){    

    if (this.form.invalid) {
      this.products$ = this.data.getProducts();
    }else{
      console.log(this.form.value);
      console.log(this.form.value["filter"]);
      
      if (this.form.value["filter"] != ''){
        this.products$ = this.data.findProducts(this.form.value["filter"])
      }else{
        this.products$ = this.data.getProducts();
      }
          
      
    }
      
  }

}
