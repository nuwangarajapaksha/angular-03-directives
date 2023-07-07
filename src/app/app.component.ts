import { Component } from '@angular/core';

//01,02,03,04 ngIf, hidden
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   courses = [1, 2];
// }

//05 ngSwitchCase
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   viewMode = 'somethingElse';
// }

//06,07,08 ngFor
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   courses = [
//     { id: 1, name: 'course1 ' },
//     { id: 2, name: 'course2 ' },
//     { id: 3, name: 'course3 ' },
//   ];
// }

//09 ngFor and Change Detection
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   courses = [
//     { id: 1, name: 'course1 ' },
//     { id: 2, name: 'course2 ' },
//     { id: 3, name: 'course3 ' },
//   ];

//   onAdd() {
//     this.courses.push({ id: 4, name: 'course4' });
//   }

//   onRemove(course: { id: number; name: string }) {
//     let index = this.courses.indexOf(course);
//     this.courses.splice(index, 1);
//   }

//   onChange(course: { name: string }) {
//     course.name = 'UPDATED';
//   }
// }

//10 ngFor and TrackBy
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   courses: { id: number; name: string }[] | undefined;

//   loadCourses() {
//     this.courses = [
//       { id: 1, name: 'course1 ' },
//       { id: 2, name: 'course2 ' },
//       { id: 3, name: 'course3 ' },
//     ];
//   }

//   trackCourse(index: any, course: any) {
//     return course ? course.id : undefined;
//   }
// }

//11 The Leading Asterisk
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   courses = [1, 2];
// }

//12 ngClass
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'angular-04-binding';
// }

//13 ngStyle
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   canSave = false;
// }

//14 Safe Traversal Operator Deprecated
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   task = {
//     title: 'Review applications',
//     assingnee: null,
//   };
// }

//15 Creating Custom Directives
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
