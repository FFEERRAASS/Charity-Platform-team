import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private http: HttpClient, public spinner :NgxSpinnerService,private toastr: ToastrService, public router: Router, public datepipe: DatePipe) { }
  category: any;
  display_Image2: any;
  display_Image: any;



  requestmony(Obj: any) {
    this.http.put('https://localhost:44324/api/Users/UpdateUser', Obj).subscribe((result) => {
      this.toastr.success('Wating')
    }, err => {
      this.toastr.error('Failed')
    })
  }
  deletecharity(id:any){
    id=parseInt(id);
    this.http.delete('https://localhost:44324/api/Charity/deletecharity/'+id).subscribe((res)=>{
      this.toastr.success("Delete Done")
    },err=>{
      this.toastr.error("Error")
    })
    window.location.reload()
  }
  uploadAttachmentforabout1(file: FormData) {
    debugger;
    this.http.post('https://localhost:44324/api/Category/UploadImages', file)
      .subscribe((data: any) => {


        this.display_Image = data.categoryimage;

        if (data) {
          console.log(data);
        }
      }, err => {
        this.toastr.error('operation image didnt work');
      })

  }
  getAllCatecory() {
    this.http.get('https://localhost:44324/api/Category/GetAllCategory').subscribe((result) => {
      this.category = result;
    }, err => {
      this.toastr.error('Error Get All Category');
    })
  }
  uploadAttachmentforabout2(file: FormData) {
    this.http.post('https://localhost:44324/api/Category/UploadImages', file).subscribe((data: any) => {


        this.display_Image2 = data.categoryimage;

        if (data) {
          console.log(data);
        }
      }, err => {
        this.toastr.error('operation image didnt work');
      })
  }

  uploadAttachmentBeneficary(file: FormData) {
    debugger;
    this.http.post('https://localhost:44324/api/Charity/UploadDocs', file).subscribe((data: any) => {


        this.display_Image2 = data.docidFk;

        if (data) {
          console.log(data);
        }
      }, err => {
        this.toastr.error('operation image didnt work');
      })
  }
  UpdateUserInfo(Obj: any) {
    debugger;
    Obj.imagepath = this.display_Image;
    this.http.put('https://localhost:44324/api/Users/UpdateUser', Obj).subscribe((result) => {
      this.toastr.success('Updated')
    }, err => {
      this.toastr.error('Failed')
    })
  }
  updateCharityData(Obj: any) {
    debugger;
    
    if (Obj.isaccepted =="Wating" ) {
      Obj.isaccepted = 2
    } else if (Obj.isaccepted == "Rejcted") {
      Obj.isaccepted = 3
    } else if (Obj.isaccepted =="Accepted" ) {
      Obj.isaccepted = 1
    }else if(Obj.isaccepted == "Waiting for the goal to be determined"){
      Obj.isaccepted = 4
    }
    else if(Obj.isaccepted == "Your charity has rechead its goal"){
      Obj.isaccepted = 5
    }

    Obj.categoryidFk = parseInt(Obj.categoryidFk);
    Obj.charityid = parseInt(Obj.charityid);
    Obj.goal = parseInt(Obj.goal);
    Obj.numdonation = parseInt(Obj.numdonation);
    Obj.balance = parseInt(Obj.balance);
    Obj.isaccepted = parseInt(Obj.isaccepted);
    Obj.state = parseInt(Obj.state);
    Obj.imagepath = this.display_Image;
    Obj.docidFk = this.display_Image2;
    
    this.http.put('https://localhost:44324/api/Charity/Updatecahrity', Obj).subscribe((result) => {
      this.toastr.success('Updated')
    }, err => {
      this.toastr.error('Failed')
    })
  }
  CreateCharity(body: any) {
    //this.spinner.show();
    debugger;
    let x = JSON.parse(localStorage.getItem('user') || '{}');
    body.useridFk = parseInt(x.USERID);
    body.numdonation = 0;
    body.categoryidFk = parseInt(body.categoryidFk);
    body.docidFk = this.display_Image2;
    body.imagepath = this.display_Image;
    body.isaccepted = 2;
    body.state = 0;
    this.http.post('https://localhost:44324/api/Charity/Createcahrity', body).subscribe((resp) => {
      this.toastr.success('Created');

      //this.spinner.hide();
    }, err => {
      this.toastr.error(err.message, err.status);
      //this.spinner.hide();
    })
    window.location.reload()
  }
  walletUser: any;
  testWallet: any;
  charityId: any;

   GetCharitybyId(id: number) {
    debugger;

     this.http.get('https://localhost:44324/api/Charity/GetcahrityById/' + id).subscribe((result1) => {
      if (result1 != null) {
        this.charityId = result1;

        if (this.charityId.isaccepted == 2) {
          this.charityId.isaccepted = "Wating"
        } else if (this.charityId.isaccepted == 3) {
          this.charityId.isaccepted = "Rejcted"
        } else if (this.charityId.isaccepted == 1) {
          this.charityId.isaccepted = "Accepted"
        }
        else if(this.charityId.isaccepted == 4){
          this.charityId.isaccepted = "Waiting for the goal to be determined"

        }else if(this.charityId.isaccepted == 5){
          this.charityId.isaccepted = "Your charity has rechead its goal"

        }
      } else {
        this.charityId = {
          "charityname": "",
          "charityid": -1,
          "useridFk": 0,
          "docidFk": "-",
          "imagepath": "-",
          "goal": 0,
          "email": null,
          "numdonation": 0,
          "balance": 0,
          "isaccepted": 0,
          "categoryidFk": 0,
          "state": 0,

        }
      }
    }, err => {
      this.toastr.error('Charity Failed')
    })

  }
  user: any;
  transfermoney(id: number) {
    
    this.http.get('https://localhost:44324/api/Wallet/transfermoney/' + id).subscribe((result) => {

      this.toastr.success('Transfer completed successfully')
    }, err => {
      this.toastr.error('Transfer Failed')
    })

  }
  GetUserbyId(id: number) {
    this.http.get('https://localhost:44324/api/Users/GetUserById/' + id).subscribe((result) => {
      debugger;
      this.user = result;
    }, err => {
      this.toastr.error('Users Failed')
    })

  };


  GetWalletByUserId(id: number) {
    this.http.get('https://localhost:44324/api/Wallet/GetWalletByUserId/' + id).subscribe((result) => {
      if (result == null) {
        this.walletUser = {
          walletid: 0,
          balance: 0,

        }

      } else {
        this.walletUser = result;


      }
    }, err => {

      this.toastr.error('Wallet Failed')
      this.testWallet = false;
    })

  }

}
