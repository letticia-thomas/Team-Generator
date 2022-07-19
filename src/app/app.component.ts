import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 newMembername = '';
 members: string[] = [];
 errorMessage ='';
 numberOfTeams:Number| '' = '';
 teams :string[][] =[];

 onInput(member:string)
 {
  this.newMembername = member;
 }

 onNumberOfTeamInput(value:string)
 {
  this.numberOfTeams = Number(value);
 }

 addMember()
 {
  if(!this.newMembername)
  {
    this.errorMessage ='Name cannot be empty';
    return;
  }
  this.errorMessage =''
  this.members.push(this.newMembername);
  this.newMembername = '';
 }

 generateTeams()
 {

  if(!this.numberOfTeams || this.numberOfTeams<=0)
  {
    this.errorMessage ='Invalid input';
    return;
  }

  if(this.numberOfTeams>this.members.length)
  {
    this.errorMessage ='Not enough members';
  }

  this.errorMessage ='';

  const allMembers= [...this.members];
  while(allMembers.length)
  {
    for(let i=0;i<this.numberOfTeams;i++)
  {
    const randomIndex = Math.floor(Math.random()* allMembers.length)
    const member  = allMembers.splice(randomIndex,1)[0];

    if(!member)break;

    if(this.teams[i])
    {
      this.teams[i].push(member);
    }
    else
    {
      this.teams[i]=[member];
    }
  }
  }
  this.members = [];
  this.numberOfTeams = 0;
 }
}
