



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
