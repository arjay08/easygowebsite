import { Component, signal } from '@angular/core';
import { Service } from '../../models/services.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aservices',
  imports: [CommonModule],
  templateUrl: './aservices.component.html',
  styleUrl: './aservices.component.css'
})
export class AservicesComponent {


  services = signal<Service[]> ([

      {
        id: 1,
        prodimg: '../stickers.jpg',
        prodname: 'Sticker',
      },
      {
        id: 2,
        prodimg: '../tarp.jpg',
        prodname: 'Tarpaulin',
      },
      {
        id: 3,
        prodimg: '../sublimation1.jpg',
        prodname: 'Sublimation',
      },
      {
        id: 4,
        prodimg: '../signages.jpg',
        prodname: 'Signages',
      },
      {
        id: 5,
        prodimg: '../direct to film.jpg',
        prodname: 'Direct to Film',
      },
      {
        id: 6,
        prodimg: '../laser cutiing.jpg',
        prodname: 'Laser Cutting',
      },
      {
        id: 7,
        prodimg: '../laser printing.jpg',
        prodname: 'Laser Printing',
      },
      {
        id: 8,
        prodimg: '../pvd printing.jpg',
        prodname: 'PVC Printing',
      },
     
  ]

  );

  
  isModelOpen = signal(false);
    
  openSignalmodal(){
    this.isModelOpen.set(true);
  }
  closeSignalmodal(){
    this.isModelOpen.set(false);
  }

}
