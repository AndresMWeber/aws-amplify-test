import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private configService: ConfigurationService) {
    console.log(configService);
  }

  ngOnInit() {}
}
