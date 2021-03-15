import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oval-shape',
  templateUrl: './oval-shape.component.html',
  styleUrls: ['./oval-shape.component.scss'],
})
export class OvalShapeComponent implements OnInit {
  @Input() status: string;

  constructor() { }

  ngOnInit() { }

}
