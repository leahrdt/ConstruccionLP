import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs'; 
import { Home } from '../interfaces/home'
import { Img } from '../mock'

@Injectable({
  providedIn: 'root' 
})
export class ImgHome {

  constructor() { }

  getFotos(): Observable<Home[]>{//2-metodo getPeliculas, que devuelve un observable del tipo array de Pelicula, explicado clase 3 2:01 Hs
    return new Observable ((observer: Observer<Home[]>) => { //2.5- voy a devolver un Observable(es decir un objeto asincronico)- 2.6- el cual recibe un callback como parametro (como las promesas), en este parametro especifico que tipo de dato voy a devolver, en este caso especifico que voy a devolver objeto (observer (puede tener cualquier nombre)) que es un array de objetos del tipo Pelicula (<Pelicula[]>).
      observer.next(Img); //3- el metodo .next es para darle un valor a mi objeto observer, el valor que le voy a dar a mi objeto va ser PELICULAS.
      observer.complete(); //4- una vez que termine todo, pongo complete.
    })
  }  
}