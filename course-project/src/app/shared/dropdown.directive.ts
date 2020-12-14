import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
  }
)
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleOpen(eventData: Event) {
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event']) toggleOpen(eventData: Event) {
    this.isOpen = this.elRef.nativeElement.contains(eventData.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}
}
