import { Component, OnInit } from '@angular/core';
import { Game } from 'src/modals/game';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/firestore';






@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  currentCard: string = '';
pickCardAnimation = false;
game: Game;
  constructor( private firestore: AngularFirestore  , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.firestore.collection('games').valueChanges().subscribe((game)=>{
      console.log('Game update', game);
    });
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game)
  }
  takeCard(){

    if(!this.pickCardAnimation){
        this.currentCard = this.game.stack.pop();
    this.pickCardAnimation = true;
 
    console.log('New Card',this.currentCard);
    console.log('Game is',this.game);

    this.game.curentPlayer++;
    this.game.curentPlayer = this.game.curentPlayer % this.game.players.length;

    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
    }
  
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if(name && name.length > 0){
              console.log('The dialog was closed', name);
this.game.players.push(name);
      }

    });
  }
}
