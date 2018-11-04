import { Component } from "@angular/core";

@Component ({
    selector:'mh-first',
    template: '<h2> My First Component</h2>'
    // templateUrl: './app.component.html',
    // styleUrls: ['./app.component.css']
})

export class FirstComponent {
    title= "app works!!";
}