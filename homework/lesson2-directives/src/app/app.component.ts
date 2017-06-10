import { Component } from '@angular/core';
import { MailData } from 'app/models/mail-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    mailDataItems: Array<MailData> = [
        new MailData(1, 'Sherlock Holmes', 'The Hound of the Baskervilles', new Date()),
        new MailData(2, 'John Watson', 'The Sign of the Four', this.getDateMinusMinutes(3)),
        new MailData(3, 'James Moriarty', 'The Valley of Fear', this.getDateMinusMinutes(180)),
        new MailData(4, 'Mrs. Hudson', 'A Scandal in Bohemia', this.getDateMinusMinutes(2880))
    ];

    private getDateMinusMinutes(minutes: number): Date {
        const date = new Date();
        date.setMinutes(date.getMinutes() - minutes);

        return date;
    }
}
