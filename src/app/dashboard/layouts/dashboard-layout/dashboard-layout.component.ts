import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  urlActual:string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    // Obtener la URL completa
    this.urlActual = this.router.url;
    console.log("URL actual:", this.urlActual);
  
    // Obtener partes específicas de la URL
    const host = this.router.url.split('/')[2]; // Ejemplo: "www.ejemplo.com"
    console.log("Host:", host);
  
    // Puedes realizar más operaciones con la URL según tus necesidades
  }


  abrirNuevaVentana() {
    const nuevaVentana = window.open(`${this.urlActual}/dashboard`, '_blank');
  }

}
