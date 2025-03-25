import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  constructor(private router: Router, private renderer: Renderer2) {
    // Listen to router events to detect navigation changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLink();
      }
    });
  }

  ngAfterViewInit(): void {
    this.updateActiveLink();
  }

  updateActiveLink(): void {
    const currentUrl = window.location.pathname; // Get the current path (without domain)
    const anchorElements = document.querySelectorAll('a');

    anchorElements.forEach((anchor) => {
      if (anchor.getAttribute('routerLink') === currentUrl) {
        this.renderer.addClass(anchor, 'active');
      } else {
        this.renderer.removeClass(anchor, 'active');
      }
    });
  }
}