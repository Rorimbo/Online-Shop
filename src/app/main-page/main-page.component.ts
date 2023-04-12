import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsDialogComponent } from '../news-dialog/news-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(public dialog: MatDialog) {}

  newsDialog() {
    const dialogRef = this.dialog.open(NewsDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
