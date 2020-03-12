import { Component, Input } from '@angular/core';

@Component({
    selector: 'shared-available',
    templateUrl: './available-sign.component.html',
    styleUrls: ['./available-sign.component.css']
})

export class AvailableSignComponent{

    @Input() available : boolean;
    
}