let i = 0;
function startGame() {
    let inter = setInterval(function(){
        if(i === 50.5){
            clearInterval(inter);
            document.getElementById("temp").style.display = "none"
        }
        document.getElementById("temp").style.marginTop = -i+'%';
        i = i+0.5;
        // console.log('fff '+i,document.getElementById("temp").style.marginTop );
    }, 0.5);
}



if( isMobileDevice ) {
    document.body.style.backgroundImage = "url('/Apps/weddinngInvetation/asserts/img/cover_2_end1.jpg')";
    document.getElementById('startGameButton').style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)";
//          alert('Mobile');
    document.getElementById('startGameButton').style.right = "27%";
    document.getElementById('startGameButton').style.fontSize = "30px";
    document.getElementById('startGameButton').style.top = "40%";
    document.getElementById('headline').style.fontSize = "60px";
    document.getElementById('quickInvite').style.padding = "9px 12px";
    document.getElementById('quickInvite').style.fontSize = "15px";
    document.getElementById('quickInvite').style.right = "35%";
    document.getElementById('quickInvite').style.top = "50%";



    var moveARODown = setInterval(function () {
        var tempTop = document.getElementsByClassName('cesium-infoBox cesium-infoBox-visible');
        if(tempTop[0]){
            if(tempTop[0].style){
                document.getElementsByClassName('cesium-infoBox cesium-infoBox-visible')[0].style.top = "55%";
                document.getElementsByClassName('cesium-infoBox cesium-infoBox-visible')[0].style.bottom = "0px";
                document.getElementsByClassName('cesium-infoBox cesium-infoBox-visible')[0].style.width = "100%";
                clearInterval(moveARODown);
            }
        }
    },50)

}

