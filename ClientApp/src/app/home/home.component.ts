import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popups/popups.component';
import { DialogService } from '../shared/services/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private dialogService: DialogService) {

  }
  public ngOnInit(): void {
    this.openPopupModal();
  }

  private openPopupModal() {
    this.dialogService.open(PopupComponent, {
      autoFocus: false,
      disableClose: true,
      width:  '50vw',
      height: '90vh',
      data: {
      }
    });
  }
  
}
