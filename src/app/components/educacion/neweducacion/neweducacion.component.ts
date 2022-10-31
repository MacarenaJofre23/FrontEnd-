import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NewEducacionComponent implements OnInit {
nombreEducacion: string = '';
descripcionEducacion: string = '';
comienzo:  number;
finalizacion: number;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

onCreate(): void {
  const educacion = new Educacion(this.nombreEducacion, this.descripcionEducacion, this.comienzo, this.finalizacion);
   this.educacionS.save(educacion).subscribe(data =>{
    alert("Educacion Agregada correctamente"); 
    this.router.navigate(['']);
   }, err => {
    alert("Falló");
    this.router.navigate(['']);
   }
   )
  }
}