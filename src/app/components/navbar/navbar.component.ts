import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchMovie(title: string) {

    title = title.trim();

    if (title.length == 0) {
      this.router.navigate(['/home']);
      return;
    }

    this.router.navigate(['/search', title]);
  }

}
