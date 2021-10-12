import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarItemComponent } from './components/sidebar/sidebar-item/sidebar-item.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { SkillsListComponent } from './components/skills/skills-list/skills-list.component';
import { SkillsAddComponent } from './components/skills/skills-add/skills-add.component';
import { HeaderComponent } from './components/header/header.component';

import { MsalModule } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { environment } from 'src/environments/environment';
import { SearchComponent } from './components/search/search.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationItemComponent } from './components/notification/notification-item/notification-item.component';
import { NotificationBarComponent } from './components/notification/notification-bar/notification-bar.component';
import { AnalyticsComponent } from './components/analytics/analytics/analytics.component';
import { AnalyticsItemComponent } from './components/analytics/analytics-item/analytics-item.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminApproveComponent } from './components/admin/admin-approve/admin-approve.component';
import { AdminApproveItemComponent } from './components/admin/admin-approve-item/admin-approve-item.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { VerifyComponent } from './components/auth/verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SidebarItemComponent,
    SidebarComponent,
    SkillsListComponent,
    SkillsAddComponent,
    HeaderComponent,
    SearchComponent,
    NotificationItemComponent,
    NotificationBarComponent,
    AnalyticsComponent,
    AnalyticsItemComponent,
    SignupComponent,
    AdminComponent,
    AdminApproveComponent,
    AdminApproveItemComponent,
    ProfileComponent,
    VerifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: environment.clientId,
          authority: environment.tenantId,
          redirectUri: environment.redirectUri,
        },
        cache: {
          cacheLocation: 'localStorage',
        },
      }),
      null as any,
      null as any
    ),
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
