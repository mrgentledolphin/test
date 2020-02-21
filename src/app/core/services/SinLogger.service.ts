import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SinLoggerService {

  constructor() { }

  logger() {
    console.log('here');
  }
}
