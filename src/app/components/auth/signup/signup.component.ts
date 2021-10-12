import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Validators } from '@angular/forms';
import { empSignUpForm } from 'src/app/models/user.signup';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  empSignUpForm = new FormGroup({
    empId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    verified: new FormControl(0),
    location: new FormControl('', Validators.required),
  });

  async ngOnInit() {
    this.empSignUpForm.patchValue({
      name: this.route.snapshot.params.name,
      email: this.route.snapshot.params.email,
    });
  }

  async onSubmit() {
    const data: empSignUpForm = this.empSignUpForm.value;
    const result = await this.auth.signUp(data);
    console.log(result);
    this.router.navigateByUrl('/verify');
  }
}
