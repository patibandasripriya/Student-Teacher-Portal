// src/app/components/teacher/teacher.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teachers: any[] = [];
  searchQuery: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadTeachers();
  }

  loadTeachers() {
    this.dataService.getTeachers().subscribe(data => this.teachers = data);
  }

  deleteTeacher(id: number) {
    this.dataService.deleteRecord(id, 'teacher').subscribe(() => this.loadTeachers());
  }
}
