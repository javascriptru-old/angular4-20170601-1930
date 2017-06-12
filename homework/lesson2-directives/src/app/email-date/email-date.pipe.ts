import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'emailDate'
})
export class EmailDatePipe implements PipeTransform {
    private diffMinutes(date1: Date, date2: Date): number {
        return Math.abs(Math.round(((date1.getTime() - date2.getTime()) / 1000) / 60));
    }

    transform(value: any, args?: any): any {
        const dm = this.diffMinutes(value, new Date());

        if (dm < 1.0) { return 'Now'; }
        if (dm > 1.0 && dm < 60) { return `${dm} minute(s) ago`; }
        if (dm > 60 && dm < (60 * 24)) {
            const hours = Math.round(dm / 60);
            return `${hours} hour(s) ago`;
        }
        if (dm > (60 * 24)) {
            const days = Math.round(dm / (60 * 24));
            return `${days} day(s) ago`;
        }
    }
}
