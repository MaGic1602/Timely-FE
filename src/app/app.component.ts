
import { Component,OnInit } from '@angular/core';
import { SessionService, WorkSession } from './session.service';
import * as XLSX from "xlsx";

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
  
})
export class AppComponent implements OnInit {

  currentStatus:any;
  fileName= 'ExcelSheet.xlsx';
  public workSessions: WorkSession[] = [];
  constructor(private sessionService: SessionService, private dialog:MatDialog) { }

 
  ngOnInit(){

  
  }
 editProject(row: any){
  this.dialog.open(DialogComponent,{
    width:"30%",
    height:"30%",
    data: row
      });
 }
 
 deleteSessions()
 {
  this.sessionService.deleteSessions()
  .subscribe({
    next:(response)=>{

    },
    error:()=>{
      alert("Oooops")
    }
  })
  
 }



openDialog() {
  const dialogRef = this.dialog.open(DialogComponent,{
width:"30%",
height:"30%"
  });
}


}



/*
exportexcel(): void
{
   pass here the table id 
  let element = document.getElementById('excel-table');
  const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

 
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

 
  XLSX.writeFile(wb, this.fileName);

}
*/
