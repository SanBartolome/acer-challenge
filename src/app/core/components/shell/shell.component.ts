import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  isCurrentRouteNotHome: Observable<boolean>;

  constructor(private router: Router) {
    this.isCurrentRouteNotHome = this.router.events.pipe(
      filter((event: NavigationEnd) => event instanceof NavigationEnd),
      map((event) => event.url !== '/')
    );
  }

  ngOnInit(): void {}
}
