import { Component } from '@angular/core';
import { fadeInOut } from '../../shared/animation';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ ReactiveFormsModule,MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  animations: [fadeInOut],
})
export class BookingComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Form submitted successfully!');
      this.contactForm.reset();
    }
  }
}
