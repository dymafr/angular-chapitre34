import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
  public users: any[] = [];
  public isBrowser = isPlatformBrowser(this.plateformId);

  constructor(
    public httpClient: HttpClient,
    @Inject(PLATFORM_ID) private plateformId: Object
  ) {
    this.httpClient
      .get('https://randomuser.me/api/?results=100')
      .subscribe((res: any) => {
        this.users = res.results;
      });

    if (this.isBrowser) {
      localStorage.getItem('item');
    }
  }
}
