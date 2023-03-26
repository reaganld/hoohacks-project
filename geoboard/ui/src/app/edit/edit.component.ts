import { Component } from '@angular/core';
declare var Painterro: any;
import mergeImages from 'merge-images';
import * as $ from 'jquery'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent {
//backplateImgUrl
//initText
images : number[] = []
  ngOnInit() {
    for (let i = 0; i < 25; i++) {
      this.images[i] = i;
    }
    console.log(this.getLocation());

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
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://127.0.0.1:5000/save-as-base64/");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({
              image: image.asDataURL()
            }));
            xhr.onload = function (e) {
              // after saving is done, call done callback
              done(true); //done(true) will hide painterro, done(false) will leave opened
            }
          },
        });
        paintArea.show();
      
      })
    });
    
    
  //   mergeImages(['assets/body.png', 'assets/eyes.png', 'assets/mouth.png'])
  // .then(b64 => $('img').attr("src",b64));
  }

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          this.getXY(longitude, latitude);
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  getXY(Longitude: number, Latitude: number){
    let y = Math.floor((Latitude - 38) * 100);
    let x = Math.floor((Longitude + 78) * 100);
    console.log(x);
    console.log(Longitude);
    //Call API
  }
}

