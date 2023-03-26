import { Component } from '@angular/core';
import mergeImages from 'merge-images';
import * as $ from 'jquery'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent {
  ngOnInit() {
    mergeImages(['assets/body.png', 'assets/eyes.png', 'assets/mouth.png'])
  .then(b64 => $('img').attr("src",b64));
  }
}

