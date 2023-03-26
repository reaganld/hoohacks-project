import { Component } from '@angular/core';
declare var Painterro: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent {

  ngOnInit() {
    Painterro().show();
  }
}
