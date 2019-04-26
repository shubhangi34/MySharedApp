import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
// import { Teamdata } from './mockteam';
import { Team } from './team';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // teamdata: any;
heading="Team's Revenue";
sticky: boolean = false;
  // teamdata= Teamdata;
  menuPosition: any;
  teamdata: any;
  constructor(private apiservice: ApiService,private router:Router) { }

  selectedTeam: Team;
onSelect(t: Team): void {
  this.selectedTeam = t;
}
  ngOnInit() {
      
    this.apiservice.getTeams().subscribe(res =>{
      this.teamdata = res.data;
    // console.log(this.teamdata);

  })
}
logout(){
  localStorage.clear();
  this.router.navigate([""]);
}

Add(){
  this.router.navigate(['Add']);
}

}
