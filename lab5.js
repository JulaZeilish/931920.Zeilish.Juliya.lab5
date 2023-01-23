document.getElementById('window_1').style.display = 'none';

function text_1() {
    var main = document.getElementById('main')
    main.style.opacity=0.5;
    var window = document.getElementById('window_1');
    window.style.display = 'block';
    window.onclick = function()
    {
      window.style.display = 'none';
      main.style.opacity=1;
    };
}

document.getElementById('window_2').style.display = 'none';

function text_2() {
  var main = document.getElementById('main')
  main.style.opacity=0.5;
  var window = document.getElementById('window_2');
  window.style.display = 'block';
  window.onclick = function()
  {
    window.style.display = 'none';
    main.style.opacity=1;
  };
}

document.getElementById('window_3').style.display = 'none';

function text_3() {
  var main = document.getElementById('main')
  main.style.opacity=0.5;
  var window = document.getElementById('window_3');
  window.style.display = 'block';
  window.onclick = function()
  {
    window.style.display = 'none';
    main.style.opacity=1;
  };
}