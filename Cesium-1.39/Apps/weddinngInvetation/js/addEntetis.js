function requestFullScreen() {

    var el = document.body;

    // Supports most browsers and their versions.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen
        || el.mozRequestFullScreen || el.msRequestFullScreen;

    if (requestMethod) {

        // Native full screen.
        requestMethod.call(el);

    } else if (typeof window.ActiveXObject !== "undefined") {

        // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");

        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if( isMobile.any() ) {
    window.addEventListener('load', function () {
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var source = audioCtx.createBufferSource();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'Cesium-1.39/Apps/weddinngInvetation/asserts/mp3/Simon & Garfunkel - Baby Driver.mp3');
        xhr.responseType = 'arraybuffer';
        xhr.addEventListener('load', function (r) {
            audioCtx.decodeAudioData(
                xhr.response,
                function (buffer) {
                    source.buffer = buffer;
                    source.connect(audioCtx.destination);
                    source.loop = false;
                });
            source.start(0);
        });
        xhr.send();
    });
    buttonStyle = `
<style>
    .button {
    
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}

/*.button-empty {*/
   /*display: inline-block;*/
  /*border-radius: 0.5px;*/
  /*background-color: #4CAF50;*/
  /*border: none;*/
  /*color: BLACK;*/
  /*text-align: center;*/
  /*font-weight: bold;*/
  /*font-size: 15px;*/
  /*padding: 14px;*/
  /*transition: all 0.5s;*/
  /*cursor: pointer;*/
  /*margin: 5px;*/
/*}*/


.button3 {
    /*background-color: white; */
    /*color: black; */
    /*border: 2px solid #f44336;*/
}

.all-line{
    width: 100%;
}

.button3:hover {
    /*background-color: #f44336;*/
    /*color: white;*/
}

.button2:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

.green{
    background-color: #4CAF50; /* Green */
}

.blue{
    background-color: #4CAF50; /* Green */
}

.center{
    position: absolute;
    right: 36%;
}

.button4 {
  display: inline-block;
  border-radius: 0.5px;
  background-color: #f4511e;
  border: none;
  color: BLACK;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  padding: 14px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button4 span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button4 span:after {
  content: '\\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button4:hover span {
  padding-right: 25px;
}

.button4:hover span:after {
  opacity: 1;
  right: 0;
}

</style>
`;
}

