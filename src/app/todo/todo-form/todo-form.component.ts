import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {

    this.seo.generateTags({
      title: 'Todo-Form Page',
      description: 'Contact me through this awesome page',
      image: '',
      slug: 'todo-form-page'
    });
  }

}
