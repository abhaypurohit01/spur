import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { DataService } from '../../data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  @Input() products$: Observable<any>;
  subscription: Subscription;
  @Input() sendDataToChild: string;

  constructor(
    private _router: Router,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.onExit();
  }
  ngOnDestroy() {
  }

  Auth: any;
  UserName: any;

  onExit(){
    if (
      sessionStorage.getItem("Signup-info") !== null
    ){
      this.Auth = JSON.parse(sessionStorage.getItem("Signup-info"));
      this.UserName = this.Auth[0]["Username"];
    }
    else {
      this.onRemove();
    }
  }

  onRemove(): any {
    sessionStorage.removeItem("Signup-info");
    this._router.navigate(["login"]);
    // location.reload();
  }
  onlogout() {
    this.onRemove();
  }

  



}
