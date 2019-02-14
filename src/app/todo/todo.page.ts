import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})
export class TodoPage implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {

    this.seo.generateTags({
      title: 'Todo Page',
      description: 'Contact me through this awesome page',
      image: '',
      slug: 'todo-page'
    });
  }

}
