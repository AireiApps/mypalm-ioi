import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { MoreServiceService } from 'src/app/services/more-service/more-service.service';
import { AIREIService } from 'src/app/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  changepasswordForm;  

  constructor(private fb: FormBuilder, private service: MoreServiceService, private commonservice: AIREIService, private router:Router) { 
    this.changepasswordForm = this.fb.group({
      newpassword: new FormControl('', Validators.required) 
    });
  }

  ngOnInit() {
  }

  btn_save()
  {
    if(this.changepasswordForm.valid)
    {
      const req = {      
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        password: this.changepasswordForm.value.newpassword,
      };

      console.log(req);

      this.service.saveForgotPassword(req).then(result => {
        var resultdata: any;
        resultdata = result;
  
        console.log(resultdata);
  
        if (resultdata.httpcode == 200) {
          this.commonservice.presentToast('Updated Successfully!');
          
          localStorage.clear();
          this.router.navigateByUrl("/login");

        } else {
          this.commonservice.presentToast('Updated Failed!');
        }
      });

    }else{
      this.commonservice.presentToast("Please Provide New Password");
    }
  }

}
