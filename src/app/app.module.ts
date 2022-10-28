import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from "ngx-infinite-scroll";


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ListImagesComponent } from './components/list-images/list-images.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SearchFormComponent,
    ListImagesComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    BrowserAnimationsModule
  ],
  exports: [LayoutComponent,SearchFormComponent,ListImagesComponent,ImageModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
