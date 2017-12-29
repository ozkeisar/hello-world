
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
    onClick="parent.goodAnswer(parent.Q3,parent.Q4)"><span>23</span></button> 
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q3)"><span>25</span></button>
</span>`;



Q4.description = `
`+buttonStyle+`
    <span>
<h1 dir="rtl">
מה שמה המקורי שלי גלי?
</h1>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q4)"><span>גלי</span></button>
    <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.wrongAnswer(parent.Q4)"><span>גליה</span></button>
       <button class="button4 all-line" style="vertical-align:middle"
    onClick="parent.goodAnswer(parent.Q4,parent.finalPlace)"><span>גל</span></button> 
</span>`;
