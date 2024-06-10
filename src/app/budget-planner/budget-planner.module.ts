import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    LoginComponent,
    SideNavComponent,
    DashboardComponent,
    IncomeComponent,
    ExpenseComponent,
    TodoComponent,
    HistoryComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule,
    ReactiveFormsModule,
    MatIconModule
 
  ]
})
export class BudgetPlannerModule { }
