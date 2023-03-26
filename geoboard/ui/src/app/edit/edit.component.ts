import { Component } from '@angular/core';
declare var Painterro: any;
import mergeImages from 'merge-images';
import * as $ from 'jquery'
import { ImageService } from '../image/image.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent {
  constructor(private imageService: ImageService) {}
  images : number[] = []
  coords = "";
  ngOnInit() {
    this.getLocation();
    for (let i = 1; i < 5; i++) {
      this.images[i] = i;
    }

    $( document ).ready(function() {
      $('#22').on('click', function () {
        let paintArea = Painterro({
          backgroundFillColorAlpha: 0.0,
          defaultSize: '128x128',
          backplateImgUrl: 'assets/Default/2,2.png',
          defaultTool: 'brush',
          hiddenTools: ['crop', 'rotate', 'resize','open','bucket','text','select','arrow','pixelize','settings','rect'],
          toolbarPosition: 'top',
          saveHandler: function (image, done) {
            // of course, instead of raw XHR you can use fetch, jQuery, etc
            let str:string = image.asDataURL().toString();
            const imageName = 'test111';
            const byteString = window.atob(str.split(",")[1]);
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const int8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
              int8Array[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([int8Array], { type: 'image/png' });    
            const imageFile = new File([blob], imageName, { type: 'image/png' });
            
            this.imageService.postImage(this.coords, imageFile);
            done(true);
          },
        });
        paintArea.show();
      
      })
    });
    
  //   mergeImages(['assets/body.png', 'assets/eyes.png', 'assets/mouth.png'])
  // .then(b64 => $('img').attr("src",b64));
  }

  getLocation(): string {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          return this.getXY(longitude, latitude);
        });
    } else {
       console.log("No support for geolocation")
    }
    return '';
  }

  getXY(Longitude: number, Latitude: number) {
    let y = Math.floor((Latitude - 38) * 100);
    let x = Math.floor((Longitude + 78) * 100);
    console.log("".concat(String(x), ',', String(y)))
    this.coords = "".concat(String(x), ',', String(y));
  }
}

var test;
