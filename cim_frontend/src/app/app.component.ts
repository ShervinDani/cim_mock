import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./header/header.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cim_frontend';
}
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { NgModule } from '@angular/core';


// import { HeaderComponent } from "./header/header.component";
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';  // <-- import FormsModule

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     HeaderComponent,
//     HttpClientModule,
//     FormsModule    // <-- add FormsModule here
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'cim_frontend';
// }
