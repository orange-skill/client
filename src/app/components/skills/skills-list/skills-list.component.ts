import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css'],
})
export class SkillsListComponent implements OnInit {
  skillData: Array<any> = [];
  empId = 0;
  constructor(private api: ApiService, private auth: AuthService) {}

  async ngOnInit() {
    this.empId = this.auth.empId;
    const results: any = await this.api.post('employee/skills', {
      empId: this.empId,
    });
    this.skillData = results['skills'];
    console.log(results);
  }
}
