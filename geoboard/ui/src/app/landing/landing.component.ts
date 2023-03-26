import { Component } from '@angular/core';
import mergeImages from 'merge-images';
import { ImageService } from '../image/image.service';
import { Image } from '../image/image';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})

export class LandingComponent {

constructor(private imageService: ImageService) {}

    image!: Image;
    private imageSubscription: Subscription = new Subscription;

    ngOnInit() {
     

    }
}
