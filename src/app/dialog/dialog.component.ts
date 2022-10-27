import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../session.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { __values } from 'tslib';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit, AfterContentChecked {
  projectForm!: FormGroup;
  changeDetector: any;
  project!: any;
  res!: any;
  durationOfProject!: any;

  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private cdr: ChangeDetectorRef,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog: MatDialog
  ) {}

  ngAfterContentChecked(): void {
    this.cdr.detach();
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      sessionName: ['', Validators.required],
      endDate: [Date, Validators.required],
      startDate: [Date, Validators.required],
      duration: [Date, Validators.required],
    });
  }

  getTime(): Date {
    let dateTime = new Date();
    return dateTime;
  }

  updateSessions() {
    this.sessionService
      .updateSessions(this.projectForm.value, this.editData.id)
      .subscribe({
        next: (response) => {
          this.projectForm.reset();
          this.dialogRef.close('update');
        },
        error: (e: HttpErrorResponse) => {
          console.error(e);
        },
      });
  }
}
