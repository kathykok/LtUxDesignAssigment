import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { DialogDataModel } from '../../models/dialog-data.model'


@Component({
  selector: 'app-new-booking-dialog',
  templateUrl: './new-booking-dialog.component.html',
  styleUrls: ['./new-booking-dialog.component.scss'],
})
export class NewBookingDialogComponent {

  constructor(public dialogRef: MatDialogRef<NewBookingDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogDataModel) {
  }
}
