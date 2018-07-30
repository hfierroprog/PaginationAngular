import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public nombreClase: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  desplegarSidebar() {

    this.nombreClase = $('#page-top').attr('class');

    if (this.nombreClase === 'sidebar-toggled') {
      this.renderer.removeClass(document.body, 'sidebar-toggled');
      $('.sidebar').removeClass('toggled');
    } else {
      this.renderer.addClass(document.body, 'sidebar-toggled');
      $('.sidebar').addClass('toggled');
    }
  }

}
