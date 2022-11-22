import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'flight-app-front';
  constructor(
    private readonly translateService: TranslateService,
    private readonly sharedService: SharedService,
    private readonly dateAdapter: DateAdapter<Date>
  ) {
    this.sharedService.selectedLanguage.subscribe((locale) => {
      dateAdapter.setLocale(locale);
    });
    const locale = localStorage.getItem('language') ?? 'en_US';
    this.translateService.use(locale);
  }
}
