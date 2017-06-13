import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.security.toLowerCase().indexOf(input) > -1;
                //let a = this.el.indexOf(input) >-1;
                //return b.indexOf(input)>-1;
            })
        }
        return value;
    }
}
