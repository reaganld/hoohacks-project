import { Component } from '@angular/core';
import mergeImages from 'merge-images';
import { ImageService } from '../image/image.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})

export class LandingComponent {

constructor(private imageService: ImageService) {}

  ngOnInit() {
  
  mergeImages(['assets/body.png', 'assets/eyes.png', 'assets/mouth.png'])
  .then( (b64) => {
    let str:string = b64;
    const imageName = 'test111';
    // console.log(b64);

    let t = str.split(",")[1];
    console.log(t)
    const byteString = window.atob(t);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });    
    const imageFile = new File([blob], imageName, { type: 'image/png' });
    this.imageService.addImage("0","0", imageFile);
});
  console.log("try");
  const filename = "test1";
  const mimeType = "image/png"
//   const binaryString = atob(string);

  console.log("actually worked maybe");
  }
}
