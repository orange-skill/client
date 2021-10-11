import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-admin-approve',
  templateUrl: './admin-approve.component.html',
  styleUrls: ['./admin-approve.component.css'],
})
export class AdminApproveComponent implements OnInit {
  data: Array<any> = [];
  message: string = '';

  constructor(private api: ApiService) {}

  async ngOnInit() {
    const result: any = await this.api.get('admin/user/all');
    result.data.forEach((user: any) => {
      if (user.verified == 0) {
        this.data.push(user);
      }
    });
    console.log(result);
    console.log(this.data);
  }
}
