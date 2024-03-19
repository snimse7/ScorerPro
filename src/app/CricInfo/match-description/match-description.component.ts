import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScorerServiceService } from 'src/app/Services/scorer-service.service';

@Component({
  selector: 'app-match-description',
  templateUrl: './match-description.component.html',
  styleUrls: ['./match-description.component.css']
})
export class MatchDescriptionComponent {
  constructor(private _kingScorerService:ScorerServiceService,private activatedRoute:ActivatedRoute,private router:Router){

  }
      data:any;
      arr5:any[]=[];
      wicket5:any[]=[];
      bowling4:any[]=[];
      ngOnInit(){

        this.activatedRoute.params.subscribe(paramsData=>{
          let id=paramsData['id'];
          let playerId:number=id;
        this._kingScorerService.getScoreCardByMatchId(playerId).subscribe(
          (data)=>{
            this.data=data;
            if(this.data.scoreCard.length==4){
              let arr= Object.values(this.data.scoreCard[0].batTeamDetails.batsmenData);
              let arr2= Object.values(this.data.scoreCard[1].batTeamDetails.batsmenData);
              let arr3= Object.values(this.data.scoreCard[2].batTeamDetails.batsmenData);
              let arr4= Object.values(this.data.scoreCard[3].batTeamDetails.batsmenData);
              this.arr5=[arr,arr2,arr3,arr4];
    
              let wicket=Object.values(this.data.scoreCard[0].wicketsData);
              let wicket2=Object.values(this.data.scoreCard[1].wicketsData);
              let wicket3=Object.values(this.data.scoreCard[2].wicketsData);
              let wicket4=Object.values(this.data.scoreCard[3].wicketsData);
              this.wicket5=[wicket,wicket2,wicket3];
    
              let bowling=Object.values(this.data.scoreCard[0].bowlTeamDetails.bowlersData);
              let bowling2=Object.values(this.data.scoreCard[1].bowlTeamDetails.bowlersData);
              let bowling3=Object.values(this.data.scoreCard[2].bowlTeamDetails.bowlersData);
              let bowlingl=Object.values(this.data.scoreCard[3].bowlTeamDetails.bowlersData);
    
              this.bowling4=[bowling,bowling2,bowling3,bowlingl];
    
            }
            else if(this.data.scoreCard.length==3){
              let arr= Object.values(this.data.scoreCard[0].batTeamDetails.batsmenData);
              let arr2= Object.values(this.data.scoreCard[1].batTeamDetails.batsmenData);
              let arr3= Object.values(this.data.scoreCard[2].batTeamDetails.batsmenData);
              this.arr5=[arr,arr2,arr3];
    
              let wicket=Object.values(this.data.scoreCard[0].wicketsData);
              let wicket2=Object.values(this.data.scoreCard[1].wicketsData);
              let wicket3=Object.values(this.data.scoreCard[2].wicketsData);
              this.wicket5=[wicket,wicket2,wicket3];
    
              let bowling=Object.values(this.data.scoreCard[0].bowlTeamDetails.bowlersData);
              let bowling2=Object.values(this.data.scoreCard[1].bowlTeamDetails.bowlersData);
              let bowling3=Object.values(this.data.scoreCard[2].bowlTeamDetails.bowlersData);
              this.bowling4=[bowling,bowling2,bowling3];
            }
            else if(this.data.scoreCard.length==2){
              let arr= Object.values(this.data.scoreCard[0].batTeamDetails.batsmenData);
              let arr2= Object.values(this.data.scoreCard[1].batTeamDetails.batsmenData);
              this.arr5=[arr,arr2];
    
              let wicket=Object.values(this.data.scoreCard[0].wicketsData);
              let wicket2=Object.values(this.data.scoreCard[1].wicketsData);
              this.wicket5=[wicket,wicket2];
    
              let bowling=Object.values(this.data.scoreCard[0].bowlTeamDetails.bowlersData);
              let bowling2=Object.values(this.data.scoreCard[1].bowlTeamDetails.bowlersData);
              this.bowling4=[bowling,bowling2];
            }
            else{
              let arr= Object.values(this.data.scoreCard[0].batTeamDetails.batsmenData);
              this.arr5=[arr];
    
              let wicket=Object.values(this.data.scoreCard[0].wicketsData);
              this.wicket5=[wicket];
    
              let bowling=Object.values(this.data.scoreCard[0].bowlTeamDetails.bowlersData);
              this.bowling4=[bowling];
            }
          },
          (error) => {
            window.alert(error.message);
          }
        );
        })

        
      }
        
}
