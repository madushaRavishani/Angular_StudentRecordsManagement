import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';
import { Students } from '../students';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, 
    private _studentsservice: StudentsService,
    private router: Router
    ) { }

addForm: FormGroup;

  ngOnInit(){
    this.addForm = this.formBuilder.group({
    
      fname: ['' ,Validators.required],
      lname: ['' ,[Validators.required, Validators.maxLength(10)]],
      email: ['' ,[Validators.required, Validators.maxLength(20)]],


});
  }
  
  onSubmit(){

  //console.log(this.addForm.value);  
  this._studentsservice.createStudent(this.addForm.value)
  .subscribe(data => {
    this.router.navigate(['view']);
  
   } );


} 



}
