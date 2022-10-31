import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { NewEducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hysskills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/hysskills/new-skill/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto/editproyecto.component';
import { NewproyectoComponent } from './components/proyecto/newproyecto/newproyecto.component';



const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexperiencia', component:NewExperienciaComponent},
  {path:'editexperiencia/:id', component:EditExperienciaComponent},
  {path:'nuevaeducacion', component: NewEducacionComponent},
  {path:'editeducacion/:id', component: EditeducacionComponent},
  {path: 'nuevaskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'nuevoproyecto', component: NewproyectoComponent},
  {path: 'editarproyecto/:id', component: EditproyectoComponent},
  {path: 'editaracercade/:id', component:EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
