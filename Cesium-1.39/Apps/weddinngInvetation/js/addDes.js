







let weddingPlace2;

if( !isMobileDevice ) {
    weddingPlace2 = `
    `+buttonStyle+`
    <span dir="rtl">
    <h2 style="text-align: center;">נשמח שתאשרו את השתתפותכם באירוע</h2>
     <p>
        <a href="https://www.facebook.com/events/589872901358553/?ti=cl" target="_blank" >
            <button style="color: BLACK" class="button button2 facebook-blue all-line border-size" >הצטרף לאירוע בפייסבוק</button>
        </a>
        </p>
        <button style="color: BLACK" class="button-empty button3 "
        onClick="parent.openInNewTab(parent.whatsappLink)">אשר השתתפות בווצאפ</button> 
        <button style="color: BLACK" class="button-empty button3"
        onClick="parent.window.open(parent.addToCalendar)">הוסף ליומן</button>        
        <button style="color: BLACK" class="button-empty button3 "
        onClick="parent.window.open(parent.mailLink)">אשר השתתפות במייל</button>
        <p>
        <a href="./Apps/weddinngInvetation/asserts/pdf/wedding invitation gali & eitan.pdf" target="_blank" >
            <button style="color: BLACK" class="button button2 green all-line border-size" >⬇הורד את ההזמנה⬇</button>
        </a>
        </p>
    </span>`;


    finalPlace.description = `
    `+buttonStyle+`
    <span dir="rtl">
    <h1 align="center">כל הכבוד! הגעת להזמנה!</h1>
    <!--<h1 align="center">ניצחת במשחק והגעת להזמנה</h1>-->
    <h2 style="text-align: center;">עין שוקו נובע בדרום רמת הגולן כקילומטר ממערב לקיבוץ מבוא חמה, הצופה לכנרת ואל הרי הגליל</h2>
    <h2 style="text-align: center;">נוף מקסים</h2>
    <button style="color: BLACK" class="button button2 green all-line" onClick="parent.toWeddingPlace()" >להזמנה... ולאולם</button>

   
    <!--<h2>-->
    <!--בחר דרך לאשר השתתפות-->
    <!--</h2>-->
        <!--<button style="color: BLACK" class="button-empty button3 "-->
        <!--onClick="parent.openInNewTab(parent.whatsappLink)">אשר השתתפות בווצאפ</button> -->
        <!--<button style="color: BLACK" class="button-empty button3 "-->
        <!--onClick="parent.window.open(parent.mailLink)">אשר השתתפות במייל</button>-->
        <!--<p>-->
        <!---->
        <!--<a href="./asserts/img/img1.png" target="_blank" download="איתן וגלי מתחתנים - ההזמנה.png">-->
        <!--</a>-->
        <!--</p>-->
    </span>`;
}else{
    weddingPlace2 = `
    `+buttonStyle+`
    <span dir="rtl">
    <!--<h4>אולם: אולמי השרון</h4>-->
    <!--<h4>תאריך: אדר</h4>-->
    <h2 style="text-align: center;">נשמח שתאשרו את השתתפותכם באירוע</h2>
    <p>
        <button style="color: BLACK" class="button-empty button3 facebook-blue"
        onClick="parent.window.open('https://www.facebook.com/events/589872901358553/?ti=cl')">לאירוע בפייסבוק</button> 
        </p>
        <button style="color: BLACK" class="button-empty button3 "
        onClick="parent.openInNewTab(parent.whatsappLink)">אשר בווצאפ</button> 
        <p>
        <button style="color: BLACK" class="button-empty button3"
        onClick="parent.window.open(parent.addToCalendar)">הוסף ליומן</button> 
        </p>
        <p>
        <button style="color: BLACK" class="button-empty button3 "
        onClick="parent.window.open(parent.mailLink)">אשר במייל</button>
        </p>
        <p>
        <a href="./Apps/weddinngInvetation/asserts/pdf/wedding invitation gali & eitan.pdf" target="_blank">
            <button style="color: BLACK" class="button button2 green all-line border-size" >⬇הורד את ההזמנה⬇</button>
        </a>
        </p>
    </span>`;

    finalPlace.description = `
    `+buttonStyle+`
    <span dir="rtl">
    <h1 align="center">כל הכבוד! הגעת להזמנה!</h1>
    <!--<h1 align="center">ניצחת במשחק והגעת להזמנה</h1>-->
    <h3 style="text-align: center;">עין שוקו נובע בדרום רמת הגולן כקילומטר ממערב לקיבוץ מבוא חמה, הצופה לכנרת ואל הרי הגליל</h3>
    <h2 style="text-align: center;">נוף מקסים</h2>
        <button style="color: BLACK" class="button button2 green all-line" onClick="parent.toWeddingPlace()" >להזמנה... ולאולם</button>

   
    <!--<h2>-->
    <!--בחר דרך לאשר השתתפות-->
    <!--</h2>-->
        <!--<button style="color: BLACK" class="button-empty button3 "-->
        <!--onClick="parent.openInNewTab(parent.whatsappLink)">אשר השתתפות בווצאפ</button> -->
        <!--<button style="color: BLACK" class="button-empty button3 "-->
        <!--onClick="parent.window.open(parent.mailLink)">אשר השתתפות במייל</button>-->
        <!--<p>-->
        <!---->
        <!--<a href="./asserts/img/img1.png" target="_blank" download="איתן וגלי מתחתנים - ההזמנה.png">-->
        <!--</a>-->
        <!--</p>-->
    </span>`;
}


var falseAnswer = viewer.entities.add({
    name:'תשובה לא נכונה',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([
            -57.362022399902344,-17.45940269194599,
            -54.703330993652344,-17.464642709350755,
            -54.65239778591348,-19.32863158655128,
            -57.323570251464844,-19.343540769982056
        ]),
        height: 0,
        material: falsePictures[randInt(0,10)],
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }

});
falseAnswer.polygon.height = 4250000;


var goodAnswerDes = [
    buttonStyle+`<span>
<h4 class="titleMessageSize">כל הכבוד!</h4>
        <h1 class="messageSize">
🎊👌🎊
        </h1>
    </span>`,
    buttonStyle+`<span>
<h4 class="titleMessageSize">קלעת בול!</h4>
        <h1 class="messageSize">
🎉✌🎉
        </h1>
    </span>`,
    buttonStyle+`<span>
<h4 class="titleMessageSize">מרשים!</h4>
        <h1 class="messageSize">
🎇😎🎇
        </h1>
    </span>`,
    buttonStyle+`<span>
<h4 class="titleMessageSize">ניחוש טוב!</h4>
        <h1 class="messageSize">
😊😊😊
        </h1>
    </span>`,
    buttonStyle+`<span>
<h4 class="titleMessageSize">נכון מאוד!</h4>
        <h1 class="messageSize">
👏👏👏
        </h1>
    </span>`,
    buttonStyle+`<span>
<h4 class="titleMessageSize">מדויק!</h4>
        <h1 class="messageSize">
💥💯💥
        </h1>
    </span>`,
    buttonStyle+`<span>
<h4 class="titleMessageSize">בינגו!</h4>
        <h1 class="messageSize">
🎉💖🎉
        </h1>
    </span>`,
    buttonStyle+`<span>
<h4 class="titleMessageSize">שולטט!</h4>
        <h1 class="messageSize">
🎇🎉🎊
        </h1>
    </span>`,
    buttonStyle+`<span>
<h4 class="titleMessageSize">אין כמוך!</h4>
        <h1 class="messageSize">
🎊💪🎊
        </h1>
    </span>`,
    buttonStyle+`<span>
<h4 class="titleMessageSize">מהמם!</h4>
        <h1 class="messageSize">
🎉🥂🎉
        </h1>
    </span>`,
];

let QParts = {
    style:buttonStyle,
    headLine:`<span><h1 dir="rtl">`,
    closeHeadLine:`</h1>`,
    goodAnswer:` <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.cesiumObjects[`,
    goodMiddle1:`],parent.cesiumObjects[`,
    goodMiddle2:`])"><span>`,
    goodAnswerClose:`</span></button> `,
    wrongStart:`<button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.cesiumObjects[`,
    wrongMiddle:`])"><span>`,
    wrongClose:`</span></button>`,
}


for (let i=0; i< cesiumObjects.length -1; i++){
    console.log(i,QText[i].question);
    randQ = randInt(0,3);
    cesiumObjects[i].description = QParts.style + QParts.headLine + QText[i].question + QParts.closeHeadLine;
    if(randQ === 0){
        cesiumObjects[i].description +=  QParts.goodAnswer +i + QParts.goodMiddle1+(i+1) + QParts.goodMiddle2+QText[i].good+ QParts.goodAnswerClose;
        cesiumObjects[i].description += QParts.wrongStart + i + QParts.wrongMiddle + QText[i].w1 + QParts.wrongClose;
        cesiumObjects[i].description += QParts.wrongStart + i + QParts.wrongMiddle + QText[i].w2 + QParts.wrongClose;
    }else if(randQ === 1 ){
        cesiumObjects[i].description += QParts.wrongStart + i + QParts.wrongMiddle + QText[i].w2 + QParts.wrongClose;
        cesiumObjects[i].description += QParts.goodAnswer +i+QParts.goodMiddle1+(i+1) + QParts.goodMiddle2+QText[i].good+ QParts.goodAnswerClose;
        cesiumObjects[i].description += QParts.wrongStart + i + QParts.wrongMiddle + QText[i].w1 + QParts.wrongClose;
    }else{
        cesiumObjects[i].description +=QParts.wrongStart + i + QParts.wrongMiddle + QText[i].w1 + QParts.wrongClose;
        cesiumObjects[i].description +=QParts.wrongStart + i + QParts.wrongMiddle + QText[i].w2 + QParts.wrongClose;
        cesiumObjects[i].description += QParts.goodAnswer +i+QParts.goodMiddle1+(i+1) + QParts.goodMiddle2+QText[i].good+ QParts.goodAnswerClose;
    }

}
