import { DebugEventListener, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class BenefactorServiceService {

  constructor(private http: HttpClient, private toastr: ToastrService, public spinner: NgxSpinnerService, public router: Router, public datepipe: DatePipe) { }
  
  TestFeras: any;
  singleuserdoantions: any = [];
  body5: any = {}
  userwalletfull: any = {};
  display_Image: any;
  display_Image2: any;
  charityProfile: any = {};
  benfactorprofile: any = [];
  AlltestimonialAccepted: any = [];
  CheckGoal: any = {};
  WalletCheck: any = [];
  AllCauses: any = [];
  charityCategoryDto: any = [];
  charityOps: any;


  usero = JSON.parse(localStorage.getItem('user') || '{}');

  generateWallet(wallet: any) {
      this.http.post('https://localhost:44324/api/Wallet/CREATEWallets', wallet).subscribe((Result) => {
        this.toastr.success("Done")
        this.spinner.hide()
  
      }, err => {
        this.spinner.hide()
  
        this.toastr.error("Error")
      })
  
      window.location.reload();
    
    
  }
  addcard(body: any) {
    this.spinner.show()

    this.http.post('https://localhost:44324/api/Bank/createBank', body).subscribe((Result) => {
      this.spinner.hide()

      this.toastr.success('Done')
    }, err => {
      this.spinner.hide()

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
    this.spinner.show()
    this.http.get('https://localhost:44324/api/Wallet/getwalletforuser/' + this.usero.USERID).subscribe((result: any) => {
      if (result.balance >= balance) {
        result.balance = result.balance - balance;
        this.http.put('https://localhost:44324/api/Wallet/UPDATEWallets', result).subscribe((result2: any) => {
          let objBalance: any = {
            balance,
            charityid
          }

          this.http.put('https://localhost:44324/api/charity/UpdateBalanceCharity', objBalance).subscribe((resp) => {
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
              this.toastr.info('Added to list');

            })

            this.spinner.hide()

            this.toastr.success("Successfully")
            setTimeout(() => {
              window.location.reload();

            }, 1000);
          })
        })


      }
      else {
        this.toastr.error("The balance is insufficient");
        this.spinner.hide()

      }

    }, err => {
      this.toastr.error("Website Have Error , Try Again Later");

    })
  }


  rechargePaypal(amount: any) {
    this.spinner.show()

    this.userwalletfull.balance += amount;

    this.http.put('https://localhost:44324/api/Wallet/UPDATEWallets', this.userwalletfull).subscribe((result4: any) => {
      this.spinner.hide()

      this.toastr.success('recharge is sucessful');
    })
    this.spinner.hide()

  }

  rechargebenefactor(body: any) {

    this.http.post('https://localhost:44324/api/bank/checkforcard', body).subscribe((result: any) => {
      if (result.balance >= body.chargeamount) {
        result.balance = result.balance - body.chargeamount;
        
        this.http.put('https://localhost:44324/api/bank/UpdateBank', result).subscribe((result2: any) => {
          this.http.get('https://localhost:44324/api/Wallet/getwalletforuser/' + this.usero.USERID).subscribe((result3: any) => {
            result3.balance = parseInt(result3.balance) + parseInt(body.chargeamount);

            this.http.put('https://localhost:44324/api/Wallet/UPDATEWallets', result3).subscribe((result4: any) => {
              this.toastr.success('recharge is sucessful');

            }, err => {
              this.toastr.error(err.message, err.status);
            })
          })
        }, err => {
          this.toastr.error(err.message, err.status);
        })
      }
      else{
          this.toastr.error("Balance not enough")
      }
    }, err => {
      this.toastr.error(err.message, err.status);
    })
    this.spinner.hide()

  }
  sendTesti(body: any) {
    this.spinner.show()

    body.useridFk = parseInt(this.usero.USERID);
    body.rate = 4;
    body.isaccept = 0;
    this.http.post('https://localhost:44324/api/Testimonial/CREATEtestimonial', body).subscribe((returnn) => {
      this.toastr.success("Done Add")
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    }, err => {
      this.toastr.error("Can't Add");
    })
    this.spinner.hide()

  }
  getAllTestimonialAccept() {
    this.spinner.show()

    this.http.get('https://localhost:44324/api/Testimonial/GetAlltestimonialAccepted').subscribe((testimonial) => {
      this.AlltestimonialAccepted = testimonial;
    }, err => {
      this.toastr.error('Network Error')
    })
    this.spinner.hide()

  }
  uploadBenefactorImage(file: FormData) {
    this.spinner.show()

    this.http.post('https://localhost:44324/api/users/UploadImages', file)
      .subscribe((data: any) => {


        this.display_Image = data.imagepath;

        if (data) {
          console.log(data);
        }
      }, err => {
        this.toastr.error('operation image didnt work');
      })
      this.spinner.hide()

  }
  openCauseProfile(charityid: number) {
    this.spinner.show()

    this.http.get('https://localhost:44324/api/Charity/getCharityProfile/' + charityid).subscribe((result: any) => {
      this.charityProfile = result;
      if (this.charityProfile.balance >= this.charityProfile.goal) {
        this.charityProfile.isaccepted = 5;

        this.http.put('https://localhost:44324/api/Charity/Updatecahrity', this.charityProfile).subscribe((resultCheck) => {
          this.toastr.success('Thank you, we have collected the goal in the donation campaign and you are the last donor');
        })
      }

      this.router.navigate(['/benefactor/donation'])
    }, err => {
      this.toastr.error('You have Error')

    })
    this.spinner.hide()

  }




  updateBenefactorProfile(body: any) {
    this.spinner.show()

    body.imagepath = this.display_Image;
    debugger;
    this.http.put('https://localhost:44324/api/users/UpdateUser', body).subscribe((result: any) => {
      this.toastr.success('Update suceeful');
      this.spinner.hide()

      window.location.reload();


    }, err => {
      this.toastr.error('There is a problem, please try again later');
    })
    this.spinner.hide()

  }
  updateBenefactorPassword(body: any) {
    this.spinner.show()

    body.imagepath = this.display_Image;

    debugger;
    this.http.put('https://localhost:44324/api/users/UpdateUser', body).subscribe((result: any) => {
      this.toastr.success('update suceeful');
    }, err => {
      this.toastr.error('There is a problem, please try again later');

    })
    this.spinner.hide()

  }


  getuserProfile() {
    this.spinner.show()

    this.http.get("https://localhost:44324/api/users/GetUserById/" + this.usero.USERID).subscribe((result1: any) => {
      debugger;
      this.benfactorprofile = result1;

    }, err => {

      this.toastr.error('There is a problem, please try again later');
    })
    this.spinner.hide()

  }
  GetWalletByUserCheck() {
    debugger;
    this.spinner.show()

    this.http.get('https://localhost:44324/api/Wallet/getwalletforuser/' + this.usero.USERID).subscribe((result: any) => {
      this.WalletCheck = result;
      this.spinner.hide()



    }, err => {
      this.toastr.error('There is a problem, please try again later');

    })
  }

  transfermoney(id: number) {
    this.spinner.show()

    this.http.get('https://localhost:44324/api/Wallet/transfermoney/' + id).subscribe((result) => {
      this.spinner.hide()

      this.toastr.success('Transfer completed successfully')
    }, err => {
      this.toastr.error('Transfer Failed')
      this.spinner.hide()

    })

  }
 

  getCharitybyCategory(categoryid: number) {
    debugger;
    this.spinner.show()

    this.http.get('https://localhost:44324/api/Charity/getAllCharityDto/' + categoryid).subscribe((result) => {
      this.charityCategoryDto = result;
      this.charityCategoryDto = this.charityCategoryDto.filter((x: any) => x.isaccepted == 1);
      this.charityOps = categoryid;

      this.spinner.hide()



    }, err => {
      this.toastr.error('Operation Didnt Worl')
      this.spinner.hide()

    })
  }
  getAllCausesAccepted() {
    this.spinner.show()
    this.http.get('https://localhost:44324/api/Charity/GetAllcahrityAccepted').subscribe((resultCauese) => {
      debugger;
      this.AllCauses = resultCauese;
      this.spinner.hide()
    }, err => {
      this.toastr.error('Error Get All Causes');
      this.spinner.hide()

    })
  }
}

