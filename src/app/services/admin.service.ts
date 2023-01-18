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
export class AdminService {

  constructor(private http: HttpClient, private toastr: ToastrService, public router: Router,public spinner:NgxSpinnerService, public datepipe: DatePipe) { }
  display_Image2: any;
  display_Image: any;
  causes: any = [];
  generalreport: any = {}
 backup2:any=[];
  About: any = [];
  homeInformation:any=[];

  getAllInformationHome(){
    this.http.get('https://localhost:44324/api/Home/getallhome').subscribe((result:any)=>{
      this.homeInformation=result

    })

  }


  getgeneralreport() {
    this.http.get('https://localhost:44324/api/Report/GetGeneralReport').subscribe((result: any) => {
      this.generalreport = result;
    })
  }
  deleteCourse(id: number) {
    this.http.delete('https://localhost:44324/api/Category/DeleteCategory/' + id).subscribe((result) => {
      this.toastr.success('delete successfully');
    }, err => {
      this.toastr.error('delet failed');
    })

  }
  uploadAttachment(file: FormData) {
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

  updatecause(body: any) {
    body.categoryimage = this.display_Image;
    ;
    this.http.put('https://localhost:44324/api/Category/UPDATECategory', body).subscribe((result: any) => {
      this.toastr.success('update successfully');
    }, err => {
      this.toastr.error('update unsuccessful')
    })

  }
  users1: any = [];
  usero = JSON.parse(localStorage.getItem('user') || '{}');

  getuserProfile() {
    ;

    this.http.get("https://localhost:44324/api/users/GetUserById/" + this.usero.USERID).subscribe((result1: any) => {
      this.users1 = result1;

    }, err => {
      this.toastr.error("Not Found")
    })
  }
  users2: any = {};

  getuserProfileuseBlock(id: number) {
    ;

    this.http.get("https://localhost:44324/api/users/GetUserById/" + id).subscribe((result1: any) => {
      this.users2 = result1;
      console.log(this.users2);


    }, err => {
      this.toastr.error("Not Found")
    })
  }
  allusersinnerRole: any = [];
  allCharityWating:any=[];
  GetAllChartyWatingForAdmin1() {
    this.http.get('https://localhost:44324/api/Charity/GetAllcahrity').subscribe((result) => {
    this.allCharityWating=result;
    this.allCharityWating = this.allCharityWating.filter((x: any) => x.isaccepted==4);

  }, err => {
    this.toastr.error('operation didnt work');
  })
}

Response:any={};
GetCharitybyIdd(id: number) {
   this.http.get('https://localhost:44324/api/Charity/getCharityProfile/'+id).subscribe((result:any) => {
   
     this.Response = result;
     console.log(this.Response)
     console.log("FERAS");
 }, err => {
   this.toastr.error('Charity Failed')
 })

}

updateCharityData(Obj: any) {
debugger;
  Obj.categoryidFk = parseInt(Obj.categoryidFk);
  Obj.charityid = parseInt(Obj.charityid);
  Obj.goal = parseInt(Obj.goal);
  Obj.numdonation = parseInt(Obj.numdonation);
  Obj.balance = parseInt(Obj.balance);
  Obj.isaccepted = parseInt(Obj.isaccepted);
  Obj.state = parseInt(Obj.state);

  
  this.http.put('https://localhost:44324/api/Charity/Updatecahrity', Obj).subscribe((result) => {
    this.toastr.success('Updated')
  }, err => {
    this.toastr.error('Failed')
  })
}
  getallusersinnerRole() {
    this.http.get('https://localhost:44324/api/Users/getallusersinnerrole').subscribe((userss) => {

      this.allusersinnerRole = userss;
      this.allusersinnerRole = this.allusersinnerRole.filter((x: any) => x.isaccepted == 1);
      this.backup2=this.allusersinnerRole.filter((x: any) => x.isaccepted == 1);
    }, err => {
      this.toastr.success("Error Network")
    })
  }
  getallusersinnerRole2() {
    debugger;
    this.http.get('https://localhost:44324/api/Users/getallusersinnerrole').subscribe((userss) => {

      this.allusersinnerRole = userss;
      this.allusersinnerRole = this.allusersinnerRole.filter((x: any) => x.isaccepted == 0);

    }, err => {
      this.toastr.error("Error Network")
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
        this.toastr.success('operation image didnt work');
      })
  }
  CreateCategory(body: any) {
    ;
    //this.spinner.show();
    body.categoryimage = this.display_Image;
    this.http.post('https://localhost:44324/api/Category/CREATECategory', body).subscribe((resp) => {
      this.toastr.success('operation creation  work');
      // this.toastr.success('Created');
      //this.spinner.hide();
    }, err => {
      //this.spinner.hide();
      this.toastr.error('operation creation didnt work');

    })

  }
  updateBenefactorProfile(body: any) {
    body.imagepath = this.display_Image;
    ;
    this.http.put('https://localhost:44324/api/users/UpdateUser', body).subscribe((result: any) => {
      this.toastr.success('update successfully');
      window.location.reload();


    }, err => {
      this.toastr.error('update unsuccessful')
    })

  }
  GetAllCategory() {

    this.http.get('https://localhost:44324/api/Category/GetAllCategory').subscribe((result) => {
      this.causes = result;

    }, err => {
      this.toastr.error('operation didnt work');

    })
  }
  uploadAttachmentforabout1(file: FormData) {
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





  participantsList: any = [];

  GetAllAbout() {
    //Show Spinner
    // Hits API
    //Result => Toaster + Hide Spinner
    //this.spinner.show();
    this.http.get('https://localhost:44324/api/Aboutu/GetAllaboutus').subscribe((result) => {
      ;
      this.About = result;
      let count = 0;
      for (let index = 0; index < this.About.length; index++) {


        const element = this.About[index];
        if (index != 1&&index != 6) {
          this.participantsList[count] = this.About[index]
          count++

          // this.About[index]=result[index]
        }

      }





      //this.spinner.hide();
    }, err => {
      this.toastr.error('Error' + err.message, err.status);
      //this.spinner.hide();
    })
  }

  deletContact(contactid: Number) {
    this.http.delete('https://localhost:44324/api/ContactUs/Deletecontactus/' + contactid).subscribe((result: any) => {
      this.toastr.success('delete successfully');

    }, err => {
      this.toastr.error('didn\'t work')
    })

  }
  updateAbout(obj: any) {
    obj.imagepath1=this.display_Image;
    this.http.put('https://localhost:44324/api/Aboutu/Updateaboutus', obj)
      .subscribe((result: any) => {
        this.toastr.success('Updated');
      }, err => {
        this.toastr.error(err.message, err.status);
      });
    window.location.reload();
  }
  updateHome(obj: any) {
    obj.imagepath1=this.display_Image;
    obj.imagepath2=this.display_Image2;
    this.http.put('https://localhost:44324/api/Home/updateHome', obj)
      .subscribe((result: any) => {
        this.toastr.success('updated');
      }, err => {
        this.toastr.error(err.message, err.status);
      });
    window.location.reload();
  }
  uploadAttachmentforabout2(file: FormData) {
    this.http.post('https://localhost:44324/api/Category/UploadImages', file)
      .subscribe((data: any) => {


        this.display_Image2 = data.categoryimage;

        if (data) {
          console.log(data);
        }
      }, err => {
        this.toastr.error('operation image didnt work');
      })
  }
}
