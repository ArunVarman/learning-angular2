import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PomodoroTimerModule } from './pomodoro-timer';
const platform = platformBrowserDynamic();
platform.bootstrapModule(PomodoroTimerModule);
