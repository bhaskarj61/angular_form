import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Validators } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewPageComponent } from './new-page/new-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 

  export class LoginComponent implements OnInit {
    obj = new Details();
    title: "my-app"
    fg: FormGroup;
  
  
    constructor(private fb: FormBuilder) {
      
    }
  
    ngOnInit() {
      this.fg = this.fb.group({
        firstname: new FormControl(this.obj.fname, [Validators.required]),
        lastname: new FormControl(this.obj.lname, [Validators.required]),
        gender: new FormControl(this.obj.gender, [Validators.required]),
        contactnum: new FormControl(this.obj.cnt,[Validators.required,Validators.pattern("0-9"),Validators.maxLength(10)]),
        empId:new FormControl(this.obj.eid,[Validators.required,Validators.pattern("0-9"),Validators.maxLength(4)]),
        password:new FormControl(this.obj.pass,[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
        confirmpassword:new FormControl(this.obj.pass,[Validators.required,Validators.minLength(8),Validators.maxLength(16)])
  
      })
  
    }
  }
}
