import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  @ViewChild(TemplateRef, { static: false }) template?: TemplateRef<{}>;

  constructor(private notification: NzNotificationService,private router: Router) {}
  Newnotification(type: string): void {
    this.notification.create(
      type,
      'Nouvelle réservation',
      'Vous avez une nouvelle réservation de la part de Monsieur Mehdi Zerouali.'
    );
  }

  UpdateUser(){
    this.router.navigate(['update-user']);
  }

}


