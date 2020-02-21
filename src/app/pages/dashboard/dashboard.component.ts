import { SinLoggerService } from '../../core/services/SinLogger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private logger: SinLoggerService
  ) { }

  ngOnInit() {
    this.logger.logger();
  }

}
