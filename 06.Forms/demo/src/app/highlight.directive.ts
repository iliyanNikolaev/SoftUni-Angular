import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

type VoidFn = () => void

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {
  // @HostListener('click', ['$event']) clickEventCallback(e: MouseEvent) {
  //   console.log('click', e)
  // }
  unsubEventArr: VoidFn[] = [];

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void { 
    const clickEvent = this.renderer.listen(this.elRef.nativeElement, 'click', this.clickEventCallback.bind(this));
    this.unsubEventArr.push(clickEvent)
  }

  ngOnDestroy(): void {
    this.unsubEventArr.forEach(fn => fn());
  }

  clickEventCallback(e: MouseEvent) {
      console.log('click', e)
  }
}
