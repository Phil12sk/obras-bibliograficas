import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listOfNames = []
  inputedName = {}
  filterName: string 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onEnter(event: any){
    let fieldValue = event.target.value
    if(fieldValue !== '' && fieldValue !== null && fieldValue !== undefined){
      this.inputedName = {
        name: fieldValue
      }
      this.listOfNames.push(this.inputedName)
    }
    this.filterName = ''
    fieldValue = ''
  }

  goToAuthors(){
    localStorage.setItem('lista', JSON.stringify(this.listOfNames))
    this.router.navigate(['/autores']);
  }
}
