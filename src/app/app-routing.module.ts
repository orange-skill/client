import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './components/analytics/analytics/analytics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SkillsAddComponent } from './components/skills/skills-add/skills-add.component';
import { SkillsListComponent } from './components/skills/skills-list/skills-list.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminApproveComponent } from './components/admin/admin-approve/admin-approve.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'skills', component: SkillsListComponent },
  { path: 'skills/add', component: SkillsAddComponent },
  { path: 'search', component: SearchComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/approve', component: AdminApproveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
