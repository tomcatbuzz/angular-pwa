import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description: ''
  };

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.title !== '' && this.item.description !== '') {
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
    }
    this.router.navigate(['/items']);
  }

}
