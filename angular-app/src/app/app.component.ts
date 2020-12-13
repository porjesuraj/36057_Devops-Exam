import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
 
  employees = []


  constructor(private service: EmployeeService){ }

  ngOnInit(): void {
    this.service
      .getEmployees()
      .subscribe(response => {

        if(response['status'] == 'success'){
          this.employees = response['data']
          console.log(this.employees)
        }
        else{
          alert('error')
        }
      })

  
}
}