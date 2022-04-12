import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ShortUrlService } from '../app/short-url.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {

	showMe = false;
	title = 'URL Shortner';

	  shortMyUrl = new FormGroup({
    longUrl: new FormControl('')
  })
	url: any;
	newShortUrl: any;


	constructor(
    private urlService: ShortUrlService
  ) {}

	shortUrl() {
		console.log(this.shortMyUrl.value)
		this.urlService.shortMyUrlService(this.shortMyUrl.value).subscribe(
			(res:any) => {
				this.url = this.shortMyUrl
				console.log("Success at sending data from front end")
				console.log("Here",res.shortUrl);
				this.newShortUrl = res.shortUrl;
				this.showMe = !this.showMe;
			}
		)
	};
}
