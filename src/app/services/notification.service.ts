import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

/**
 * Provides an abstract wrapper around showing a MatSnackbar
 * notification based on global environment or API provided
 * configuration.
 *
 * This class Listens for the authentication state to change.
 * Once the state becomes authenticated, retrieve the startup
 * configuration from the API service. Once de-authenticated
 * set the _params to undefined and unsubscribe.
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService implements OnDestroy {
  private _configState: Subscription;
  constructor(private toast: MatSnackBar) {}

  ngOnDestroy() {
    this._configState.unsubscribe();
  }

  show(message: string, buttonLabel: string = 'OK'): MatSnackBarRef<any> {
    const toastTimeout = 8000;
    if (toastTimeout > 0) {
      return this.toast.open(message, buttonLabel, {
        duration: toastTimeout
      });
    } else {
      return this.toast.open(message, buttonLabel, {});
    }
  }
}
