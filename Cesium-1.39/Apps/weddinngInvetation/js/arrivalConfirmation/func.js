
function incPeopole() {
    console.log('dec',document.getElementById('numOfPeople').value);
    let value = parseInt(document.getElementById('numOfPeople').value);
    value++;
    document.getElementById('numOfPeople').value = value;
}
function decPeopole() {
    console.log('dec',document.getElementById('numOfPeople').value);
    let value = parseInt(document.getElementById('numOfPeople').value);
    value--;
    document.getElementById('numOfPeople').value = value;
}