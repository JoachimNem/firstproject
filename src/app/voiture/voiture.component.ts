import { Component } from "@angular/core";

@Component({
    selector: 'app-voiture',
    templateUrl: './voiture.component.html',
    styleUrls: ['./voiture.component.css']

})

export class VoitureComponent {
    marque = 'BMW';
    statut = 'démarrée'
}
