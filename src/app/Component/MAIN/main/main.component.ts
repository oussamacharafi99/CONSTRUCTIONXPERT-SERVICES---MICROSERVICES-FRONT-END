import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  @ViewChild('container', { static: true }) container!: ElementRef;

  onSignUpClick(): void {
    this.container.nativeElement.classList.add('right-panel-active');
  }

  onSignInClick(): void {
    this.container.nativeElement.classList.remove('right-panel-active');
  }
}
