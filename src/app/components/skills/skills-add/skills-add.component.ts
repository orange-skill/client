import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css'],
})
export class SkillsAddComponent implements OnInit {
  empId = 0;
  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {
    this.empId = this.auth.empId;
    // this.getData();
  }

  addSkillForm = new FormGroup({
    skillId: new FormControl(''),
    track: new FormControl(''),
    trackDetails: new FormControl(''),
    profiency: new FormControl(''),
    levelOne: new FormControl(''),
    levelTwo: new FormControl(''),
    levelThree: new FormControl(''),
    levelFour: new FormControl(''),
    levelOthers: new FormControl(''),
    public_: new FormControl(''),
    managerEmail: new FormControl('yush@theorange.network'),
  });

  async onSubmit() {
    console.log(this.addSkillForm.value);
    const result = await this.api.post('employee/skill/add', {
      empId: this.empId,
      skill: this.addSkillForm.value,
    });
    console.log(result);
    // const data: empSignUpForm = this.empSignUpForm.value;
    // const result = await this.auth.signUp(data);
    // console.log(result);
    // this.router.navigateByUrl('/verify');
  }

  // async getData() {
  //   const levelOne=[]
  //   const levelTwo=[]
  //   const levelThree=[]
  //   const levelFour=[]
  //   const data: any = await this.api.post('employee/skill/meta', {});
  //   console.log(data);
  //   for (const key in data) {
  //     // console.log(`${key}: ${data[key]}`);
  //     levelOne.push(key)
  //     for (const key1 in data[key]) {
  //       levelOne.push(key)
  //       // console.log(`${key1}: ${data[key][key1]}`);
  //       for (const key2 in data[key][key1]) {
  //         console.log(`${key2}: ${data[key][key1][key2]}`);
  //         for (const key3 in data[key][key1][key2]) {
  //           // console.log(data[key][key1][key2][key3][0]);
  //         }
  //       }
  //     }
  //   }
  // }
}
