import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css'],
})
export class SkillsAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
  });
}
