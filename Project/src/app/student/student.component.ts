import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.dataService.getStudents().subscribe(data => this.students = data);
  }

  deleteStudent(id: number) {
    this.dataService.deleteRecord(id, 'student').subscribe(() => this.loadStudents());
  }
}
