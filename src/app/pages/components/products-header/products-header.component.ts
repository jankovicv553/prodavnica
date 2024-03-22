import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent implements OnInit {
  sort = "opadajuce";
  itemsShowCount = 12;
  @Output() colsCount = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsupdated(colsNum: number): void {
    this.colsCount.emit(colsNum);
  }
}
