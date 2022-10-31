import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/Service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {

nombreProyecto: string = '';
descripcionProyecto: string = '';
comienzo:  number;
finalizacion: number;

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

onCreate(): void {
  const proyecto = new Proyecto(this.nombreProyecto, this.descripcionProyecto, this.comienzo, this.finalizacion);
   this.proyectoS.save(proyecto).subscribe(data =>{
    alert("Proyecto Agregado correctamente"); 
    this.router.navigate(['']);
   }, err => {
    alert("Falló");
    this.router.navigate(['']);
   }
   )
  }
}

