import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  // constructor(private _kingScorerService:KingScorerServiceService,private activatedRoute:ActivatedRoute,private router:Router){

  // }

  git(){
    let url="https://github.com/snimse7"
    window.open(url, '_blank');
  }
  resume(){
      let url="https://drive.google.com/file/d/1lvEbBmGcjy-37EHiynWsqZG3R8tU5_IM/view?usp=drive_link";
    window.open(url, '_blank');

  }
  linkdin(){
    let url="https://www.linkedin.com/in/shubham-nimse-701355226/";
    window.open(url, '_blank');

  }

  // constructor(private _kingScorerService:KingScorerServiceService,private activatedRoute:ActivatedRoute,private router:Router){

  // }

  // git(){
  //   let url="https://github.com/snimse7"
  //   window.open(url, '_blank');
  // }
  // resume(){
  //     let url="https://drive.google.com/file/d/1lvEbBmGcjy-37EHiynWsqZG3R8tU5_IM/view?usp=drive_link";
  //   window.open(url, '_blank');

  // }
}
