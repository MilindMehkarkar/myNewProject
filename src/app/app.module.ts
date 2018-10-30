import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatMenuModule, MatIconModule, MatTabsModule, MatButtonToggleModule, MatCardModule, MatGridListModule, MatSidenavModule, MatTableModule, MatDividerModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule } from '@angular/material'



import { AppComponent } from './app.component';
import { HeaderApp } from './CollegeClientProject/header/header';
import { FootApp } from './CollegeClientProject/footer/footer';
import { BodyApp } from './CollegeClientProject/body/body';
import { AboutComponent } from './CollegeClientProject/About/about';
import { ResultComponent } from './CollegeClientProject/Results/results';
import { TandpcellComponent } from './CollegeClientProject/tandpcell/tandpcell';
import { RouterModule } from '@angular/router';
import { CollegeRoutes } from './CollegeClientProject/routing.config';
import { ResandPubComponent } from './CollegeClientProject/ResandPub/resandpub';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { DownloadsComponent } from './CollegeClientProject/Downloads/downloads';
import { Page5Component } from './CollegeClientProject/Committees/committees';
import { ContactComponent } from './CollegeClientProject/Contact/contact';
import { EveGalComponent } from './CollegeClientProject/EventGallery/eventgallery';
import { CouncilsComponent } from './CollegeClientProject/Councils/councils';
import { FacilityComponent } from './CollegeClientProject/Facilities/facilities';
import { FacultyComponent } from './CollegeClientProject/Faculty/faculty';
import { DepartmentsComponent } from './CollegeClientProject/Departments/departments';
import { AdmissionProcess } from './CollegeClientProject/AdmissionProcess/admisproc';
import { SAARandNAACComponent } from './CollegeClientProject/SAARNAACReport/saarandnaac';
import { MandatorydisclosureComponent } from './CollegeClientProject/MandatoryDisclosure/mandatorydisclosure';





@NgModule({
  declarations: [
    AppComponent,
    HeaderApp,
    FootApp,
    BodyApp,
    AboutComponent,
    ResultComponent,
    TandpcellComponent,
    ResandPubComponent,
    DownloadsComponent,
    Page5Component,
    ContactComponent,
    EveGalComponent,
    CouncilsComponent,
    FacilityComponent,
    FacultyComponent,
    DepartmentsComponent,
    AdmissionProcess,
    SAARandNAACComponent,
    MandatorydisclosureComponent,
    
  
    
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    CdkTableModule,
    MatTableModule,
    MatDividerModule,
    RouterModule.forRoot(CollegeRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
