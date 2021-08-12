import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      this.peliculasEnCines = [{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster:'https://http2.mlstatic.com/D_NQ_NP_729934-MLA42963890145_072020-O.webp'
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster:'https://m.media-amazon.com/images/I/615sOgj+FmL._AC_.jpg'
      }];
  }
  title = 'front-end';

  peliculasEnCines: any;
  peliculasProximosEstrenos = []

}
