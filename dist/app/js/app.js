var app=angular.module("RockPaperScissors",[]);app.controller("MainController",["$scope","WeaponsService",function(e,s){e.weapons=s.getData(),e.fight=function(e){game.fight(e,s.getData())}}]),app.directive("weaponInfo",function(){return{restrict:"E",scope:{info:"="},templateUrl:"app/templates/weaponInfo.html"}});var game=new function(){this.score_user=0,this.score_computer=0,this.pick_computer_weapon=function(e){return e["weapon00"+Math.floor(Math.random()*Object.keys(e).length+1)]},this.reset=function(){this.score_user=0,this.score_computer=0,document.getElementsByClassName("scoreboard__user__score")[0].innerHTML=this.score_user,document.getElementsByClassName("scoreboard__computer__score")[0].innerHTML=this.score_computer,document.getElementsByClassName("scoreboard__user__picked")[0].innerHTML="",document.getElementsByClassName("scoreboard__computer__picked")[0].innerHTML="",document.getElementsByClassName("status")[0].innerHTML="You just reset the game, nobody has any points now."},this.fight=function(e,s){var o=this.pick_computer_weapon(s);document.getElementsByClassName("scoreboard__user__picked")[0].innerHTML='<i class="fa '+e.icon+'"></i>',document.getElementsByClassName("scoreboard__computer__picked")[0].innerHTML='<i class="fa '+o.icon+'"></i>',e.id===o.id?(console.log("draw"),document.getElementsByClassName("scoreboard__user__score")[0].innerHTML=this.score_user,document.getElementsByClassName("status")[0].innerHTML=e.name+" meets "+o.name+". No points for anyone."):e.id===o.defeated_by.id?(console.log("player wins"),this.score_user+=1,document.getElementsByClassName("scoreboard__user__score")[0].innerHTML=this.score_user,document.getElementsByClassName("status")[0].innerHTML=e.name+" beats "+o.name+". One point for you."):(console.log("computer wins"),this.score_computer+=1,document.getElementsByClassName("scoreboard__computer__score")[0].innerHTML=this.score_computer,document.getElementsByClassName("status")[0].innerHTML=e.name+" does not beat "+o.name+". One point for the computer.")}};app.factory("WeaponsService",function(){var e={};return e.data={weapon001:{defeated_by:{id:"weapon002"},defeats:{id:"weapon003"},description:"This is an A4 sheet of paper.",icon:"fa-file",id:"weapon001",name:"Paper"},weapon002:{defeated_by:{id:"weapon003"},defeats:{id:"weapon001"},description:"This is a pair of scissors.",icon:"fa-scissors",id:"weapon002",name:"Scissors"},weapon003:{defeated_by:{id:"weapon001"},defeats:{id:"weapon002"},description:"This is a rock.",icon:"fa-hand-rock-o",id:"weapon003",name:"Rock"}},e.getData=function(){return this.data},e});