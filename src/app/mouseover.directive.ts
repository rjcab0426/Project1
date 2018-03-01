import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMouseover]'
})
export class MouseoverDirective {

  constructor(private el: ElementRef) { }
  
    @HostListener('mouseenter', ['$event'])
    OnMouseEnter(event: any) {
      const text = event.target.innerText;
      switch (text) {
        case '':          
          this.el.nativeElement.style.backgroundColor = 'yellow';
          break;
        case '':
          this.el.nativeElement.style.backgroundColor = 'yellow';
          break;
        case '':
          this.el.nativeElement.style.backgroundColor = 'blue';
          break;
        case '':
          this.el.nativeElement.style.backgroundColor = 'blue';
          break;
        case '':
          this.el.nativeElement.style.backgroundColor = 'green';
          break;
        default:
          this.highlight(null);
          break;
      }
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
  
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  
}
