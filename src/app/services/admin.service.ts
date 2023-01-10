import { DebugEventListener, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private toastr: ToastrService, public router: Router, public datepipe: DatePipe) { }
  display_Image2: any;
  display_Image: any;
  causes: any = [];
  generalreport: any = {}

  About: any = [];

  getgeneralreport() {
    this.http.get('https://localhost:44324/api/Report/GetGeneralReport').subscribe((result: any) => {
      this.generalreport = result;
    })
  }
  deleteCourse(id: number) {
    this.http.delete('https://localhost:44324/api/Category/DeleteCategory/' + id).subscribe((result) => {
      alert('delete succeful');
    }, err => {
      alert('delet failed');
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
        alert('operation image didnt work');
      })
  }

  updatecause(body: any) {
    body.categoryimage = this.display_Image;
    debugger;
    this.http.put('https://localhost:44324/api/Category/UPDATECategory', body).subscribe((result: any) => {
      alert('update suceeful');
    }, err => {
      alert('shit')
    })

  }
  users1: any = [];
  usero = JSON.parse(localStorage.getItem('user') || '{}');

  getuserProfile() {
    debugger;

    this.http.get("https://localhost:44324/api/users/GetUserById/" + this.usero.USERID).subscribe((result1: any) => {
      this.users1 = result1;

    }, err => {
      this.toastr.error("Not Found")
    })
  }
  users2: any = {};

  getuserProfileuseBlock(id: number) {
    debugger;

    this.http.get("https://localhost:44324/api/users/GetUserById/" + id).subscribe((result1: any) => {
      this.users2 = result1;
      console.log(this.users2);


    }, err => {
      this.toastr.error("Not Found")
    })
  }
  allusersinnerRole: any = [];

  getallusersinnerRole() {
    this.http.get('https://localhost:44324/api/Users/getallusersinnerrole').subscribe((userss) => {

      this.allusersinnerRole = userss;
      this.allusersinnerRole = this.allusersinnerRole.filter((x: any) => x.isaccepted == 1);
      this.toastr.success("User Blocked")
    }, err => {
      this.toastr.success("User Can't blocked")
    })
  }
  getallusersinnerRole2() {
    this.http.get('https://localhost:44324/api/Users/getallusersinnerrole').subscribe((userss) => {

      this.allusersinnerRole = userss;
      this.allusersinnerRole = this.allusersinnerRole.filter((x: any) => x.isaccepted == 0);
      this.toastr.success("User Unblocked")

    }, err => {
      this.toastr.error("User Can't Unblocked")
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
  CreateCategory(body: any) {
    debugger;
    //this.spinner.show();
    body.categoryimage = this.display_Image;
    this.http.post('https://localhost:44324/api/Category/CREATECategory', body).subscribe((resp) => {
      alert('operation creation  work');
      // this.toastr.success('Created');
      //this.spinner.hide();
    }, err => {
      //this.spinner.hide();
      alert('operation creation didnt work');

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
  GetAllCategory() {

    this.http.get('https://localhost:44324/api/Category/GetAllCategory').subscribe((result) => {
      this.causes = result;

    }, err => {
      alert('operation didnt work');

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
        alert('operation image didnt work');
      })

  }





  participantsList: any = [];

  GetAllAbout() {
    //Show Spinner
    // Hits API
    //Result => Toaster + Hide Spinner
    //this.spinner.show();
    this.http.get('https://localhost:44324/api/Aboutu/GetAllaboutus').subscribe((result) => {
      debugger;
      this.About = result;
      let count = 0;
      for (let index = 0; index < this.About.length; index++) {


        const element = this.About[index];
        if (index != 1) {
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
      alert('delete suceeful');

    }, err => {
      alert('didn\'t work')
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
  uploadAttachmentforabout2(file: FormData) {
    this.http.post('https://localhost:44324/api/Category/UploadImages', file)
      .subscribe((data: any) => {


        this.display_Image2 = data.categoryimage;

        if (data) {
          console.log(data);
        }
      }, err => {
        alert('operation image didnt work');
      })
  }
}
