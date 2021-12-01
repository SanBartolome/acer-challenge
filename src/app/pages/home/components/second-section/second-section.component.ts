import {
  animate,
  group,
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
      transition('normal => scrolled', animate('200ms ease-in')),
    ]),
    trigger('slideInOut', [
      state(
        'scrolled',
        style({
          'max-width': '1400px',
          opacity: '1',
          visibility: 'visible',
        })
      ),
      state(
        'normal',
        style({
          'max-width': '0px',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      transition('scrolled => normal', [
        group([
          animate(
            '400ms ease-in-out',
            style({
              opacity: '0',
            })
          ),
          animate(
            '600ms ease-in-out',
            style({
              'max-width': '0px',
            })
          ),
          animate(
            '700ms ease-in-out',
            style({
              visibility: 'hidden',
            })
          ),
        ]),
      ]),
      transition('normal => scrolled', [
        group([
          animate(
            '1ms ease-in-out',
            style({
              visibility: 'visible',
            })
          ),
          animate(
            '600ms ease-in-out',
            style({
              'max-width': '1400px',
            })
          ),
          animate(
            '800ms ease-in-out',
            style({
              opacity: '1',
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class SecondSectionComponent implements OnInit {
  state = 'normal';

  constructor(public el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + 500;

    if (scrollPosition >= componentPosition) {
      this.state = 'scrolled';
    } else {
      this.state = 'normal';
    }
  }

  ngOnInit(): void {}

  openProductInShop(): void {
    window.open('https://bit.ly/Nitro5_IntelCorei7');
  }

  openProductInShop2(): void {
    window.open('https://bit.ly/AcerNitro5');
  }
}
