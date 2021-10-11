import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-admin-approve-item',
  templateUrl: './admin-approve-item.component.html',
  styleUrls: ['./admin-approve-item.component.css'],
})
export class AdminApproveItemComponent implements OnInit {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() empId: string = '';
  x: number = 0;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.x = this.randomNumber(0, 6);
  }

  randomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  async approve() {
    console.log(
      await this.api.post('admin/user/approve', { empId: Number(this.empId) })
    );
  }

  async deny() {
    console.log(
      await this.api.post('admin/user/reject', { empId: Number(this.empId) })
    );
  }
}
