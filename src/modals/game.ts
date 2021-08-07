export class Game{
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public curentPlayer: number = 0;
    public currentCard: string = '';
    public pickCardAnimation = false;

    constructor(){
        for(let i=1; i<14; i++){
            this.stack.push('spade_'+i);
            this.stack.push('hearts_'+i);
            this.stack.push('clubs_'+i);
            this.stack.push('diamonds_'+i);
        }
       shuffle(this.stack);
    }
    public toJson(){
      return{
        players: this.players,
        stack: this.stack,
        playedCards: this.playedCards,
        curentPlayer: this.curentPlayer,
        pickCardAnimation: this.pickCardAnimation,
        currentCard: this.currentCard
      }
    }
}



function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

}
