import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
	mailList = [];
	countMail = 0;

  constructor() {
  	this.mailList = [{
  		id: 1,
			topic: "from Ivan",
			date: new Date("2017-06-10 09:00:00"),
			from: "ivanIvanov@yandex.ru",
			text: "I send you a price"
		}, {
			id: 2,
			topic: "from Alice",
			date: new Date("2017-06-11 09:00:00"),
			from: "alice@mail.ru",
			text: "Hi. I miss you"
		}, {
			id: 3,
			topic: "from Maria",
			date: new Date("2017-06-12 09:00:00"),
			from: "maria@mail.ru",
			text: "Hi..."
		}, {
			id: 4,
			topic: "from Alex",
			date: new Date("2017-06-12 15:00:00"),
			from: "alex@yandex.ru",
			text: "Hello!."
		}];

		this.countMail = this.mailList.length;

		setInterval(() => {
			for (let i = 1; i <= this.getRandomInRange(1,2); i++) {
				this.countMail++;
				this.mailList.push({
					id: this.countMail,
	  			topic: "new mail" + this.countMail,
	  			date: new Date(),
	  			from: "random@yandex.ru",
	  			text: "again new mail"
	  		});
			}
  	}, this.getRandomInRange(3, 5) * 1000); 
  }

  ngOnInit() {
  }

  getRandomInRange(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	onDeleted(id) {
		let index = this.mailList.findIndex(item => item.id == id);
		this.mailList.splice(index, 1);
	}
}
