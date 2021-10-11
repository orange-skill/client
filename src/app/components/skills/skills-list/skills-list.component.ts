import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css'],
})
export class SkillsListComponent implements OnInit {
  empId: number = 123450;
  skillData: Array<any> = [];
  constructor(private api: ApiService) {}

  async ngOnInit() {
    const results: any = await this.api.post('employee/skills', {
      empId: 12350,
    });
    this.skillData = results['skills'];
    console.log(results);
  }
}
