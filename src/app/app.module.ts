import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorLogComponent } from './error-log/error-log.component';
import { AppComponent } from './app.component';
import { IBITComponent } from './ibit/ibit.component';
import { SwLoaderComponent } from './sw-loader/sw-loader.component';
import { LrusReportComponent } from './lrus-report/lrus-report.component';
import { ApplicationsComponent } from './applications/applications.component';

import { LruErrorService } from "./lrus-report/lrus-report.service";


@NgModule({
  declarations: [
    HomeComponent,
    ErrorLogComponent,
    AppComponent,
    IBITComponent,
    SwLoaderComponent,
    LrusReportComponent,
    ApplicationsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    RouterModule.forRoot([
      { path: 'home',          component: HomeComponent },      
      { path: 'error-log',     component:ErrorLogComponent },
      { path: 'sw-loader',     component:SwLoaderComponent },
      { path: 'ibit',          component:IBITComponent },
      { path: 'lrus-report',   component:LrusReportComponent },
      { path: 'applications',  component:ApplicationsComponent },
      { path: '',   redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [LruErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
