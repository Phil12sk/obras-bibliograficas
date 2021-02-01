import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LastNameList } from '../core/lists/last-name-list';
import { NameValidatorsService } from '../core/name-validator';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  names = [];
  firstNameToShow = '';
  lastNameToShow = '';
  
  prepositionNamesList = [
    "DA", 
    "DE", 
    "DO", 
    "DAS", 
    "DOS"
  ]

  formatedNames = {}


  constructor(private router: Router, private lastNameList: LastNameList, private nameValidatorsService: NameValidatorsService) { }

  ngOnInit(): void {
    let listOfNames = JSON.parse(localStorage.getItem('lista'))

    this.checkNames(listOfNames)
  }

  goToHome(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

  checkNames(listOfNames: any){
    for(let i = 0; i < listOfNames.length; i++){
      let fullName = listOfNames[i].name.split(' ')
      if(fullName.length == 1){
        this.pushFormatedNames(this.nameValidatorsService.oneName(fullName))
      }else if(fullName.length == 2){
        this.pushFormatedNames(this.nameValidatorsService.twoNames(fullName))
      }else if(fullName.length > 2){
        console.log('1')
        if(this.lastNameList.lastNamesList.includes(fullName[fullName.length - 1].toUpperCase())){
          this.pushFormatedNames(this.nameValidatorsService.nameInsideLastNameList(fullName))
        }else{
          console.log('2')
          this.pushFormatedNames(this.nameValidatorsService.threeOrMoreNames(fullName))
        }
      }      
    }
  }

  pushFormatedNames(fullNameToShow: any){
    this.formatedNames = {
      formatedName: fullNameToShow
    }
    this.names.push(this.formatedNames)
    this.nameValidatorsService.resetVariables()
  }
}
