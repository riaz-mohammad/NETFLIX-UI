import { Directive, ElementRef, EventEmitter,HostListener, Output} from '@angular/core';



@Directive({
  selector: '[activeButton]'
})
export class ActiveButtonDirective {
  @Output() active = new EventEmitter<string>();
  constructor(private element: ElementRef<HTMLElement>) {}

  @HostListener('click')
  onClick(): void {
    let position = this.element.nativeElement.offsetLeft + 'px';
    this.active.emit(position);    
  }

}
