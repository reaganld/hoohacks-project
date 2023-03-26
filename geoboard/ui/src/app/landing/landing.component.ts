import { Component } from '@angular/core';
import mergeImages from 'merge-images';
import { ImageService } from '../image/image.service';
import { Injectable } from '@angular/core';
import * as $ from 'jquery'
import { Subscription } from 'rxjs';
import { Image } from '../image/image';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})

export class LandingComponent {
    images: Image[] = [];
    private imageSubscription!: Subscription;

constructor(private imageService: ImageService) {}


  ngOnInit() {
  
    // mergeImages(['assets/body.png', 'assets/eyes.png', 'assets/mouth.png'])
    // .then( (b64) => {
    //   let str:string = b64;
    //   const imageName = 'test111';
    //   const byteString = window.atob(str.split(",")[1]);
    //   const arrayBuffer = new ArrayBuffer(byteString.length);
    //   const int8Array = new Uint8Array(arrayBuffer);
    //   for (let i = 0; i < byteString.length; i++) {
    //     int8Array[i] = byteString.charCodeAt(i);
    //   }
    //   const blob = new Blob([int8Array], { type: 'image/png' });    
    //   const imageFile = new File([blob], imageName, { type: 'image/png' });
    //   this.imageService.addImage("0,0", imageFile);
    // });

    // this.imageService.getImages();
    // this.imageSubscription = this.imageService
    //     .getImagesStream()
    //     .subscribe((images: Image[]) => {
    //         this.images = images;
    //     });
    setTimeout(() => {  this.loop(); }, 1000);

  }

  loop() {
      let id = Math.floor(Math.random() * 8 + 1);
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      $('#'.concat(String(id))).css("background-color", '#'.concat(randomColor));
      setTimeout(() => {  this.loop() }, 1000);
  }
}
