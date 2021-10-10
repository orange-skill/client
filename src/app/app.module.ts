import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
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

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationItemComponent } from './components/notification/notification-item/notification-item.component';
import { NotificationBarComponent } from './components/notification/notification-bar/notification-bar.component';
import { AnalyticsComponent } from './components/analytics/analytics/analytics.component';
import { AnalyticsItemComponent } from './components/analytics/analytics-item/analytics-item.component';
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
