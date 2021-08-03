import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('scrollAnimation', [
      state(
        'scrolled',
        style({
          opacity: 1,
        })
      ),
      state(
        'normal',
        style({
          opacity: 0,
        })
      ),
      transition('scrolled => normal', animate('500ms ease-out')),
      transition('normal => scrolled', animate('250ms ease-in')),
    ]),
  ],
})
export class SecondSectionComponent implements OnInit {
  state = 'normal';

  constructor(public el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + 700;

    if (scrollPosition >= componentPosition) {
      this.state = 'scrolled';
    } else {
      this.state = 'normal';
    }
  }

  ngOnInit(): void {}

  openProductInShop(): void {
    window.open('http://bit.ly/Acerchallenge_peru');
  }
}
