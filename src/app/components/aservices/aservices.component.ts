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
        prodimg: '/assets/imgs/sticker.jpg',
        prodname: 'Sticker',
      },
      {
        id: 2,
        prodimg: '/assets/imgs/tarp.jpg',
        prodname: 'Tarpaulin',
      },
      {
        id: 3,
        prodimg: '/assets/imgs/sublimation.jpg',
        prodname: 'Sublimation',
      },
      {
        id: 4,
        prodimg: '/assets/imgs/signages.jpg',
        prodname: 'Signages',
      },
      {
        id: 5,
        prodimg: '/assets/imgs/direct to film.jpg',
        prodname: 'Direct to Film',
      },
      {
        id: 6,
        prodimg: '/assets/imgs/laser printing.jpg',
        prodname: 'Laser Cutting',
      },
      {
        id: 7,
        prodimg: '/assets/imgs/laser cutting.jpg',
        prodname: 'Laser Printing',
      },
      {
        id: 8,
        prodimg: '/assets/imgs/pvd printing.jpg',
        prodname: 'PVC Printing',
      },
     
  ]

  );
}
