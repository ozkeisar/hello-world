
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
