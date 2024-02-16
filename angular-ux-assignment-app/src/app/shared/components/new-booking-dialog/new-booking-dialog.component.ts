import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { DialogDataModel } from '../../models/dialog-data.model'
import { MatTableDataSource } from '@angular/material/table'

class BookingLine {
  Code: string
  Description: string
  Branch: string
  Quantity: number
  StartDate: Date
  EndDate: Date
}

class HireableItem {
  Code: string
  Description: string
  Branch: string
  Quantity: number
  StartDate: Date
  EndDate: Date
}

@Component({
  selector: 'app-new-booking-dialog',
  templateUrl: './new-booking-dialog.component.html',
  styleUrls: ['./new-booking-dialog.component.scss'],
})
export class NewBookingDialogComponent implements OnInit {

  displayedColumns: string[] = []
  displayedSearchColumns: string[] = [];

  public dataSourceForTable: MatTableDataSource<BookingLine>
  public dataSourceForSearchTable: MatTableDataSource<HireableItem>

  constructor(public dialogRef: MatDialogRef<NewBookingDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogDataModel) {
  }

  ngOnInit(): void {
    this.dataSourceForTable = new MatTableDataSource([]);

    this.setDisplayedColumns()
  }

  private setDisplayedColumns(): void {
    this.displayedColumns = ['Code', 'Description', 'Branch', 'Quantity', 'StartDate', 'EndDate', 'Actions'];
    this.displayedSearchColumns = ['Code', 'Description', 'Branch', 'Available'];
  }

  onDelete(element) {
    alert('delete not implemented yet');
  }
}
