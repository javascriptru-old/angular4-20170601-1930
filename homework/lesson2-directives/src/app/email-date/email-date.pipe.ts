import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'emailDate'
})
export class EmailDatePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        console.log(value);
        return value;
    }

}
