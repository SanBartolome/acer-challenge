import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstSectionComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const video = this.elementRef.nativeElement.querySelector(`#video`);
    video.oncanplaythrough = () => {
      video.muted = true;
      video.play();
    };
  }
}
