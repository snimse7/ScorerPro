import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScorerServiceService } from 'src/app/Services/scorer-service.service';

@Component({
  selector: 'app-player-info-home',
  templateUrl: './player-info-home.component.html',
  styleUrls: ['./player-info-home.component.css']
})
export class PlayerInfoHomeComponent {
  search="";
  data:any;


  // gridStyle = {
  //   width: '100%',
  //   textAlign: 'center',
  //   margin:'5px'
  // };
  constructor(private _kingScorerService:ScorerServiceService,
    private router: Router){

  }
  ngOnInit(){
    this._kingScorerService.getTrendingPlayers().subscribe(
      (data)=>{
        this.data=data;
        //alert(this.rankings[0].name);
      },
      (error) => {
        window.alert("API Call Limit might have been exceeded please try again tommorrow");
      }
    );
  }

  searchByName(){
    this._kingScorerService.serchPlayerByName(this.search).subscribe(
      (data)=>{
        this.data=data;
        //alert(this.rankings[0].name);
      },
      (error) => {
        window.alert(error.message);
      }
    );
    }

    playerInfo(id:number){
      this.router.navigate(['playerInfoById',id]);
    }
  //data={"player":[{"id":"12163","name":"Virandeep Singh","teamName":"Malaysia","faceImageId":"182026"},{"id":"10408","name":"Imad Wasim","teamName":"Pakistan","faceImageId":"170782"},{"id":"690","name":"Kevin O Brien","teamName":"Ireland","faceImageId":"171113"},{"id":"1988","name":"Chadwick Walton","teamName":"West Indies","faceImageId":"157229"},{"id":"10428","name":"Charles Amini","teamName":"Papua New Guinea","faceImageId":"215770"},{"id":"11124","name":"Benjamin White","teamName":"Ireland","faceImageId":"182026"},{"id":"10408","name":"Imad Wasim","teamName":"Pakistan","faceImageId":"170782"},{"id":"13682","name":"Pathum Nissanka","teamName":"Sri Lanka","faceImageId":"351889"},{"id":"2281","name":"Thisara Perera","teamName":"Sri Lanka","faceImageId":"170714"},{"id":"20531","name":"Eben Botha","teamName":"South Africa","faceImageId":"182026"}],"category":"TRENDING SEARCHES"}

}
