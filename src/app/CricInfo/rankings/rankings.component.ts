import { Component } from '@angular/core';
import { ScorerServiceService } from 'src/app/Services/scorer-service.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent {
  formatType:string="test";
  category:string="team";
    constructor(private _kingScorerService:ScorerServiceService){

    }

    rankings:any[]=[];
    ngOnInit(){
      this._kingScorerService.getRankings("test","batsmen").subscribe(
        (data)=>{
          this.rankings=data.rank;
          //alert(this.rankings[0].name);
        },
        (error) => {
          window.alert(error.message);
        }
      );
    }

    getRankings(){
      this._kingScorerService.getRankings(this.formatType,this.category).subscribe(
        (data)=>{
          this.rankings=data.rank;
          //alert(this.rankings[0].name);
        },
        (error) => {
          window.alert(error.message);
        }
      );
    }

}
