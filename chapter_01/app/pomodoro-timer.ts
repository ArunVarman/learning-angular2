
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PomodoroTimerComponent } from './PomodoroTimerComponent'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [PomodoroTimerComponent],
  bootstrap: [PomodoroTimerComponent]
})

export class PomodoroTimerModule { }
