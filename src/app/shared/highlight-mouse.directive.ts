import { Directive,HostListener,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,'background-color','yellow'
    );
  }

  @HostListener('mouseleave') onMouseLeave(){
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,'background-color','white'
    );
  }

  constructor(
    private _elementRef : ElementRef,
    private _renderer: Renderer) { 
    


  }

}
