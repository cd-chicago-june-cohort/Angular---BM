import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';

  buttons = [ 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON' ]

  onOff = [ false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true,  ]

  switch(index) {
    if(this.buttons[index] === "OFF"){
      this.onOff[index] = true
      this.buttons[index] = 'ON'
      }
    else{
      this.buttons[index] = 'OFF'
      this.onOff[index] = false
    }
  }

  on(onOff) {
    for (var i = 0; i<onOff.length; i++) {
      onOff[i] = true
    }
  }

  off(onOff) {
    for (var i = 0; i<onOff.length; i++) {
      onOff[i] = false
    }
  }

  odds(onOff) {
    for (var i = 0; i<onOff.length; i++) {
      if (i%2===0) {
        if (onOff[i]===true) {
        onOff[i] = false
        }
        else {
          onOff[i] = true
        }
      }
    }
  }

  evens(onOff) {
    for (var i = 0; i<onOff.length; i++) {
      if (i%2===1) {
        if (onOff[i]===true) {
        onOff[i] = false
        }
        else {
          onOff[i] = true
        }
      }
    }
  }

}
