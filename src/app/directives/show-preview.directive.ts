import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

export interface Position {
  width: string;
  height: string;
  left: string;
  top: string;
}

@Directive({
  selector: '[showPreview]'
})
export class ShowPreviewDirective {
  constructor(private element: ElementRef<HTMLElement>) { }
  @Output() showPreview = new EventEmitter<Position>();
  @HostListener('click')
  onClick(): void {
    let {
      offsetWidth: width,
      offsetHeight: height, 
      offsetTop: top,
      offsetLeft: left } = this.element.nativeElement ;
    this.showPreview.emit(
      {
        width: width + 'px',
        height: height + 'px',
        top: top + 'px',
        left: left + 'px'
      })
      
  }
    
  
    

}

  


