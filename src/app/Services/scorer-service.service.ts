import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScorerServiceService {

  constructor(private http:HttpClient) { }

  //Services for CRICINFO
  baseU="https://scorerproweb.somee.com/";
  //baseU="https://localhost:7292/"
  getRankings(formatType:string,category:string):Observable<any>{
    let url=this.baseU+'api/CricInfo/Ranking?formatType='+formatType+'&category='+category;
    //let url="";
    return this.http.get(url);
  }
  serchPlayerByName(name:string):Observable<any>{
    let url=this.baseU+"api/CricInfo/searchPlayerByName?name="+name;
    return this.http.get(url);
  }
  getRecentMatches():Observable<any>{
    let url=this.baseU+"api/CricInfo/getRecentMatches";
    return this.http.get(url);
  }
  getScoreCardByMatchId(matchId:number):Observable<any>{
    let url=this.baseU+"api/CricInfo/getScoreCardById?matchId="+matchId;
    return this.http.get(url);
  }
  getTrendingPlayers():Observable<any>{
    // let url="https://localhost:7292/api/CricInfo/getTrendingPlayers";
    let url=this.baseU+"api/CricInfo/getTrendingPlayers"
    return this.http.get(url);
  }
  getPlayerDetailsById(playerId:number):Observable<any>{
    let url =this.baseU+"api/CricInfo/getPlayerInfoById?playerId="+playerId;
    return this.http.get(url);
  }

  getBowlingInfoById(playerId:number):Observable<any>{
    let url =this.baseU+"api/CricInfo/getBowlingInfoById?playerId="+playerId;
    return this.http.get(url);
  }
  getBattingInfoById(playerId:number):Observable<any>{
    let url =this.baseU+"api/CricInfo/getBattingInfoById?playerId="+playerId;
    return this.http.get(url);
  }
}
