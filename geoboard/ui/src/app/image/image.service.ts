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

    addImage(coords: string, image: File): void {
        const imageData = new FormData();
        imageData.append("coords", coords);
        imageData.append("image", image);

        this.http
            .put<{ image: Image }>(this.url, imageData)
            .subscribe((imageData) => {
                const image: Image = {
                    _id: imageData.image._id,
                    coords: coords,
                    imagePath: imageData.image.imagePath,
                };
                this.images.push(image);
                this.images$.next(this.images);
            });
    }
}
