import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockService } from 'src/app/helpers/mock.service';
import Swal from 'sweetalert2';
import { InvitationService } from '../services/invitation.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss'],
})
export class InvitationComponent implements OnInit {
  form!: FormGroup;
  constructor(
    public mockService: MockService,
    private fb: FormBuilder,
    private invitationService: InvitationService
  ) {
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      name: [, [Validators.required]],
      mail: [, [Validators.required, Validators.email]],
      gender: [, [Validators.required]],
      companyName: [, [Validators.required]],
      title: [, [Validators.required]],
      address: [, [Validators.required]],
      participationType: [, [Validators.required]],
      phone: [, [Validators.required]],
      department: [, [Validators.required]],
      aboutUs: [, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  post() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      Swal.fire({
        icon: 'error',
        title: 'Tüm alanaları doldurunuz.',
        text: 'Lütfen * ile belirtilen tüm alanları doğru birşekilde doldurunuz!',
      });
      return;
    }
    // Tüm kontrollerden geçerse istek at
    this.invitationService.pustInvit(this.form.value).subscribe((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Kayıt Başarılı.',
        text: 'Kaydınız başarıyla alınmıştır. İlginiz için teşekkür ederiz.',
      }).then(({ value }) => {
        this.form.reset();
      });
    });
  }
}
