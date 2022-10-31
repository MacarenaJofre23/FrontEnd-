import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/Service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
})

export class NewExperienciaComponent implements OnInit {
nombreExperiencia: string = '';
descripcionExperiencia: string = '';
comienzo:  number;
finalizacion: number;

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

onCreate(): void {
  const experiencia = new Experiencia(this.nombreExperiencia, this.descripcionExperiencia, this.comienzo, this.finalizacion);
   this.sExperiencia.save(experiencia).subscribe(data =>{
    alert("Experiencia Agregada"); 
    this.router.navigate(['']);
   }, err => {
    alert("Falló");
    this.router.navigate(['']);
   }
   )
  }
}
