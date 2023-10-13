import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import{v4 as uuid}from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 10000,
    }
  ];

  addCharacter(character:Character):void{

    const newCharacter: Character ={  id:uuid(), ...character  } //aquí se desestructura el uuid y luego estamos diciendo que tome
                                                                  //todas las propiedades y ponlas en este nuevo objeto que se está creando
    this.characters.push(newCharacter)
  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1)
  // }
  deleteCharacterById(id:string){
    this.characters=this.characters.filter(character => character.id !== id) //se regresa un nuevo array con la condición, o sea, retorna el array con el id que no coincida
  }

}
