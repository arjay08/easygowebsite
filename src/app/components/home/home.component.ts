import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { AservicesComponent } from "../aservices/aservices.component";
import { ContactComponent } from "../contact/contact.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, AservicesComponent, ContactComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  openModal(){
    const modal = document.getElementById("exampleModal");
  }
}
