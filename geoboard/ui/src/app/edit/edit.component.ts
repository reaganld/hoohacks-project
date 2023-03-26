import { Component } from '@angular/core';
declare var Painterro: any;
import mergeImages from 'merge-images';
import * as $ from 'jquery'
import { ImageService } from '../image/image.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent {
  constructor(private imageService : ImageService) {

  }
//backplateImgUrl
  images : number[] = []
  coords = "";
  ngOnInit() {
    this.coords = this.getLocation();
    for (let i = 0; i < 25; i++) {
      this.images[i] = i;
    }

    $( document ).ready(function() {
      $('#img-12').on('click', function () {
        let paintArea = Painterro({
          backgroundFillColorAlpha: 0.0,
          defaultSize: '128x128',
          defaultTool: 'brush',
          hiddenTools: ['crop', 'rotate', 'resize','open','bucket','text','select','arrow','pixelize','settings','rect'],
          toolbarPosition: 'top',
          saveHandler: function (image, done) {
            // of course, instead of raw XHR you can use fetch, jQuery, etc
            let str:string = image.asDataURL.toString();
            const imageName = 'test111';
            const byteString = window.atob(str.split(",")[1]);
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const int8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
              int8Array[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([int8Array], { type: 'image/png' });    
            const imageFile = new File([blob], imageName, { type: 'image/png' });
            this.imageService.addImage(this.coords, imageFile);

            // var xhr = new XMLHttpRequest();
            // xhr.open("POST", "http://127.0.0.1:5000/save-as-base64/");
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.send(JSON.stringify({
            //   image: image.asDataURL()
            // }));
            // xhr.onload = function (e) {
            //   // after saving is done, call done callback
            //   done(true);
            // }
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
       return '';
    }
    return '';
  }

  getXY(Longitude: number, Latitude: number){
    let y = Math.floor((Latitude - 38) * 100);
    let x = Math.floor((Longitude + 78) * 100);
    return "".concat(String(x), ',', String(y));
  }
}

