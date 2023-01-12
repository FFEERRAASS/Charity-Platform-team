import { DebugEventListener, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private toastr: ToastrService, public router: Router, public datepipe: DatePipe) { }

  [x: string]: any;
  display_Image: any;
  causes: any = [];
  display_Image2: any;
  About: any = [];
  contact: any = [];
  chartiy: any = [];
  testimonials: any = [];
  testimonialupdate: any = [];
  vistorabout: any = [];
  usero = JSON.parse(localStorage.getItem('user') || '{}');
  benfactorprofile: any = [];
  charityCategoryDto: any = [];
  charityProfile: any = {};
  charityOps: any;
  today: Date = new Date();
  userwalletfull: any = {};
  singleuserdoantions: any = [];
  carddetails: any = {}
  backup: any = []
  testWallet: any;
  user: any;
  charityId: any;
  walletUser: any;
  category: any;
  alldonation: any = [];
  allusers: any = [];
  count: any = {};
  countBenefichary: any = {};
  CountUsers: any = {};
  AllCauses: any = [];
  AlltestimonialAccepted: any = [];
  Last3Testimonial: any = [];

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
  ReturnLastthreeAccepted() {
    this.http.get('https://localhost:44324/api/Testimonial/ReturnLastthreeAccepted').subscribe((Last3Testimo) => {
      this.Last3Testimonial = Last3Testimo;
    }, err => {
      this.toastr.error('Network Error');
    })
  }


  getAllTestimonialAccept() {
    this.http.get('https://localhost:44324/api/Testimonial/GetAlltestimonialAccepted').subscribe((testimonial) => {
      this.AlltestimonialAccepted = testimonial;
    }, err => {
      this.toastr.error('Network Error')
    })
  }
  GetAllCategory() {

    this.http.get('https://localhost:44324/api/Category/GetAllCategory').subscribe((result) => {
      this.causes = result;

    }, err => {
      alert('operation didnt work');

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


  getCountusers() {
    this.http.get('https://localhost:44324/api/Users/getCountusers').subscribe((count1) => {
      debugger;
      this.CountUsers = count1;
    })

  }


  CountBeneficary() {
    this.http.get('https://localhost:44324/api/Users/GetbeneficharyCount').subscribe((count1) => {
      debugger;
      this.countBenefichary = count1;
    })
  }
  CountDonation() {
    this.http.get('https://localhost:44324/api/Donation/GetDonationCount').subscribe((count1) => {
      debugger;
      this.count = count1;
    })
  }
  getallusers() {
    this.http.get('https://localhost:44324/api/Users/GetAllUsers').subscribe((userss) => {
      this.allusers = userss;
    }, err => {
      alert('Shit');
    })
  }
  getDonation() {
    this.http.get('https://localhost:44324/api/Donation/getAllDonation').subscribe((response) => {
      this.alldonation = response;
      this.backup = response;
    }, err => {
      alert('Shit')
    })
  }
  TestFeras: any;
  body5: any = {}
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



  GetAllContactUs() {
    debugger;

    this.http.get('https://localhost:44324/api/ContactUs/GetAllcontactus').subscribe((res) => {

      this.contact = res;
      this.contact = res;
    }, err => {
      alert('damn it');

    })
  }
  updateAbout(obj: any) {

    this.http.put('https://localhost:44324/api/Aboutu/Updateaboutus', obj)
      .subscribe((result: any) => {
        this.toastr.success('updated');
      }, err => {
        this.toastr.error(err.message, err.status);
      });
    window.location.reload();
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



  visitorabout() {
    this.http.get('https://localhost:44324/api/Aboutu/GetAllaboutus').subscribe((result) => {
      this.vistorabout = result;
    }, err => {
      alert('failed to fetch visitor about');

    })
  }

  GetAllTestimonial() {
    this.http.get('https://localhost:44324/api/Testimonial/getusertestimonial').subscribe((result) => {
      this.testimonials = result;
      debugger;
    }, err => {
      alert('operation didnt work');

    })
  }

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
  changetestimonialstate(testimonialid: number) {
    this.http.get('https://localhost:44324/api/Testimonial/GettestimonialtById/' + testimonialid).subscribe((result) => {
      this.testimonialupdate = result;
      console.log(this.testimonialupdate);
      this.testimonialupdate.isaccept = 1;
      this.http.put('https://localhost:44324/api/Testimonial/UPDATEtestimonial', this.testimonialupdate).subscribe((response: any) => {
        alert('updates succefuly');
      });
    }, err => {
      alert('operation update didnt work');

    })
  }

  rejecttestimonial(testimonialid: number) {
    this.http.delete('https://localhost:44324/api/Testimonial/Deletetestimonial/' + testimonialid).subscribe((respone) => {
      alert('deleted sucefuly')
    }, err => {
      alert('operation delete didnt work');

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
  bodyCheck:any={};
  register(body: any) {
    this.bodyCheck={
      email:body.email,
      username:body.username,
      phonenumber:body.phonenumber

    }
    this.http.post('https://localhost:44324/api/Users/CheckAvailable',this.bodyCheck).subscribe((response:any)=>{
      if(response != null){
        this.toastr.error('Email, phone number, or username is used. We apologize')
      }
      else{
        this.http.post('https://localhost:44324/api/users/CreateUser', body).subscribe((resp: any) => {
          this.toastr.success("Done")
        },
          err => {
            alert('Not Done');
          })
      }
    })
    
   
  }




  /////////////////////////////////////charity function
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

  }

  GetAllCharty() {
    this.http.get('https://localhost:44324/api/Charity/GetAllcahrity').subscribe((result) => {
      this.chartiy = result;
    }, err => {
      alert('operation didnt work');
    })
  }
  WatingCharity:any=[]

  GetAllChartyWating() {
      let count=0
      this.http.get('https://localhost:44324/api/Charity/GetAllcahrity').subscribe((result) => {
      let x:any=result;
      for (let index = 0; index < x.length; index++) {
        const element = x[index];
        if(element.requestmoney=='requsetmony'){
          this.WatingCharity[count]=element;
          count++
        }
      };
    }, err => {
      alert('operation didnt work');
    })
  }

  GetAllCharty1() {
    return this.http.get('https://localhost:44324/api/Charity/GetAllcahrity')
  }
  GetAllAbout() {
    //Show Spinner
    // Hits API
    //Result => Toaster + Hide Spinner
    //this.spinner.show();
    this.http.get('https://localhost:44324/api/Aboutu/GetAllaboutus').subscribe((result) => {
      this.About = result;

      //this.spinner.hide();
    }, err => {
      this.toastr.error('Error' + err.message, err.status);
      //this.spinner.hide();
    })
  }




  DeleteFun_CHARTIY(id: number) {
    this.http.delete('https://localhost:44324/api/Charity/DeleteCategory/' + id).subscribe((result) => {

      this.toastr.success('delete succeful')
    }, err => {
      this.toastr.error('delete failed')
    })

  }
  accept_CHARTIY(body: any) {
    body.isaccepted = 1
    this.http.put('https://localhost:44324/api/Charity/Updatecahrity', body).subscribe((result) => {

      this.toastr.success('Accepted')
    }, err => {
      this.toastr.error('Failed')
    })
  }

  AcceptTransferMoneyFromCharityWallet(id:any){
    this.http.get('https://localhost:44324/api/Charity/UpdateCharityUserWallet/'+id).subscribe((result) => {

      this.toastr.success('Accepted')
    }, err => {
      this.toastr.error('Failed')
    })
  }


  Reajcted_CHARTIY(body: any) {
    body.isaccepted = 3
    this.http.put('https://localhost:44324/api/Charity/Updatecahrity', body).subscribe((result) => {

      this.toastr.success('Reajcted')
    }, err => {
      this.toastr.error('Failed')
    })
  }


  /*=================end charity functions =================*/
  /*=================end charity functions =================*/
  /*=================end charity functions =================*/

  CreatContact(body: any) {
    this.http.post('https://localhost:44324/api/ContactUs/CREATEcontactus', body).subscribe((result: any) => {
      alert('creat suceeful');
    }, err => {
      alert('oh no!!')
    })
  }










  /* ======================> start beneficiary function <============================== */
  /* ======================> start beneficiary function <============================== */
  GetUserbyId(id: number) {
    this.http.get('https://localhost:44324/api/Users/GetUserById/' + id).subscribe((result) => {
      debugger;
      this.user = result;
    }, err => {
      this.toastr.error('Users Failed')
    })

  };


  GetCharitybyId(id: number) {
    this.http.get('https://localhost:44324/api/Charity/GetcahrityById/' + id).subscribe((result1) => {
      if (result1 != null) {
        debugger;
        this.charityId = result1;

        if (this.charityId.isaccepted == 2) {
          this.charityId.isaccepted = "Wating"
        } else if (this.charityId.isaccepted == 3) {
          this.charityId.isaccepted = "Rejcted"
        } else if (this.charityId.isaccepted == 1) {
          this.charityId.isaccepted = "Accepted"
        }
        this.toastr.success('succeful')
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
  WalletCheck: any = [];
  GetWalletByUserCheck() {
    debugger;
    this.http.get('https://localhost:44324/api/Wallet/getwalletforuser/' + this.usero.USERID).subscribe((result: any) => {
      this.WalletCheck = result;



    }, err => {

    })
  }

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
  transfermoney(id: number) {
    this.http.get('https://localhost:44324/api/Wallet/transfermoney/' + id).subscribe((result) => {

      this.toastr.success('Transfer completed successfully')
    }, err => {
      this.toastr.error('Transfer Failed')
    })

  }








}

