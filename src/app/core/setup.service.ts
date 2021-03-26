import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
  private screenSize$: Observable<number> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]) // observe for mobile menu
    .pipe(
      tap(console.log),
      map((result: BreakpointState) => {
        switch (true) {
          case this.breakpointObserver.isMatched(Breakpoints.XSmall):
            return 1;
          case this.breakpointObserver.isMatched(Breakpoints.Small):
            return 2;
          case this.breakpointObserver.isMatched(Breakpoints.Medium):
            return 3;
          case this.breakpointObserver.isMatched(Breakpoints.Large):
            return 4;
          case this.breakpointObserver.isMatched(Breakpoints.XLarge):
            return 5;
        }
        return 6;
      }),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) { }

  screenSizeObservable() {
    return this.screenSize$;
  }
}
