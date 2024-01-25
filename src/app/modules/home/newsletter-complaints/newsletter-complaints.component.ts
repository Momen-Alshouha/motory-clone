import { Component, ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { APP } from '../../../app.const';

@Component({
  selector: 'app-newsletter-complaints',
  templateUrl: 'newsletter-complaints.component.html',
  styleUrls: ['newsletter-complaints.component.scss'],
})
export class ContactInquiriesComponent {

  public msgSubmitResponse!: string;
  public requested = false;
  public emailExist = new BehaviorSubject<boolean>(false);

  newsletterForm: FormGroup;

  constructor(private fb: FormBuilder, private _http: HttpClient) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  getWhatsAppIcon(): string {
    return 'https://jo.motory.com/images/whatsapp.svg';
  }

  getWhatsAppLink(): string {
    return 'https://api.whatsapp.com/send?phone=966566573615';
  }

  subscribeNewsSubmit(): void {
    if (this.newsletterForm.valid) {
      const email = this.newsletterForm.value.email;
      this._http
        .get(`${APP.BASE_URL}${APP.API.HOME.SUBSCRIBE_NEWS}`, { params: { email } })
        .subscribe((res: any) => {
          this.requested = true;
          this.handleSubscriptionResponse(res);
        });
    }
  }

  private handleSubscriptionResponse(response: any): void {
    if (response.status === 200) {
      this.emailExist.next(response?.data?.is_subscribed);
      this.msgSubmitResponse = response.message;
    } else {
      this.msgSubmitResponse = response.errors[0].errors;
    }
  }
}
