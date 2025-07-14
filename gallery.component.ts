import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
 //imge:string="assets/images/1.png";
allImages:any[]=[
  {fileLocation:'1.png'},
  {fileLocation:'2.jpg'},
  {fileLocation:'3.png'},
  {fileLocation:'p1.jfif'}
  
]
}
