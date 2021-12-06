import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { HttpClient } from '@angular/common/http';
import {CurrentUser} from "../../classes/user";
import {profile} from "../../interfaces/profile";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  form: FormGroup | any;
  email!: string | undefined;
  state!: string | undefined;
  favoriteGenre!: string | undefined;
  message!: string | undefined;

  icon = "/assets/blue_user_client_person_12581.ico";

  constructor(
    private formBuilder: FormBuilder,
    private profile: UserProfileService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    UserProfileComponent.prototype.email = CurrentUser.email;
    UserProfileComponent.prototype.state = CurrentUser.state;
    UserProfileComponent.prototype.state = CurrentUser.state;
    UserProfileComponent.prototype.state = CurrentUser.state;

    this.form = this.formBuilder.group({
      email: '',
      state: '',
      favoriteGenre: '',
      message: '',
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http
      .post<profile>('http://18.212.102.32:8082/user-service/Nova/user/profile/set',
        this.form.getRawValue(),
        {observe: 'response'})
      .subscribe((res) => {
        CurrentUser.email = CurrentUser.email = res.body?.email;
        CurrentUser.state = res.body?.state;
        CurrentUser.favoriteGenre = res.body?.favoriteGenre;
        CurrentUser.message = res.body?.message;
      });
  }
}
