import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

import { Image } from "./image";
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
    providedIn: "root",
})
export class ImageService {
    private images: Image[] = [];
    private images$ = new Subject<Image[]>();
    readonly url = "http://localhost:3000/api/images";

    constructor(private http: HttpClient) {}

    getImages() {
        this.http
            .get<{ images: Image[] }>(this.url)
            .pipe(
            map((imageData) => {
            return imageData.images;
            })
        )
        .subscribe((images) => {
            this.images = images;
            this.images$.next(this.images);
      });
    }

    getImagesStream() {
        return this.images$.asObservable();
    }

    addImage(coords: string, dataURL: string): void {
        const imageData = new FormData();
        imageData.append("coords", coords);
        imageData.append("dataURL", dataURL);

        this.http
            .put<{ image: Image }>(this.url, imageData)
            .subscribe((imageData) => {
                const image: Image = {
                    _id: coords,
                    coords: coords,
                    imageString: dataURL,
                };
                this.images.push(image);
                this.images$.next(this.images);
            });
    }

    addAllImages() {
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                let coords = (i - 2) + "," + (j - 2);
                console.log(i + "," + j);
                let str = "http://localhost:3000/images/" + i + "," + j + ".png";
                this.addImage(coords, str);
            }
        }
    }
    
    
}
