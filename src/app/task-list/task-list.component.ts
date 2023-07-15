import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: Task[] = [
    // new Task("Visit Ann"),
    // new Task("Call Dad"),
    // new Task("Go to the gym"),
    // new Task("Wash the dishes"),
    // new Task("Shop for the party")
  ]

  add(newTask: string) {
    this.tasks.push(new Task(newTask))
  }
  remove(existingTask:Task) {
    var userconfirmed = confirm('Are you sure that you want to remove the following task? \n "${existingTask.title}"');

    if (userconfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask)
    }
  }
 

  }


class Task {
  constructor(public title: string) {

  }
  toggleisDone() {
    this.isDone=!this.isDone;
  }
  public isDone=false
}


