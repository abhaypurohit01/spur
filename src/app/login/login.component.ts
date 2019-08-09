import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from '../data.service';
import { ToastrService } from "ngx-toastr";
import { throwError, Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private dataservice: DataService,private formBuilder: FormBuilder,private toastr: ToastrService, private activatedroute: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    this.initFormBuild();
  }

  initFormBuild() {
    this.signupForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  rolelst: any;
  onSignSubmit(signupForm:any){
    console.log(signupForm)
    console.log(this.signupForm.value);
    this.signupForm.controls.Username, this.signupForm.controls.Password
    this.dataservice.getuser(this.signupForm.value).subscribe(res => {
      console.log(res);
      if(res.length >0){
        this.rolelst = res;
        sessionStorage.setItem("Signup-info", JSON.stringify(res));
        this.isCheckLoginType();
        
      }
      else{
        setTimeout(() =>
            this.toastr.warning(
              "Please enter correct Username/Password.",
              "Warning"
            )
          );
      }
    },

      error => {
        return throwError(error);
      }
    );

    
  }
  
  isCheckLoginType(){
    this.router.navigate(['home/dashboard']);
  }


}
