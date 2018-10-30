import { Routes } from '@angular/router'
import { BodyApp } from './body/body';
import { AboutComponent } from './About/about';
import { ResultComponent } from './Results/results';
import { TandpcellComponent } from './tandpcell/tandpcell';
import { AdmissionProcess } from './AdmissionProcess/admisproc';
import { Page5Component } from './Committees/committees';
import { ContactComponent } from './Contact/contact';
import { FacilityComponent } from './Facilities/facilities';
import { DepartmentsComponent } from './Departments/departments';
import { EveGalComponent } from './EventGallery/eventgallery';
import { CouncilsComponent } from './Councils/councils';
import { DownloadsComponent } from './Downloads/downloads';
import { FacultyComponent } from './Faculty/faculty';
import { ResandPubComponent } from './ResandPub/resandpub';
import { SAARandNAACComponent } from './SAARNAACReport/saarandnaac';
import { MandatorydisclosureComponent } from './MandatoryDisclosure/mandatorydisclosure';

export const CollegeRoutes:Routes = [
    {path:'', component: BodyApp },
    {path:'about', component: AboutComponent},
    {path:'results',component: ResultComponent},
    {path:'tpcell',component:TandpcellComponent},
    {path:'admissionprocess',component:AdmissionProcess},
    {path:'committees',component:Page5Component},
    {path:'contact',component:ContactComponent},
    {path:'facilities',component:FacilityComponent},
    {path:'faculty',component:FacultyComponent},
    {path:'departments',component:DepartmentsComponent},
    {path:'eventgallery',component:EveGalComponent},
    {path:'councils',component:CouncilsComponent},
    {path:'resandpub',component:ResandPubComponent},
    {path:'downloads',component:DownloadsComponent},
    {path:'mandatorydisclosure',component:MandatorydisclosureComponent},
    {path:'saarandnaacreport',component:SAARandNAACComponent}
    
]