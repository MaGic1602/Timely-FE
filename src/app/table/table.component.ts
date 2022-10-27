import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SessionService, WorkSession } from '../session.service';
import { DialogComponent } from '../dialog/dialog.component';
import * as XLSX from 'xlsx';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @ViewChild('TABLE') table!: ElementRef;

  displayedColumns: string[] = [
    'sessionName',
    'startDate',
    'endDate',
    'duration',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() show!: boolean;

  constructor(
    private sessionService: SessionService,
    private dialog: MatDialog
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.getSessions();
  }
  private isButtonVisible = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
    this.getSessions();
  }

  getSessions() {
    this.sessionService.getSessions().subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        //console.log(response);
      },
      error: () => {
        alert('Error getting data!');
      },
    });
  }

  editProject(row: any): boolean {
    this.dialog.open(DialogComponent, { width: '30%', data: row });
    return this.show;
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.table.nativeElement
    ); //converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }
}
