import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../dashboard/team';
import { ApiService } from '../service/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-updateteam',
  templateUrl: './updateteam.component.html',
  styleUrls: ['./updateteam.component.css']
})
export class UpdateteamComponent implements OnInit {
  
  @Input() t: Team;
  teamdata: any;
  teamid: any;
  constructor(private apiservice: ApiService, private fb:FormBuilder) { }

  updateform= this.fb.group({
    team_name : [''],
    amount : ['']

  })
  ngOnInit() {
    this.apiservice.getTeams().subscribe(res =>{
      this.teamdata = res.data;
      // this.teamid = res.data[0].team_id;
    console.log(this.teamdata);
  })
  }

  updatedvalue =function(data){
   console.log(data);
    this.apiservice.updateTeam(this.updateform.value).subscribe(response=>{
      this.updatedata= response.data;
      // this.teamid 
      // console.log(this.updatedata);
    })
  }

}
