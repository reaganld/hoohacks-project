import { Component } from '@angular/core';
declare var Painterro: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent {
//backplateImgUrl
//initText
  ngOnInit() {
    Painterro({
      backgroundFillColorAlpha: 0.0,
      defaultSize: '128x128',
      defaultTool: 'brush',
      hiddenTools: ['crop', 'rotate', 'resize','open','bucket','text','select','arrow','pixelize','settings','rect'],
      toolbarPosition: 'top'
    }).show();
  }
}