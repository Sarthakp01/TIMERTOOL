import { Component, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'TimerTool';
  // isPaused: boolean = false;
  // isDone: boolean = false;

  // onCountdownEvent(event: any) {
  //   if (event.action === 'done') {
  //     this.isDone = true;
  //   }
  // }
  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;

  isPaused: boolean = false;
  isDone: boolean = false;

  startTimer() {
    this.countdown.begin();
    this.isPaused = false;
    this.isDone = false;
  }

  pauseTimer() {
    if (!this.isDone) {
      this.countdown.pause();
      this.isPaused = true;
    }
  }

  resumeTimer() {
    if (!this.isDone) {
      this.countdown.resume();
      this.isPaused = false;
    }
  }

  resetTimer() {
    this.countdown.restart();
    this.isPaused = false;
    this.isDone = false;
  }

  onCountdownEvent(event: CountdownEvent) {
    if (event.action === 'done') {
      this.isDone = true;
      this.isPaused = false;
    }
  }
}




