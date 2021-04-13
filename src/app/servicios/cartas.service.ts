import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartasService {
  Cartas:any[]=[
    {
      imagen:'./assets/imagenes/card1.png'



    },
    {
      imagen:'./assets/imagenes/card2.png'



    }
   



  ]

  constructor() { }
  obtenerCartas(){


    return this.Cartas;
  }
  obtenerCarta(i:string|number){

    return this.Cartas[i];
  }
}
