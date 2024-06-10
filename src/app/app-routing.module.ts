import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
export const routes: Routes = [
  { path : 'budget-planner',loadChildren:()=> import('./budget-planner/budget-planner.module').then (m =>m.BudgetPlannerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatIconModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
