import { Component, ElementRef, EventEmitter, OnInit ,Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{name:string,content:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name:string,content:string}>();

  //Viewchild
  @ViewChild('serverContentInput') serverContent :ElementRef;
  // newServerName = '';
  // newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
 
  onAddServer(localName :HTMLInputElement) {
    this.serverCreated.emit({name: localName.value, content :this.serverContent.nativeElement.value})
  }

  onAddBlueprint(localName :HTMLInputElement) {
    this.blueprintCreated.emit({name: localName.value, content :this.serverContent.nativeElement.value})
    }

}
