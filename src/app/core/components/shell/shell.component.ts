import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  isCurrentRouteNotHome: Boolean;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: NavigationEnd) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.isCurrentRouteNotHome = event.url !== '/';
      });
  }

  ngOnInit(): void {}
}
