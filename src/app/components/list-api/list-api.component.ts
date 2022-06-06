import { Component, OnInit } from '@angular/core';
import { ApiResponse, ListApiService } from 'src/app/shared/services/list-api.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  personagens = <any>[];

  constructor(private listApiService: ListApiService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listApiService.getList().subscribe(result => {
      this.personagens = result.results;
      console.log(this.personagens);
    });
  }

}
