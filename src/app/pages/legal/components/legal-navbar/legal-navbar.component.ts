import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-legal-navbar',
  templateUrl: './legal-navbar.component.html',
  styleUrls: ['./legal-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalNavbarComponent implements OnInit {
  @Output() currentTab = new EventEmitter<number>();
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  changeCurrentTab(tabNumber: number): void {
    this.currentTab.emit(tabNumber);
    for (let i = 0; i < 3; i++) {
      if (i === tabNumber) {
        const tab = this.elementRef.nativeElement.querySelector(`#tab${i}`);
        this.renderer.addClass(tab, 'active');
      } else {
        const tab = this.elementRef.nativeElement.querySelector(`#tab${i}`);
        this.renderer.removeClass(tab, 'active');
      }
    }
  }
}
