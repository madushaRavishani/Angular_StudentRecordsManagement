import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( private http: HttpClient) {} 

    getStudents(){

      return this.http.get<Students[]>('http://localhost/angular/list.php');
    }

    deleteStudent(sid:number){

      return this.http.delete<Students[]>('http://localhost/angular/delete.php?id='+sid);
    }

    createStudent(student: Students){

      return this.http.post('http://localhost/angular/insert.php',student);
    }

    getStudentById(id: number){

      return this.http.get<Students[]>('http://localhost/angular/getId.php?id=' + id);
    }

    updateStudent(student: Students){

      return this.http.put('http://localhost/angular/update.php' + '?id=' + student.sid,student);
    }
   }
 
