import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id: number = 0;
  data: any;
  x: number = 0;
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  async ngOnInit() {
    this.x = this.randomNumber(0, 6);
    this.loading = true;
    await this.loadData();
  }

  async loadData() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.data = (await this.api.post('employee/get', {
      empId: Number(this.id),
    })) as any;
    console.log(this.data);
    this.loading = false;
  }

  randomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
