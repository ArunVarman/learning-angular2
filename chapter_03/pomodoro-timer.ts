import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component ({
  selector: 'countdown',
  template: '<h1>Time Left: {{seconds}}</h1>'
})
class CountdownComponent {
  seconds: number = 25;
  intervalId: number;

  constructor(){
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    //Implement function
    if(--this.intervalId < 1) {
      clearInterval(this.intervalId);
    }
  }
}

@Component ({
  selector: 'pomodoro-timer',
  directives: [CountdownComponent],
  template: '<countdown></countdown>'
})
class PomodoroTimerComponent {}

bootstrap(PomodoroTimerComponent);
