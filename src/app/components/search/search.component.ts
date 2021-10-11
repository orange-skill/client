import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchField: string = '';
  employeeData: Array<any> = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  async search() {
    console.log(this.searchField);
    const result: any = await this.api.post('employee/searchSkill', {
      query: this.searchField,
      loc: 'blore',
    });
    this.employeeData = result['searchResult'];
    console.log(result);
    console.log(this.employeeData);
  }
}
