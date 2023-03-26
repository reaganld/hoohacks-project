import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

import { Image } from "./image";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ImageService {
    private images: Image[] = [];
    private images$ = new Subject<Image[]>();
    readonly url = "http://localhost:3000/api/images";

    constructor(private http: HttpClient) {}

    getImages() {
        console.log("hit service");
        this.http
            .get<{ images: Image[] }>(this.url)
            .pipe(
                map(imageData => { 
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
        imageData.append("image", image, coords);

        this.http
            .post<{ image: Image }>(this.url, imageData)
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
