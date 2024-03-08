import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FirstComponentComponent } from "./first-component/first-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, FirstComponentComponent]
})
export class AppComponent {
  title = 'angularProject';
  name = '';
}
