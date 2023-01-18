import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/home.service';
import { DatePipe } from '@angular/common';
import {render} from 'creditcardpayments/creditCardPayments'
import { BenefactorServiceService } from 'src/app/services/benefactor-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  amountt:number=0;
  constructor(private dialog : MatDialog , public benefactor:BenefactorServiceService,public pipe:DatePipe ,public spinner:NgxSpinnerService)
  {

   
  }
  
  @ViewChild ('paymentdialog') paymentdialogCall! :TemplateRef<any>

    public show?:boolean;
    public showRequrement?:boolean;
   

    RechargeForm:any = new FormGroup({
      accountnum:new FormControl(),
      fullname:new FormControl(),
      expireddate:new FormControl(),
      cvv:new FormControl(),
      chargeamount:new FormControl()
    })
    AddCartForm:FormGroup = new FormGroup({
      accountnum:new FormControl(),
      fullname:new FormControl(),
      expireddate:new FormControl(),
      cvv:new FormControl(),
      BalanceP:new FormControl()

    })


    
    public valuee :any;
    ngOnInit(): void {
      this.spinner.show()
     

        this.benefactor.displaybenefactorbalance(parseInt(this.benefactor.usero.USERID));
        this.benefactor.getuserdonationssolo(parseInt(this.benefactor.usero.USERID));

        setTimeout(() => {

          this.show=this.benefactor.TestFeras;
          this.showRequrement=!this.show;
          this.spinner.hide();

        }, 6000);

     
        }
    
        wallet:any={
            balance:0,
            useridFk:parseInt(this.benefactor.usero.USERID),
            bankaccountFk:62
        }
         counter :number= 0;
showPic:boolean=true;
        PAY(){
            this.counter++;
          if(this.counter==1){
            this.showPic=false
            this.paypal();
          }
        }
  paypal(){
    render(
      {
        id:"#myPaypalButtons",
        currency:"USD",
        value:this.amountt.toString(),
        
        onApprove:(details)=>{  
          debugger;
          this.rechargePay(this.amountt);
          alert("Transaction Done")
        }
      }
    )
    

  }
  reload(){
    window.location.reload()
  }

  Recharge(){
    this.dialog.open(this.paymentdialogCall);
  }

  rechargePay(amount:any){
    this.benefactor.rechargePaypal(amount);
  }
  rechargewallet(){
    console.log("ABD");
    this.spinner.show()

    console.log(this.RechargeForm.value);
    this.benefactor.rechargebenefactor(this.RechargeForm.value);
  }
  generateWallett(){
    debugger;
    this.benefactor.generateWallet(this.wallet);
  }

}
