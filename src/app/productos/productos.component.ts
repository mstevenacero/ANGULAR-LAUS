import { Component, OnInit } from '@angular/core';
import{CartasService} from '../servicios/cartas.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  Cartas=[];

  constructor(private servicio:CartasService) { 

    this.Cartas=servicio.obtenerCartas();
  }

  ngOnInit(): void {
  }

}
