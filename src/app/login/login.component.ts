import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from '../data.service';
import { ToastrService } from "ngx-toastr";
import { throwError, Observable } from "rxjs";
import { AESEncryptDecryptServiceService } from '../aesencrypt-decrypt-service.service'; 
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private _AESEncryptDecryptService: AESEncryptDecryptServiceService,private dataservice: DataService,private formBuilder: FormBuilder,private toastr: ToastrService, private activatedroute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.initFormBuild();
    let encryptedText = this._AESEncryptDecryptService.Encrypt("Hello World");
    // let decryptedText = this._AESEncryptDecryptService.decrypt(encryptedText);
    console.log(encryptedText);
    // console.log(decryptedText);


    // Encrypt
      var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
      
      // Decrypt
      var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
      var plaintext = bytes.toString(CryptoJS.enc.Utf8);
      console.log(plaintext)
  }

  initFormBuild() {
    this.signupForm = this.formBuilder.group({
      Username: ['abhaypurohit10', Validators.required],
      Password: ['Password', Validators.required]
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
        let encrpttext = this._AESEncryptDecryptService.Encrypt(JSON.stringify(res));
        
        sessionStorage.setItem("Signup-info", encrpttext);
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
