import { Component, OnInit } from '@angular/core';
import { UIService } from '../shared/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private uiService: UIService) { }

  ngOnInit() {
  }

  onPopup() {
    this.uiService.showSnackbar('what the hell Bobby', null, 5000);
  }
}
