
question_1.description = `\
    `+buttonStyle+`\
    <span>\
<h1 dir="rtl">\
מהו שמו המלא של איתן?\
</h1>\
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q2)"><span>איתן ישראל קיסר</span></button> \
     <button class="button4 all-line" style="vertical-align:middle"\
    onClick="parent.wrongAnswer(parent.question_1)"><span>איתן קיסר</span></button> \
     <button class="button4 all-line" style="vertical-align:middle"\
    onClick="parent.wrongAnswer(parent.question_1)"><span>איתן ישועה קיסר</span></button> \
</span>`;



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
    onClick="parent.goodAnswer(parent.Q3)"><span>חום פלדה</span></button> 
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
    onClick="parent.goodAnswer(parent.finalPlace)"><span>23</span></button> 
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q3)"><span>25</span></button>
</span>`;
