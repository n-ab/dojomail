import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [
    {
      email: "bill@gates.com",
      importance:  "High",
      subject:  "New Windows",
      content:  "Windows XI will launch in year 2100."
    },
    {
      email: "TaylorSwift@ilovemyself.com",
      importance: "Utter Lowest",
      subject: "I am so dope",
      content: "Let me take a selfie."
    },
    {
      email: "JeebusTheTroll@admin.trolllyfe.com",
      importance: "High",
      subject: "This site sux",
      content: "Lolxor Lolxor I Am The Messuh-Troll Lolxor"
    },
    {
      email: "Elon@Musk.com",
      importance: "So High",
      subject: "Bruh do you even future?",
      content: "I Am God."
    }
  ]
}
