import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedText = '';

  intercept(): void {
    chrome.tabs.executeScript( { code: 'window.getSelection().toString();' }, selectedText => this.selectedText = selectedText[0]);
  }
}
