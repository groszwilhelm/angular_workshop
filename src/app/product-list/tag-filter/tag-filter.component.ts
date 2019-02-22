import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wsh-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent {

  @Input()
  set products(products) {
    this.createTags(products);
  }

  @Output() tagSelected = new EventEmitter<string>();

  public tags: string[] = [];
  public selectedTag = '';

  constructor() { }

  createTags(products) {
    products.forEach(product => {
      if (!this.tags.includes(product.category)) {
        this.tags.push(product.category);
      }
    });
  }

  onSelectTag(tag: string) {
    this.selectedTag = tag;
    this.tagSelected.emit(tag);
  }
}
