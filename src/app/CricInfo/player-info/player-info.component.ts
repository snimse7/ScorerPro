import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScorerServiceService } from 'src/app/Services/scorer-service.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent {
  bowling:any;
  battingStats:any;
  constructor(private _kingScorerService:ScorerServiceService,private activatedRoute:ActivatedRoute,private router:Router){

  }
  ngOnInit(){
    this.activatedRoute.params.subscribe(paramsData=>{
      let id=paramsData['id'];
      let playerId:number=id;
      //id=1413;
      this._kingScorerService.getPlayerDetailsById(playerId).subscribe(
        (data)=>{
          this.playerInfo=data;
        },
        (error) => {
          window.alert(error.message);
        }
      );

      this._kingScorerService.getBattingInfoById(playerId).subscribe(
        (data)=>{
          this.battingStats=data;
        },
        (error) => {
          window.alert(error.message);
        }
      );

      this._kingScorerService.getBowlingInfoById(playerId).subscribe(
        (data)=>{
          this.bowling=data;
        },
        (error) => {
          window.alert(error.message);
        }
      );
    });
      
  }
  playerInfo:any;
  
}
