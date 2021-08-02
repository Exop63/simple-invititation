import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'invitation',
    loadChildren: () =>
      import('./invitation/invitation.module').then((m) => m.InvitationModule),
  },
  { path: '', redirectTo: 'invitation', pathMatch: 'full' },
  { path: '**', redirectTo: 'invitation' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
