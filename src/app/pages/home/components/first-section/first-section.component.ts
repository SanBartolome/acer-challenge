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
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(300)]),
      transition(':leave', [animate(500)]),
    ]),
  ],
})
export class FirstSectionComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any): void {
    if (window.pageYOffset > 150) {
      const element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      const element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }

  ngOnInit(): void {
    const video = this.elementRef.nativeElement.querySelector(`#video`);
    video.oncanplaythrough = () => {
      video.muted = true;
      video.play();
    };
  }
}
