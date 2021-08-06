import { Component, OnInit } from '@angular/core';
import { Game } from 'src/modals/game';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  currentCard: any;
pickCardAnimation = false;
game: Game;
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game)
  }
  takeCard(){

    if(!this.pickCardAnimation){
        this.currentCard = this.game.stack.pop();
    console.log(this.currentCard);
    this.pickCardAnimation = true;

    setTimeout(() => {
      this.pickCardAnimation = false;
    }, 1500);
    }
  
  }
}
