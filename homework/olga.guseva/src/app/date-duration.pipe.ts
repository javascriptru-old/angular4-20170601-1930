import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDuration'
})
export class DateDurationPipe implements PipeTransform {

  transform(value: Date, args?: any): any {
  	let diff = (new Date().getTime() - value.getTime()) / (3600 * 1000);

  	if (diff > 24) {
  		return Math.trunc(diff / 24) + " days ago";
  	}

  	if (diff > 1) {
  		return Math.trunc(diff) + " hours ago";
  	}

  	return "Less than an hour ago";
  }

}
