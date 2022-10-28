import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  query: string = '';
  listImages: Image[] = [];

  constructor(private fb: FormBuilder,private imgService: ImageService) {
    this.searchForm = this.fb.group({
      query: ['', Validators.required],
    });
  }

  page = 1;

  ngOnInit(): void {
  }

  getImages() {
    this.query = this.searchForm.value.query;
    const images = this.imgService.getImages(this.query, this.page).subscribe({
      next: (images) => {
        this.listImages = images;
        console.log(images);
      },
      error: (e) => console.error(e),
      complete: () => console.log('Completed'),
    });
    return images;
  }



}
