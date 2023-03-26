import { Component } from '@angular/core';
import mergeImages from 'merge-images';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent {
  ngOnInit() {
  mergeImages(['assets/body.png', 'assets/eyes.png', 'assets/mouth.png'])
  .then(b64 => $('img').attr("src",b64));
  }
}
