import { ElementRef, HostListener, Directive, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Directive({
    selector: 'textarea[autosize]'
})

export class Autosize {
 @HostListener('input',['$event.target'])
  onInput(textArea): void {
    this.adjust();
  }
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public element: ElementRef,
  ){}
  ngAfterContentChecked(): void{
    this.adjust();
  }
  adjust(): void{
    if (isPlatformBrowser(this.platformId)) {
      this.element.nativeElement.style.overflow = 'hidden';
      this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
    }
  }
}
