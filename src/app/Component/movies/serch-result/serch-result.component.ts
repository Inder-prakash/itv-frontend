import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serch-result',
  templateUrl: './serch-result.component.html',
  styleUrls: ['./serch-result.component.css']
})
export class SerchResultComponent implements OnInit {

    data = {
    page: "",
    text: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
