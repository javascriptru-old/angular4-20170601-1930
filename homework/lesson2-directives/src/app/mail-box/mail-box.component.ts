import { Component, Input } from '@angular/core';
import { MailData } from 'app/models/mail-data';

@Component({
    selector: 'app-mail-box',
    templateUrl: './mail-box.component.html',
    styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent {
    @Input() mailDataItems: Array<MailData> = [];
}
