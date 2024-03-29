import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen(this.elRef.nativeElement, 'mouseenter', this.mouseEnterHandler.bind(this));
    this.renderer.listen(this.elRef.nativeElement, 'mouseleave', this.mouseLeaveHandler.bind(this));
  }

  // setting styles

  // mouseEnterHandler(e: MouseEvent) {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background', 'white')
  //   this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black')
  //   this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer')
  // }
  // mouseLeaveHandler(e: MouseEvent) {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background', 'initial')
  //   this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
  // }


//setting classes

mouseEnterHandler(e: MouseEvent) {
  this.renderer.addClass(this.elRef.nativeElement, 'hover')
  this.renderer.removeClass(this.elRef.nativeElement, 'not-hover')
}
mouseLeaveHandler(e: MouseEvent) {
  this.renderer.addClass(this.elRef.nativeElement, 'not-hover')
  this.renderer.removeClass(this.elRef.nativeElement, 'hover')
}
}
