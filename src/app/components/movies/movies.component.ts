import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies',
  template: ``,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        height: 82%;
        color: white;
      }
    `,
  ],
})
export class MoviesComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.data.subscribe();
  }
}
