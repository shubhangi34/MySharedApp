import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
// import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'app-name';
  code:number;
  alert1="Required field!";


  constructor(private fb: FormBuilder ,private apiservice: ApiService,private router:Router) { }

  loginform= this.fb.group({
    email : ['',Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
    password : ['',Validators.compose([Validators.required,Validators.minLength(6)])],
  
  })

  submit = function(data) {
    
    this.apiservice.login(this.loginform.value).subscribe(data =>{
      this.userdata = data;
    // console.log(this.userdata);
    // console.log(this.userdata.status);

      if(this.userdata.status == 200){
        // require( "nativescript-localstorage" );
         localStorage.setItem('accessToken', this.userdata.body.access_token);
    // console.log(localStorage.getItem('accessToken'));
      this.router.navigate(['/dashboard']);

      }
      else 
    
      { 
        console.log(this.userdata.message);
       alert('Session expired. Please login again');
      }
     });

   }

  ngOnInit() {
  //   if (localStorage.getItem('user_token'))
  //   {
    
  //   this.router.navigate(['/dashboard'])
  //  }
}
}
