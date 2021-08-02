import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitationComponent } from './invitation/invitation.component';
import { InvitationAppRoutingModule } from './invitation-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InvitationComponent],
  imports: [
    InvitationAppRoutingModule,
    CommonModule,
    NgSelectModule,
    SharedModule,
  ],
})
export class InvitationModule {}
