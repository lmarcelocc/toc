import { Pipe, PipeTransform } from '@angular/core';

/*
 * Slugify a string.
 *
 * Usage:
 *   value | transform:SlugifyPipe
 * Example:
 *   {{ Hello world | SlugifyPipe }}
 * formats to: hello-world
*/
@Pipe({name: 'slugify'})
export class SlugifyPipe implements PipeTransform {

  transform(str: string): string {
    return (typeof str === 'string')
      ? str.toLowerCase().trim()
        .replace(/[^\w\-]+/g, ' ')
        .replace(/\s+/g, '-')
      : str;
  }
}
