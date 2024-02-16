import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { DialogDataModel } from '../../models/dialog-data.model'
import { MatTableDataSource } from '@angular/material/table'
import { SelectionModel } from '@angular/cdk/collections'

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
  Available: number
}

@Component({
  selector: 'app-new-booking-dialog',
  templateUrl: './new-booking-dialog.component.html',
  styleUrls: ['./new-booking-dialog.component.scss'],
})
export class NewBookingDialogComponent implements OnInit {

  displayedColumns: string[] = []
  displayedSearchColumns: string[] = [];

  public dataSourceForTable: MatTableDataSource<BookingLine>;
  public dataSourceForSearchTable: MatTableDataSource<HireableItem>;

  private allHireableItems: HireableItem[] = [
    { Code: '001', Description: 'Dining table', Branch: 'Avonhead', Available: 58 },
    { Code: '002', Description: 'Dining chair', Branch: 'Avonhead', Available: 448 },
    { Code: '003', Description: 'Cutlery sets', Branch: 'Sydenham', Available: 514 },
    { Code: '004', Description: 'Placemats', Branch: 'Sydenham', Available: 475 },
    { Code: '005', Description: 'Lectern', Branch: 'Sydenham', Available: 0 },
    { Code: '006', Description: '14m Red carpet', Branch: 'Avonhead', Available: 3 },
    { Code: '007', Description: '2m White Ribbons', Branch: 'Avonhead', Available: 1022 },
    { Code: '008', Description: '2m Pale Pink Ribbons', Branch: 'Avonhead', Available: 922 },
    { Code: '009', Description: 'Dinner plates', Branch: 'Sydenham', Available: 740 },
    { Code: '010', Description: 'Side plates', Branch: 'Avonhead', Available: 871 },
    { Code: '011', Description: 'Deck chairs', Branch: 'Avonhead', Available: 58 },
    { Code: '012', Description: '45sqm Marqee', Branch: 'Avonhead', Available: 2 },
    { Code: '013', Description: '90sqm Marqee', Branch: 'Sydenham', Available: 1 },
    { Code: '014', Description: 'Blue glass vase', Branch: 'Sydenham', Available: 32 },
    { Code: '015', Description: 'Yellow glass vase', Branch: 'Sydenham', Available: 0 },
    { Code: '016', Description: '10m White carpet', Branch: 'Avonhead', Available: 2 },
    { Code: '017', Description: 'Speaker sound system', Branch: 'Avonhead', Available: 2 },
    { Code: '018', Description: 'Speaker sound system', Branch: 'Sydenham', Available: 1 },
    { Code: '019', Description: 'White napkin', Branch: 'Sydenham', Available: 212 },
    { Code: '020', Description: 'Blue napkin', Branch: 'Avonhead', Available: 142 },
  ];

  keywords = '';
  selection: SelectionModel<HireableItem>;
  bookingStart: string;
  bookingEnd: string;
  quantity: string;

  selectedItem: HireableItem = {
    Code: '',
    Description: '',
    Branch: '',
    Available: 0,
  };

  constructor(public dialogRef: MatDialogRef<NewBookingDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogDataModel) {
  }

  getImageNumber(code: string) {
    return parseInt(code) % 3 + 1;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceForSearchTable.data.length;
    return numSelected == numRows;
  }

  onBookClicked() {
    let existingItems = this.dataSourceForTable.data;

    let newItem = {
      Code: this.selectedItem.Code,
      Description: this.selectedItem.Description,
      Branch: this.selectedItem.Branch,
      Quantity: parseInt(this.quantity),
      StartDate: new Date(this.bookingStart),
      EndDate: new Date(this.bookingEnd),
    };

    this.dataSourceForTable = new MatTableDataSource([...existingItems, newItem]);
  }

  toggleAllRows() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourceForSearchTable.data.forEach(row => this.selection.select(row));
  }

  ngOnInit(): void {
    this.dataSourceForTable = new MatTableDataSource([]);
    this.dataSourceForSearchTable = new MatTableDataSource(this.allHireableItems);

    this.setDisplayedColumns()

    const initialSelection = [];
    const allowMultiSelect = false;
    this.selection = new SelectionModel<HireableItem>(allowMultiSelect, initialSelection);

    this.selection.changed.subscribe({
      next: this.setHireableItem.bind(this),
      error: this.handleError.bind(this)
    });
  }

  setHireableItem(event: any): void {
    if (event.added.length === 1) {
      let itemAdded = event.added[0];
      this.selectedItem = { ...itemAdded };
    } else {
      this.selectedItem = null;
    }
  }

  handleError(error: any): void {
  }

  private setDisplayedColumns(): void {
    this.displayedColumns = ['Code', 'Description', 'Branch', 'Quantity', 'StartDate', 'EndDate', 'Actions'];
    this.displayedSearchColumns = ['select', 'Code', 'Description', 'Branch', 'Available'];
  }

  onSearchClicked() {
    let items = this.allHireableItems.filter(x => x.Description.toLocaleLowerCase().includes(this.keywords.toLocaleLowerCase()));
    this.dataSourceForSearchTable = new MatTableDataSource(items);
  }

  onDelete(element) {
    let newItems = this.dataSourceForTable.data.filter(x => x !== element);
    this.dataSourceForTable = new MatTableDataSource(newItems);
  }
}
