import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'i18nDate',
})
export class I18nDatePipe implements PipeTransform {
  constructor(private readonly translateService: TranslateService) {}

  transform(value: any, ...args: any[]): any {
    return new DatePipe(this.translateService.currentLang).transform(value);
  }
}
