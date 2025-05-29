import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ModalComponent } from './shared/modal/modal.component';
import { ModalService } from './shared/serives/modal.service';
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  inputVal: any
  constructor(private toggle: ModalService) {

  }

  isOpenModal() {
    this.toggle.setModal(true)
  }

  ngOnInit(): void {

  }

  speakVoice() {
    const utterance = new SpeechSynthesisUtterance(this.inputVal);
    window.speechSynthesis.speak(utterance);
    window.navigator.vibrate([200, 100, 200]);
  }
  
  vibrate() {
    window.navigator.vibrate([200, 100, 200]);
  }
}
