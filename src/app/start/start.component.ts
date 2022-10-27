import { AfterContentChecked, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, AfterContentChecked{
  projectForm!:FormGroup;
 public startTime!: Date;
 constructor(private formBuilder:FormBuilder, 
  private sessionService: SessionService,
  private cdr: ChangeDetectorRef) { }

  ngAfterContentChecked(): void {
    this.cdr.detach();
    this.cdr.detectChanges();
  }
  ngOnInit(): void {
    this.projectForm=this.formBuilder.group({
      startDate: [Date, 
        Validators.required ],
    })
  }
  showTableVar: boolean = true;

showTable():Date{


this.startTime=this.getTime();
console.log(this.startTime);
return this.startTime;

}

addSessions(){
  if(this.projectForm.valid)
  {
    this.sessionService.addSessions(this.projectForm.value)
    .subscribe({
      next:(response)=>{
      
        console.log("eorks")
      },
      error:()=>{
        alert("nista od tog prijo")
      }
    })
  }
 
}

getTime():Date{
  let dateTime = new Date();
return dateTime;}



 
}
