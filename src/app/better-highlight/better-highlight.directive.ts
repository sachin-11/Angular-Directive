import { OnInit, Directive, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class betterHighlightDirective implements OnInit{

    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
    
    constructor(private element: ElementRef, private renderer: Renderer2) {}

   ngOnInit(){
       this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue')
   }

   @HostListener('mouseenter') mouseover(eventData:Event){
   // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue')  
    this.backgroundColor = this.highlightColor;  
   }

   @HostListener('mouseleave') mouseleave(eventData:Event){
  // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent')   
     this.backgroundColor = this.defaultColor;
   }

}