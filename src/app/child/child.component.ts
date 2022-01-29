import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  appName = 'Myapp1';

  @Output()

  sendMessageEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(e: any){
    this.sendMessageEmitter.emit(e.target.value);
  }
}
