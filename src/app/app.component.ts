import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spurapp';
  constructor(private toastr: ToastrService){
    
  }
}
