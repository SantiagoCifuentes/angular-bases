import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(private dbzService:DbzService){

  }

  get characters(): Character[]{
      return [...this.dbzService.characters]; //se pone con el spread ya que si se hace una modificación acá, se modifica la data del servicio
                                                //el spread realiza un copia
  }

  onDeleteCharacter(id:string):void {
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character: Character){
    this.dbzService.addCharacter(character)
  }

}
