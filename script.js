const body = document.querySelector('body');
const input = document.createElement('textarea');
const board = document.createElement('div');
board.className = 'board';
input.className = 'input-board';
body.append(input);
body.append(board);

const keyboardKeys = [96,49,50,51,52,53,54,55,56,57,48,45,61,113,119,101,114,116,121,117,105,111,112,91,93,92,97,115,100,102,103,104,106,107,108,59,39,122,120,99,118,98,110,109,44,46,47]

function init() {
  let out = '';
  for (let i = 0; i <= keyboardKeys.length; i++) {
    if (i == 13) {
      out += '<div class="longkey">Backspace</div><div class="clearfix"></div><div class="smallkey">Tab</div>';
    }
    if (i == 26) {
      out += '<div class="key">Del</div><div class="clearfix"></div><div class="longkey">Caps Lock</div>'
    }
    if (i == 37) {
      out += '<div class="midkey">Enter</div><div class="clearfix"></div><div class="longkey">Shift</div>';
    }
    if (i == 47) {
      out += '<div class="key">↑</div><div class="midkey">Shift</div><div class="clearfix"></div><div class="smallkey">Ctrl</div><div class="smallkey">Win</div><div class="smallkey">Alt</div><div class="space"></div><div class="smallkey">Alt</div><div class="smallkey">Ctrl</div><div class="key">←</div><div class="key">↓</div><div class="key">→</div>';
    }
    out += '<div class="key" data="' + keyboardKeys[i] + '" >' + String.fromCharCode(keyboardKeys[i]) + '</div>';
  }
  document.querySelector('.board').innerHTML = out;
}
init();

document.onkeypress = function(event) {
  document.querySelectorAll('.board .key').forEach(function(element) {
    element.classList.remove('active');
  })
  document.querySelector('.board .key[data="' + event.keyCode +'"]').classList.add('active');
}
