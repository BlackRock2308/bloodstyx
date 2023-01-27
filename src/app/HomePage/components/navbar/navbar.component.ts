import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private el : ElementRef,
    private rendered : Renderer2) { }

  ngOnInit(): void {
  }


  onMenuClick(){

    this.rendered.selectRootElement(this.el.nativeElement.querySelector('my-navbar-collapse'),  false);
  }

}
