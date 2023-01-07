import { DebugEventListener, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  constructor(private http:HttpClient,private toastr:ToastrService ,public router : Router,public datepipe: DatePipe) { }


}
