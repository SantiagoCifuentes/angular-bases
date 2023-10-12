import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string [] = ['Spiderman','Ironman', 'Hulk', 'SheHulk', 'Thor']

  public deletedHero?: string ; //se realiza para que el método removeLastHero sea global

  removeLastHero () : void {
    this.deletedHero= this.heroNames.pop();

  }

}
