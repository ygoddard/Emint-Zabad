import { Component, OnInit } from '@angular/core';
import { ILruError } from "../lrus-report/LruClass";
import { LruErrorService } from "../lrus-report/lrus-report.service";

@Component({
  selector: 'app-applications',
  providers: [LruErrorService],
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  // variables
  lruErrors: ILruError[];
  errorMessage: string;
  
  
//  methods
  constructor(private _lruErrorService : LruErrorService) { }

  ngOnInit() : void {
    this._lruErrorService.getErrors()
            .subscribe(lruErrors => {
                this.lruErrors = lruErrors;
            },
                error => this.errorMessage = <any>error);
}


  

}
