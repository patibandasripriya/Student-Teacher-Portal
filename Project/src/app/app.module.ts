// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { RegisterComponent } from './register/register.component';
// import { TeacherComponent } from './teacher/teacher.component';
// import { StudentComponent } from './student/student.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     RegisterComponent,
//     TeacherComponent,
//     StudentComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     BrowserAnimationsModule,
//     MatSnackBarModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
//export class AppModule { }
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { RegisterComponent } from './register/register.component';
// import { TeacherComponent } from './teacher/teacher.component';
// import { StudentComponent } from './student/student.component';
// import { SearchPipe } from './search.pipe';

// @NgModule({
//   declarations: [
//     AppComponent,
//     RegisterComponent,
//     TeacherComponent,
//     StudentComponent,
//     SearchPipe
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule, // Add ReactiveFormsModule here
//     HttpClientModule,
//     BrowserAnimationsModule,
//     MatSnackBarModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { SearchPipe } from './search.pipe'; // Import the SearchPipe

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TeacherComponent,
    StudentComponent,
    SearchPipe // Declare the SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





