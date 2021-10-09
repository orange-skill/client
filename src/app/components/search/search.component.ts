import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchField: string = '';
  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  async search() {
    console.log(this.searchField);
    const x = await this.api.post('search', {
      query: this.searchField,
      loc: 'blore',
    });
    console.log(x);
  }
}
