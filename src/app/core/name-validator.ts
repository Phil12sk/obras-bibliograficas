import { PrepositionNameList } from "./lists/preposition-list";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NameValidatorsService{
  firstNameToShow = '';
  lastNameToShow = '';
  fullNameToShow = '';

  constructor(private prepositionNameList: PrepositionNameList){}
  oneName(names: any){
      this.fullNameToShow = names[0].toUpperCase()
      return this.fullNameToShow
    }
  
    twoNames(names: any){
      this.firstNameToShow = names[1].toUpperCase()
      this.lastNameToShow = names[0].charAt(0).toUpperCase() + names[0].slice(1);
      this.fullNameToShow = this.firstNameToShow + ', ' + this.lastNameToShow
      return this.fullNameToShow
    }
  
    threeOrMoreNames(name: any){
      console.log('3')
      for(let i = 0; i < name.length - 1; i++){
        console.log('3.1: ', i)
        if(this.prepositionNameList.prepositionNamesList.includes(name[i].toUpperCase())){
          console.log('3.2')
          this.lastNameToShow = this.lastNameToShow + name[i]
        }else{
          console.log('3.3')
          this.lastNameToShow = this.lastNameToShow + name[i].charAt(0).toUpperCase() + name[i].slice(1) + ' ';
        }
      }
      this.firstNameToShow = name[name.length - 1].toUpperCase()
      this.fullNameToShow = this.firstNameToShow + ', ' + this.lastNameToShow
      return this.fullNameToShow
    }
  
    nameInsideLastNameList(name: any){
      for(let i = 0; i < name.length - 2; i++){
        if(this.prepositionNameList.prepositionNamesList.includes(name[i].toUpperCase())){
          this.lastNameToShow = this.lastNameToShow + name[i]
        }else{
          this.lastNameToShow = this.lastNameToShow + name[i].charAt(0).toUpperCase() + name[i].slice(1) + ' ';
        }
      }
      this.firstNameToShow = (name[name.length - 2] + ' ' + name[name.length - 1]).toUpperCase()
      this.fullNameToShow = this.firstNameToShow + ', ' + this.lastNameToShow
      return this.fullNameToShow
    }

    resetVariables(){
      this.firstNameToShow = '';
      this.lastNameToShow = '';
    }
}

