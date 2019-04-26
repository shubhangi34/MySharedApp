import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fb:FormBuilder, private apiservice :ApiService) { }
addteamform= this.fb.group({
  team_name : [''],
  amount : ['']

})
  ngOnInit() {
  }

  addteam= function(data){
    // let data = {team_name: this.name.value, amount: this.amount.value};
    this.apiservice.addTeam(this.addteamform.value).subscribe(data =>{

      this.newteam = data;
    console.log(this.newteam);
     });
  }

}
