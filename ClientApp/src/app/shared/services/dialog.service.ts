import { Injectable, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, Subject, Subscription } from 'rxjs';
import { ComponentType } from "@angular/cdk/portal";


@Injectable({
  providedIn: 'root'
})

export class DialogService implements OnDestroy {

  static readonly defaultDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '95vw',
    maxHeight: '95vh'
  };

  private subscription: Subscription | undefined;
  constructor(
    private dialogService: MatDialog,
    private router: Router
  ) { }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public open<T, D = any, R = any>(type: ComponentType<T>, configuration?: MatDialogConfig<D>): Observable< R|undefined> {
    const dialogRef = this.dialogService.open<T, D, R>(type, configuration);
    return dialogRef.afterClosed();
  }

}
