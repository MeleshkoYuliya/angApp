import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, //None, Native
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragrph: ElementRef;
  constructor() {
    console.log('Constructor called!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges called!');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInint');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text content of paragraph ' + this.paragrph.nativeElement.textContent,
    );
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log(
      'Text content of paragraph ' + this.paragrph.nativeElement.textContent,
    );
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
