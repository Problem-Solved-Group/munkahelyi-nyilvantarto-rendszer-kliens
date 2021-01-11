import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { NotificationService } from '../notification.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, protected as: AuthService, public ns: NotificationService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.as.isLoggedIn().pipe(
            take(1),
            map(s => !!s),
            tap(loggedIn => {
                if(!loggedIn) {
                    this.ns.show("Hozzáférés megtagadva!");
                    this.router.navigate(['/']);
                    return false;
                }
            })
        )
    }
}