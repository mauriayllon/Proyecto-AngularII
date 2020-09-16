import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { AppRouting } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { MessagesService } from './messages.service';
import { ResponseService } from './response.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch:'full'},
  
  {path:'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  
  {path:'pages', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule),
  canActivate:[AuthGuard]}
  /*{path:'registration', loadChildren: () => import('./modules/registration/registration.module').then(m => m.RegistrationModule)}*/
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
