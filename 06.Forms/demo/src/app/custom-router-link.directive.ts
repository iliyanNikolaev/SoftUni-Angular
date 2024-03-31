import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appCustomRouterLink]'
})
export class CustomRouterLinkDirective implements OnInit {

  @Input() appCustomRouterLink: string = '';
  
  constructor(private elRef: ElementRef, private renderer: Renderer2, private router: Router) { }
  
  ngOnInit(): void {
    this.renderer.listen(this.elRef.nativeElement,'click' , this.clickCallback.bind(this))
  }

  clickCallback(e: MouseEvent) {
    console.log(e);
    // navigate to appCustomRouterLink
    console.log(this.appCustomRouterLink);
  }
}
