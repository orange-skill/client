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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
