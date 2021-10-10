import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  searchField: string = '';
  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  async search() {
    console.log(this.searchField);
    const x = await this.api.post('employee/searchSkill', {
      query: this.searchField,
      loc: 'blore',
    });
    console.log(x);
  }
}
