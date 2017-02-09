import {Component, NgModule} from '@angular/core';
import './Application.component.scss'

@Component({
    selector: 'application',
    templateUrl: './src/Application/ApplicationComponent.html',
    styleUrls: [
        './src/Application/Application.component.scss'
    ]
})
export class ApplicationComponent {
    hello: string;

    constructor() {
        this.hello = "Hello World";
    }
}