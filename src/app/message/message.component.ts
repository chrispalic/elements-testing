import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  // https://dzone.com/articles/how-to-create-your-first-angular-element
  title = 'Angular Elements';
  @Input() name: string;
  @Input() answer: string;
  constructor() { }

  ngOnInit() {
  }

}
