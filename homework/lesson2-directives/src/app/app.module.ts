import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { EmailDatePipe } from './email-date/email-date.pipe';

@NgModule({
    declarations: [
        AppComponent,
        MailBoxComponent,
        EmailDatePipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
