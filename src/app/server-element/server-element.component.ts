import { Component, OnInit, Input, ViewEncapsulation, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement')element : {type: string, name: string, content:string};
  @ContentChild('contentParagraph') paragraphParent : ElementRef; 
  constructor() { }

  ngOnInit(): void {
  }

}
