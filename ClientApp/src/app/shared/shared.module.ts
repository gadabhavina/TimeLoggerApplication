import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from "./services/dialog.service";

const MAT_MODULES = [
  MatRadioModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, MAT_MODULES],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    DialogService],
  exports: []
})
export class SharedModule { }
