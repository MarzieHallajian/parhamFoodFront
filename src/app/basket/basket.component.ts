import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../services/http-api.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(private httpApiService: HttpApiService) { }

  ngOnInit(): void {
    
  }

}
