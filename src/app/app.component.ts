import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'page 1', url: '/page1', icon: 'trash' },
    { title: 'page 2', url: '/page2', icon: 'trash' },
    { title: 'page Image', url: '/pageImage', icon: 'trash' },
  ];
  constructor() {}
}
