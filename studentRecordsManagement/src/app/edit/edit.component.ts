import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, 
    private _studentsservice: StudentsService,
    private router: Router,
    private routes: ActivatedRoute
    ) { }

addForm: FormGroup;

  ngOnInit(){
    const routeParams = this.routes.snapshot.params;
    //console.log(routeParams.sid);

    this.addForm = this.formBuilder.group({
    sid: [''],
      fname: ['' ,Validators.required],
      lname: ['' ,[Validators.required, Validators.maxLength(10)]],
      email: ['' ,[Validators.required, Validators.maxLength(30)]],
});

this._studentsservice.getStudentById(routeParams.id).subscribe((data: any) => {

  console.log(data)
  this.addForm.patchValue(data);
});
} 


update(){
//console.log(this.addForm.value);

this._studentsservice.updateStudent(this.addForm.value).subscribe(() =>  {
   this.router.navigate(['view']);

} ,
  error => {
    alert(error);
  }

);


}





}
