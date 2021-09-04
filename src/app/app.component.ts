import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedId: number = 1;
  
  isCollapsed = false;
  @ViewChild(TemplateRef, { static: false }) template?: TemplateRef<{}>;

  constructor(private notification: NzNotificationService, public authService : AuthService, private router: Router) {}
  ngOnInit(): void {
    console.log("log id :"+this.authService['loggedId']);
  }
  Newnotification(type: string): void {
    this.notification.create(
      type,
      'Nouvelle réservation',
      'Vous avez une nouvelle réservation de la part de Monsieur Mehdi Zerouali.'
    );
  }

  onLogOut(){
    this.authService.logout();
  }
}


