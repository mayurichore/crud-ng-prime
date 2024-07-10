import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { ConfirmationService, MessageService } from 'primeng/api';
interface BarChartData {
  name: string;
  value: number;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  displayAddEditModal = false;
  selectedProduct: any = null;
  barChartData: BarChartData[] = [];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor(private productService: ProductService, private ConfirmationService: ConfirmationService,
     private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getProductsList();
    //this.updateBarChartData();
  }

  getProductsList(): void {
    this.productService.getproducts().subscribe(
      (response: Product[]) => {
        console.log(response); // Check if data is logged correctly
        this.products = response;
        this.updateBarChartData();
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  showAddModal(){
   this.displayAddEditModal = true;
   this.selectedProduct = null;
  }
  hideAddModal(isClosed: boolean){
    this.displayAddEditModal = !isClosed;
  }
  saveorUpdateProductList(newData: any){
    if(newData.id === this.selectedProduct.id){
      const productIndex = this.products.findIndex(data => data.id === newData.id);
      this.products[productIndex] = newData;
    }else{
      this.products.unshift(newData);
    }

this.getProductsList();
  }
  showEditModal(product: Product){
this.displayAddEditModal = true;
this.selectedProduct = product;
  }
  deleteproduct(product: Product){
    this.ConfirmationService.confirm({
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
      this.productService.deleteProduct(product.id).subscribe(
response => {
  this.getProductsList();
   this.products = this.products.filter(data => data.id !== product.id);
  this.messageService.add({ severity: 'sucess', summary: 'Sucess', detail: 'Deleted Successfully' });
},
error => {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
}
)
      }
    }) 
  }


  updateBarChartData() {
    this.barChartData = this.products.map(product => ({
      name: product.name,
      value: product.price
    }));
  }
}
