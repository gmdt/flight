import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LangService } from './services/lang.service';

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private langService: LangService) {}
  getTranslation(lang: string): Observable<any> {
    return this.langService.getLabel(lang);
  }
}
