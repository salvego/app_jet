import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlStatus, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-registration-product-page',
  templateUrl: './registration-product-page.component.html',
  styleUrls: ['./registration-product-page.component.css']
})
export class RegistrationProductPageComponent implements OnInit {

  private id: string | null = '';
  public form: FormGroup;
  public busy = false;

  constructor(
    private data: DataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      status: [true, Validators.compose([
        Validators.required
      ])],
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(150),
        Validators.required
      ])],
      stock: ['', Validators.compose([
        Validators.required
      ])],
      price: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(120),
        Validators.required
      ])],
      description: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(2000)
      ])],
      image: ['', Validators.compose([
        Validators.minLength(0),
        Validators.maxLength(5000)
      ])]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id != null && this.id != '') {
        this.clearForm();
        console.log(this.form.status)
        this.data.getProduct(this.id).subscribe(res => {
          
          if (res.status == undefined) {res.status = false}
          if (res.stock == undefined) {res.stock = 0}
       
          this.form = 
            this.fb.group({
              status: [(res.status), Validators.compose([
                Validators.required
              ])],
              title: [`${res.title}`, Validators.compose([
                Validators.minLength(3),
                Validators.maxLength(150),
                Validators.required
              ])],
              stock: [res.stock, Validators.compose([
                Validators.required
              ])],
              price: [res.price, Validators.compose([
                Validators.minLength(5),
                Validators.maxLength(120),
                Validators.required
              ])],
              description: [`${res.description}`, Validators.compose([
                Validators.minLength(6),
                Validators.maxLength(2000)
              ])],
              image: [`${res.image}`, Validators.compose([
                Validators.minLength(0),
                Validators.maxLength(5000)
              ])]
            });
        });
    }
      
  }

  submit() {
    if (this.id != null && this.id != '') {
        
        this
        .data
        .putProduct(this.id, this.form.value)
        .subscribe(
          (data: any) => {
            'Registro Atualizado com Sucesso!';
            this.router.navigate(['/registration-list']);
          },
          (err) => {
            console.log(err);
          }
        );
    }else{
        
        this
        .data
        .postProduct(this.form.value)
        .subscribe(
          (data: any) => {
            'Registro Cadastrado com Sucesso!';
            this.router.navigate(['/registration-list']);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }

  back() {
    this.id = null
    this.clearForm();
  }

  clearForm(){
    this.fb.group({
      status: [true],
      title: [''],
      stock: [1],
      price: [''],
      description: [''],
      image: ['']
    });
  }


}
