function postJSON() {
    let obj = { nome: document.forms[1].nome.value, idade: document.forms[1].idade.value };
    let xhr = new XMLHttpRequest();
    xhr.onload = () => alert(xhr.responseText);
    xhr.open("post", "webresources/hello/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(obj));
}
function postXML() {
    let obj = `<pessoa><nome>${document.forms[2].nome.value}</nome><idade>${document.forms[2].idade.value}</idade></pessoa>`;
    let xhr = new XMLHttpRequest();
    xhr.onload = () => alert(xhr.responseText);
    xhr.open("post", "webresources/hello/xml");
    xhr.setRequestHeader("Content-Type", "application/xml");
    xhr.send(obj);
}
function postText() {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => alert(xhr.responseText);
    xhr.open("post", "webresources/hello/plain");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("mensagem=" + document.forms[3].mensagem.value);
}
function init() {
    document.querySelector("input[name='botaoJSON']").onclick = postJSON;
    document.querySelector("input[name='botaoXML']").onclick = postXML;
    document.querySelector("input[name='botaoPOST']").onclick = postText;
}
onload = init;