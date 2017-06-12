import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

	@Input() mail;
	@Output() onDeleted = new EventEmitter<number>();

	timeCreate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() { 
  	let diff = (new Date().getTime() - this.timeCreate.getTime()) / 1000;
  	console.log(`Время жизни компонента ${diff} секунд`); 
  }

  deleteMail(id) {
  	this.onDeleted.emit(id);
  }

}
