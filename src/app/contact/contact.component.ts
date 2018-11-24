import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public lat = 36.842893;
  public lng = 10.1940133;

  constructor() { }

  ngOnInit() {
  }

}
