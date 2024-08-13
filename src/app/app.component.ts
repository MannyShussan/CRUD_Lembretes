import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostBinding('class') className = '';

  constructor(private overlay: OverlayContainer) { }

  public trocarEstilo(dark: boolean) {
    this.className = !dark ? 'darkMode' : '';
    dark ? this.overlay.getContainerElement().classList.remove('darkMode') : this.overlay.getContainerElement().classList.add('darkMode');
  }

  ngOnInit(): void {

  }
}
