import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css'],
})
export class ApproveComponent implements OnInit {
  data: any;
  managerId = 12348;
  comment = false;

  addComment = new FormGroup({
    message: new FormControl(''),
    sender: new FormControl(''),
    senderId: new FormControl(''),
    newProficiency: new FormControl(''),
  });

  constructor(private api: ApiService, private auth: AuthService) {}

  async ngOnInit() {
    const data: any = await this.api.post('manager/getPendingSkills', {
      managerId: this.managerId,
    });
    console.log(data);
    this.data = data.data;
    console.log(this.data);
  }
  async onSubmit() {
    console.log(this.addComment.value);
    // const result = await this.api.post('employee/skill/add', {
    //   empId: this.empId,
    //   skill: this.addSkillForm.value,
    // });
    // console.log(result);
    // // const data: empSignUpForm = this.empSignUpForm.value;
    // // const result = await this.auth.signUp(data);
    // // console.log(result);
    // // this.router.navigateByUrl('/verify');
  }

  async approveSkill(idx: number) {
    console.log(idx);
    const res = await this.api.post('employee/skill/confirm', {
      skillIdx: idx,
      // empId: this.auth.empId,
      empId: this.auth.empId,
    });
    console.log(res);
  }
  commentA() {
    this.comment = true;
  }
}
