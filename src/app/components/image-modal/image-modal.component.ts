import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { trigger, transition, useAnimation,state,style,animate } from '@angular/animations';
import { flipInX,flipOutX } from 'ng-animate';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css'],
  animations: [
    trigger('open',[
      transition('* => *', useAnimation(flipInX)),
    ]),
  ]
})
export class ImageModalComponent implements OnInit {

  @Input() showModal: boolean | undefined = false;
  @Input() selectedImage!:Image;
  @Output() toggleModal = new EventEmitter<void>();
  flipInX: any;
  flipOutX:any;

  constructor() { }

  ngOnInit(): void {

  }

 displayModal(){
    this.toggleModal.emit();

  }



}
