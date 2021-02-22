import { Component, OnInit } from '@angular/core';
import { Home } from '../interfaces/home'
import { ImgHome } from '../Servicios/servicios.service'
import { ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;

  imagenes:Home[]

  
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  
  
  constructor(private svcHome: ImgHome) { }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  ngOnInit(): void {
    AOS.init();
    this.obtenerImagenes()
  }

  obtenerImagenes(){ //7- creo una funcion para obtener los datos
    this.svcHome.getFotos().subscribe(data => this.imagenes = data) //8. "this.svcPelicula.getPeliculas()" hasta aca solamente nos devuelve un observable, a travez del .subscribe puedo acceder a los datos que me devuelve un observable. es como un .then de fetch. 
    //8.5- (en un callback) lo que nos devuelve lo llamamos "data" y a este data lo llevamos a peliculas, el atributo de ListadoPeliculaComponent que habiamos definido previamente.
    
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
