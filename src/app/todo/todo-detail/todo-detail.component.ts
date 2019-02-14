import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {

    this.seo.generateTags({
      title: 'Todo Detail Page',
      description: 'Contact me through this awesome page',
      image: '',
      slug: 'todo-detail-page'
    });
  }

}
