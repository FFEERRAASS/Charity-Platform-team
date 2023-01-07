import { DebugEventListener, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class BenefactorServiceService {

  constructor(private http: HttpClient, private toastr: ToastrService, public router: Router, public datepipe: DatePipe) { }
  TestFeras: any;
  singleuserdoantions: any = [];
  body5: any = {}
  userwalletfull: any = {};
  display_Image: any;
  display_Image2: any;
  charityProfile: any = {};
  benfactorprofile: any = [];



  usero = JSON.parse(localStorage.getItem('user') || '{}');


  generateWallet(wallet: any) {

    this.http.post('https://localhost:44324/api/Wallet/CREATEWallets', wallet).subscribe((Result) => {
      this.toastr.success("Done")
    }, err => {
      this.toastr.error("Error")
    })
  }
  addcard(body: any) {
    this.http.post('https://localhost:44324/api/Bank/createBank', body).subscribe((Result) => {
      this.toastr.success('Done')
    }, err => {
      this.toastr.error('Error')
    })
  }
  displaybenefactorbalance(id: number) {
    this.http.get('https://localhost:44324/api/Wallet/getwalletforuser/' + id).subscribe((result) => {



      if (result == null) {
        this.TestFeras = false;
      }
      else {
        this.userwalletfull = result;
        console.log(this.userwalletfull.walletid);
        this.TestFeras = true;

      }


      //   let id2:number=parseInt(this.userwalletfull.walletid) ;
      //   this.http.get('https://localhost:44324/api/Wallet/getwalletandbank/'+id2).subscribe((result2)=>{
      //   this.carddetails=result2;
      // })
    })

  }
  getuserdonationssolo(id: number) {

    this.http.get('https://localhost:44324/api/Donation/GetDonationByuserId/' + id).subscribe((result: any) => {
      this.singleuserdoantions = result;



    })
  }

  SendDonation(charityid: number, balance: number) {
    this.http.get('https://localhost:44324/api/Wallet/getwalletforuser/' + this.usero.USERID).subscribe((result: any) => {
      if (result.balance >= balance) {
        result.balance = result.balance - balance;
        this.http.put('https://localhost:44324/api/Wallet/UPDATEWallets', result).subscribe((result2: any) => {
          let objBalance: any = {
            balance,
            charityid
          }
          this.http.put('https://localhost:44324/api/charity/UpdateBalanceCharity', objBalance).subscribe((resp) => {
            debugger;
            let amount = balance;
            let charityfk = charityid;
            let userfk = parseInt(this.usero.USERID);
            let datedonation = this.datepipe.transform((new Date), 'yyyy-MM-ddTHH:mm:ss');
            const abjdonation: any = {
              amount,
              charityfk,
              userfk,
              datedonation
            }
            this.http.post('https://localhost:44324/api/Donation/CreateDonation', abjdonation).subscribe((result3) => {
              alert('added to list');

            })

            window.location.reload();
            alert('Success Donations')
          })
        })


      }

    }, err => {

    })
  }


  rechargePaypal(amount: any) {
    this.userwalletfull.balance += amount;

    this.http.put('https://localhost:44324/api/Wallet/UPDATEWallets', this.userwalletfull).subscribe((result4: any) => {
      alert('recharge is sucessful');
    })
  }

  rechargebenefactor(body: any) {

    this.http.post('https://localhost:44324/api/bank/checkforcard', body).subscribe((result: any) => {
      if (result.balance > body.chargeamount) {
        result.balance = result.balance - body.chargeamount;
        this.http.put('https://localhost:44324/api/bank/UpdateBank', result).subscribe((result2: any) => {
          this.http.get('https://localhost:44324/api/Wallet/getwalletforuser/' + this.usero.USERID).subscribe((result3: any) => {
            result3.balance = parseInt(result3.balance) + parseInt(body.chargeamount);

            this.http.put('https://localhost:44324/api/Wallet/UPDATEWallets', result3).subscribe((result4: any) => {
              alert('recharge is sucessful');
            })
          })
        })
      }
    }, err => {
      this.toastr.error(err.message, err.status);
    })
  }
  AlltestimonialAccepted: any = [];
  sendTesti(body: any) {
    body.useridFk = parseInt(this.usero.USERID);
    body.rate = 4;
    body.isaccept = 0;
    this.http.post('https://localhost:44324/api/Testimonial/CREATEtestimonial', body).subscribe((returnn) => {
      this.toastr.success("Done Add")
    }, err => {
      this.toastr.error("Can't Add");
    })
  }
  getAllTestimonialAccept() {
    this.http.get('https://localhost:44324/api/Testimonial/GetAlltestimonialAccepted').subscribe((testimonial) => {
      this.AlltestimonialAccepted = testimonial;
    }, err => {
      this.toastr.error('Network Error')
    })
  }
  uploadBenefactorImage(file: FormData) {
    this.http.post('https://localhost:44324/api/users/UploadImages', file)
      .subscribe((data: any) => {


        this.display_Image = data.imagepath;

        if (data) {
          console.log(data);
        }
      }, err => {
        alert('operation image didnt work');
      })
  }
  openCauseProfile(charityid: number) {
    this.http.get('https://localhost:44324/api/Charity/getCharityProfile/' + charityid).subscribe((result: any) => {
      this.charityProfile = result;

      this.router.navigate(['/benefactor/donation'])
    }, err => {

    })
  }


  updateBenefactorProfile(body: any) {
    body.imagepath = this.display_Image;
    debugger;
    this.http.put('https://localhost:44324/api/users/UpdateUser', body).subscribe((result: any) => {
      alert('update suceeful');
      window.location.reload();


    }, err => {
      alert('shit')
    })

  }
  updateBenefactorPassword(body: any) {
    body.imagepath = this.display_Image;

    debugger;
    this.http.put('https://localhost:44324/api/users/UpdateUser', body).subscribe((result: any) => {
      alert('update suceeful');
    }, err => {
      alert('shit')
    })

  }


  getuserProfile() {

    this.http.get("https://localhost:44324/api/users/GetUserById/" + this.usero.USERID).subscribe((result1: any) => {
      debugger;
      this.benfactorprofile = result1;

    }, err => {
      alert('not found');
    })
  }
  WalletCheck: any = [];
  GetWalletByUserCheck() {
    debugger;
    this.http.get('https://localhost:44324/api/Wallet/getwalletforuser/' + this.usero.USERID).subscribe((result: any) => {
      this.WalletCheck = result;



    }, err => {

    })
  }

  transfermoney(id: number) {
    this.http.get('https://localhost:44324/api/Wallet/transfermoney/' + id).subscribe((result) => {

      this.toastr.success('Transfer completed successfully')
    }, err => {
      this.toastr.error('Transfer Failed')
    })

  }
  AllCauses: any = [];
  charityCategoryDto: any = [];
  charityOps: any;

  getCharitybyCategory(categoryid: number) {
    debugger;
    this.http.get('https://localhost:44324/api/Charity/getAllCharityDto/' + categoryid).subscribe((result) => {
      this.charityCategoryDto = result;
      this.charityOps = categoryid;

      debugger;


    }, err => {
      alert('Operation Didnt Worl')
    })
  }
  getAllCausesAccepted() {
    this.http.get('https://localhost:44324/api/Charity/GetAllcahrityAccepted').subscribe((resultCauese) => {
      debugger;
      this.AllCauses = resultCauese;
      this.toastr.success('Done');
    }, err => {
      this.toastr.error('Error Get All Causes');
    })
  }
}

