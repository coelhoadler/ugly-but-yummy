import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'floatToDecimal'
})
export class FloatToDecimalPipe implements PipeTransform {

  public transform(value: any, truncate = 2, addDots = true): string {
    let newValue = parseFloat(value).toFixed(truncate).toString().replace('.',',');
    if (addDots) {
      const dotsRegex = new RegExp(`\\B(?=(\\d{3})+(?!\\d)${truncate > 0 ? ',' : ''})`, 'g');
      newValue = newValue.replace(dotsRegex, '.');
    }
    return newValue;
  }

}
