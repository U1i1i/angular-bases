import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()

  public characterList: Character[]=[{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  //public onDelete: EventEmitter<number>= new EventEmitter();
  public onDelete: EventEmitter<string>= new EventEmitter();

  //onDeleteCharacter(index:number):void{
  //  // TODO: emitir el ID del personaje
  //  this.onDelete.emit(index);
  //}

  onDeleteCharacter(id:string):void{
    this.onDelete.emit(id);
  }
}
