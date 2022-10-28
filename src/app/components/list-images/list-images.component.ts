import { Component, OnInit,Input,Output } from '@angular/core';
import { Image } from '../../models/image.model';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {

  @Input() listImages : Image[] = [];
  @Input() query!: string;
  @Input() page!: number;

  selectedImage!: Image;

  showModal:boolean | undefined = false;

  constructor(private imgService: ImageService) { }

  ngOnInit(): void {
  }

  toggleModal(){
    this.showModal = !this.showModal
    console.log(this.showModal);
  }

  onScroll(){
    this.imgService.getImages(this.query, ++this.page).subscribe({
      next: (images: Image[]) => {
        this.listImages.push(...images);
      },
      error: (e) => console.error(e),
      complete: () => console.log('complete'),
    });
  }

  setImage(image: Image){
    this.selectedImage = image;
  }

}
