







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
        <a href="./asserts/pdf/wedding invitation gali & eitan.pdf" target="_blank" >
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
        <a href="./asserts/pdf/wedding invitation gali & eitan.pdf" target="_blank">
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
        // material : Cesium.Color.RED.withAlpha(0.5),
        material: falsePictures[randInt(0,10)],
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }

});
falseAnswer.polygon.height = 4250000;


var goodAnswerDes = [
    `<span>
        <h1 style="text-align: center; font-size:500%;">
🎊👌🎊
        </h1>
    </span>`,
    `<span>
        <h1 style="text-align: center; font-size:500%;">
🎉✌🎉
        </h1>
    </span>`,
    `<span>
        <h1 style="text-align: center; font-size:500%;">
🎇😎🎇
        </h1>
    </span>`,
    `<span>
        <h1 style="text-align: center; font-size:500%;">
😊😊😊
        </h1>
    </span>`,
    `<span>
        <h1 style="text-align: center; font-size:500%;">
👏👏👏
        </h1>
    </span>`,
    `<span>
        <h1 style="text-align: center; font-size:500%;">
🥇🤩🥇
        </h1>
    </span>`,
    `<span>
        <h1 style="text-align: center; font-size:500%;">
🎉💖🎉
        </h1>
    </span>`,
    `<span>
        <h1 style="text-align: center; font-size:500%;">
🎇🎉🎊
        </h1>
    </span>`,
    `<span>
        <h1 style="text-align: center; font-size:500%;">
🎊💪🎊
        </h1>
    </span>`,
    `<span>
        <h1 style="text-align: center; font-size:500%;">
🎉🤙🎉
        </h1>
    </span>`,
];



Q1.description = `\
    `+buttonStyle+`\
    <span>\
<h1 dir="rtl">\
מהו שמו המלא של איתן?\
</h1>\
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q1,parent.Q2)"><span>איתן ישראל קיסר</span></button> \
     <button class="button4 all-line" style="vertical-align:middle"\
    onClick="parent.wrongAnswer(parent.Q1)"><span>איתן קיסר</span></button> \
     <button class="button4 all-line" style="vertical-align:middle"\
    onClick="parent.wrongAnswer(parent.Q1)"><span>איתן ישועה קיסר</span></button> \
</span>`;


/*
Q2.description = `
`+buttonStyle+`
    <span>
<h1 dir="rtl">
מה צבע העיניים של גלי?
</h1>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q2)"><span>ירוק ים</span></button>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q2)"><span>כחול עמוק</span></button>
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q2,parent.Q3)"><span>חום פלדה</span></button>
</span>`;*/


Q2.description = `
`+buttonStyle+`
    <span>
<h1 dir="rtl">
מה שמה המקורי שלי גלי?
</h1>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q2)"><span>גלי</span></button>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q2)"><span>גליה</span></button>
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q2,parent.Q3)"><span>גל</span></button> 
</span>`;



Q3.description = `
`+buttonStyle+`
    <span>
<h1 dir="rtl">
בן כמה איתן?
</h1>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q3)"><span>21</span></button>
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q3,parent.Q6)"><span>23</span></button> 
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q3)"><span>25</span></button>
</span>`;



//
// Q5.description = `
// `+buttonStyle+`
//     <span>
// <h1 dir="rtl">
// מה איתן הכי אוהב לעשות?
// </h1>
//     <button class="button4 all-line" style="vertical-align:middle"
//     onClick="parent.wrongAnswer(parent.Q5)"><span>לישון</span></button>
//     <button class="button4 all-line" style="vertical-align:middle"
//     onClick="parent.wrongAnswer(parent.Q5)"><span>לנגן</span></button>
//        <button class="button4 all-line" style="vertical-align:middle"
//     onClick="parent.goodAnswer(parent.Q5,parent.Q6)"><span>ללמוד תורה</span></button>
// </span>`;
//
//



Q6.description = `
`+buttonStyle+`
    <span>
<h1 dir="rtl">
מה התחביב של גלי?
</h1>
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q6,parent.Q7)"><span>לצלם</span></button> 
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q6)"><span>לשיר</span></button>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q6)"><span>לשטוף כלים</span></button>
</span>`;



Q7.description = `
`+buttonStyle+`
    <span>
<h1 dir="rtl">
איך איתן וגלי הכירו?
</h1>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q7)"><span>עשו תאונה ביחד</span></button>
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q7,parent.Q8)"><span>באתר שליש גן עדן</span></button> 
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q7)"><span>דרך חברים של חברים</span></button>
</span>`;




Q8.description = `
`+buttonStyle+`
    <span>
<h1 dir="rtl">
איפה גלי ואיתן נפגשו בפעם הראשונה?
</h1>
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q8,parent.Q9)"><span>בכרמלית</span></button> 
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q8)"><span>בקניון עזריאלי</span></button>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q8)"><span>פארק הירקון</span></button>
</span>`;


Q9.description = `
`+buttonStyle+`
    <span>
<h1 dir="rtl">
מהי ארץ המוצא המשותפת של איתן וגלי?
</h1>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q9)"><span>פולין</span></button>
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q9,parent.Q10)"><span>תימן</span></button> 
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q9)"><span>תורכיה</span></button>
</span>`;


Q10.description = `
`+buttonStyle+`
    <span>
<h1 dir="rtl">
באיזה מקום בעולם גם גלי וגם איתן היו?
</h1>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q10)"><span>פריז, צרפת</span></button>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q10)"><span>ניו יורק, ארה"ב</span></button>
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q10,parent.Q11)"><span>אומן, אוקראינה</span></button> 
</span>`;


Q11.description = `
`+buttonStyle+`
    <span>
<h1 dir="rtl">
איפה איתן הציע לגלי נישואין?
</h1>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q11)"><span>מיני ישראל</span></button>
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q11,parent.finalPlace)"><span>עין שוקו</span></button> 
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q11)"><span>בכותל</span></button>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q11)"><span>בבניאס</span></button>
</span>`;