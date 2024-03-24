import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "../../../models/product.model";
import { OutletContext } from "@angular/router";

@Component({
  selector: "app-product-box",
  templateUrl: "product-box.component.html",
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: "filter za gorivo",
    price: 450,
    category: "filter",
    description: "description",
    img: "https://via.placeholder.com/150",
  };

  @Output() addToCart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
