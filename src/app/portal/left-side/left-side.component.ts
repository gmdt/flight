import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css'],
})
export class LeftSideComponent implements OnInit {
  language!: FormGroup;
  langs!: string[];
  constructor(
    private readonly translateService: TranslateService,
    private fb: FormBuilder,
    private readonly sharedService: SharedService,
    private readonly router: Router
  ) {
    translateService.addLangs(['en_US', 'fr_FR']);
  }
  ngOnInit(): void {
    this.langs = this.translateService.getLangs();
    this.language = this.fb.group({
      language: [null],
    });
    const toSelect = this.langs.find(
      (c) => c == localStorage.getItem('language')
    );
    this.language.get('language')?.setValue(toSelect);
  }
  changeLang(language: string) {
    localStorage.setItem('language', language);
    this.translateService.use(language);
    this.sharedService.selectedLanguage.next(language.substring(0, 2));
  }
  bookmarksPage() {
    this.router.navigate(['bookmarks']);
  }
  flightsPage() {
    this.router.navigate(['flights']);
  }

  synthesisFlightsPage() {
    this.router.navigate(['synthesis']);
  }
}
