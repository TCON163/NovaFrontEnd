import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Test } from 'src/app/interfaces/test';
import { MockProduct } from 'src/app/mock-product';
import { Products } from 'src/app/mock-products';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filter:string = "genre";
  value:string = "all";
  products: MockProduct[] = Products;
  //Created Sets for Filter Types to Ensure Distinct Values
  genres = new Set(this.products.map(p => p.genre).sort());
  platforms = new Set(this.products.map(p => p.platform).sort());
  ratings = new Set(this.products.map(p => p.rating).sort());
  btnBool: boolean = false;
  filtered!: MockProduct[];
  btnFilter: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if (!this.btnBool){
      console.log("To Product Page");
    }
    this.btnBool = false;
  }

  btnClick(){
    this.btnBool = true;
    console.log("Add To Cart");
  }

/* Function for filtering movies on the Front End
    Will Likely Change When Connection to Back End is Made */
  filterProducts(value:string, filter:string){
    this.filtered = [];
    this.btnFilter = true;
    for (let product of this.products){
      if (filter == "genre"){
        if (product.genre == value){
          this.filtered.push(product);
          console.log(product);
        }
      }
      if (filter == "platform"){
        if (product.platform == value){
          this.filtered.push(product);
          console.log(product);
        }
      }
      if (filter == "rating"){
        if (product.rating == value){
          this.filtered.push(product);
          console.log(product);
        }
      }
    }
  }

  /* Function for Filter Reset Button; Resets to Entire List of Products */
  resetFilter(){
    this.btnFilter = false;
    this.filter = "genre";
    this.value = "";
  }

}
