import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
srno: number;
filename: String;
download: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{srno: 1, filename: 'file1', download:'View/Download'},
{srno: 2, filename: 'file2', download: 'View/Download'},
{srno: 3, filename: 'file3', download: 'View/Download'},
{srno: 4, filename: 'file4', download: 'View/Download'},
{srno: 5, filename: 'file5', download: 'View/Download'},
];

@Component({
selector: 'app-downloads',
templateUrl: './downloads.component.html',
styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

displayedColumns: string[] = ['srno', 'filename', 'download'];
dataSource = ELEMENT_DATA;
constructor() { }

ngOnInit() {
}

}