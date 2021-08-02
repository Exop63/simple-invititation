import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationComponent } from './invitation/invitation.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InvitationComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitationAppRoutingModule {}
