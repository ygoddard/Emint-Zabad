import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {
  title = 'Zabad-Kaplan';

  constructor(private _router: Router){}

  onSwLoaderClicked(): void {
    this._router.navigate(['/error-log']);
  }
}
