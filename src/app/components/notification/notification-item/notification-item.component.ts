import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css'],
})
export class NotificationItemComponent implements OnInit {
  @Input() manager: string = '';
  @Input() comment: string = '';
  @Input() skill: string = '';
  @Input() time: string = '';

  constructor() {}

  ngOnInit(): void {}
}
