import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando...');
    //borra del ultimo al primero
    /*let HeroesSize:number = this.heroes.length;
    console.log(HeroesSize);
    if(HeroesSize > -1){
      this.heroes.splice(HeroesSize-1 , 1);
      


    }*/
    //Borra del primero al último y escribe en consola cual ha sido borrado
     this.heroeBorrado = this.heroes.shift() || '';
  }

  
  }

