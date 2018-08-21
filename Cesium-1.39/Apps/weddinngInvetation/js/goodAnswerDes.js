let goodAnswerDes = [];




let GAhtml = {
    start:buttonStyle+`<span><h4 class="titleMessageSize">`,
    middle:`</h4><h1 class="messageSize">`,
    end:`</h1></span>`,
};

for (let i = 0; i< GAtext.length;i++){
    goodAnswerDes.push(GAhtml.start + GAtext[i].text +GAhtml.middle + GAtext[i].emoji + GAhtml.end);
}
