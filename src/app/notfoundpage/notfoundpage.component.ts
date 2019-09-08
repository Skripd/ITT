import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-notfoundpage',
  templateUrl: './notfoundpage.component.html',
  styleUrls: ['./notfoundpage.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fleeTrigger', [
      state('flee', style({
        transform: `translateX({{randx}}px) translateY({{randy}}px)`
        // left: `{{randx}}px`,
        // top: `{{randy}}px`,
      }), { params: { randx: 0, randy: 0 } }),
      state('fleehack', style({
        transform: `translateX({{randx}}px) translateY({{randy}}px)`
        // left: `{{randx}}px`,
        // top: `{{randy}}px`,
      }), { params: { randx: 0, randy: 0 } }),
      state('fadeIframe', style({
        opacity: `1`
      })),
      transition('* => *', animate('500ms ease-out')),
    ])
  ]
})
export class NotfoundpageComponent implements OnInit, AfterViewInit {

  constructor() { }

  flee: string;
  fade: string;

  showIframe: boolean;

  animationConfig: any;

  ngOnInit() {

  }

  ngAfterViewInit() {
    // console.log(JSON.stringify());
  }

  onFlee(): void {
    this.setRandomAnimationConfig();
    this.showIframe = true;
    this.flee = this.flee === 'flee' ? 'fleehack' : 'flee';
    this.fade = 'fadeIframe';
  }

  onFleeReset(): void {
    // this.flee = null;
  }

  setRandomAnimationConfig(): void {
    this.animationConfig = {
      value: this.flee === 'flee' ? 'fleehack' : 'flee',
      params: {
        randx: (Math.random() > 0.5) ? -Math.floor(Math.random() * (1609 - 100)) / 2 : Math.floor(Math.random() * (1609 - 100)) / 2,
        randy: (Math.random() > 0.5) ? -Math.floor(Math.random() * (909 - 100)) / 2 : Math.floor(Math.random() * (909 - 100)) / 2,
      }
    };

    // this.flee = this.flee === 'flee' ? 'fleehack' : 'flee';

    // console.log(`CONFIG::\n${JSON.stringify(this.animationConfig)}\n\nSIZE::${parent.innerWidth}:${parent.innerHeight}`);
  }

}
