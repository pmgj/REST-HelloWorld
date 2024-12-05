function postJSON() {
    let form = document.forms["postJSONtoTEXT"];
    let obj = { nome: form.nome.value, idade: form.idade.value };
    let xhr = new XMLHttpRequest();
    xhr.onload = () => alert(xhr.responseText);
    xhr.open("post", "webresources/hello/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(obj));
}
function postXML() {
    let form = document.forms["postXMLtoTEXT"];
    let obj = `<pessoa><nome>${form.nome.value}</nome><idade>${form.idade.value}</idade></pessoa>`;
    let xhr = new XMLHttpRequest();
    xhr.onload = () => alert(xhr.responseText);
    xhr.open("post", "webresources/hello/xml");
    xhr.setRequestHeader("Content-Type", "application/xml");
    xhr.send(obj);
}
function postText() {
    let form = document.forms["postFORMtoTEXT"];
    let xhr = new XMLHttpRequest();
    xhr.onload = () => alert(xhr.responseText);
    xhr.open("post", "webresources/hello/plain");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("mensagem=" + form.mensagem.value);
}
function postForm2() {
    let form = document.forms["postFORM2toTEXT"];
    let xhr = new XMLHttpRequest();
    xhr.onload = () => alert(xhr.responseText);
    xhr.open("post", "webresources/hello/plain2");
    xhr.send(new FormData(form));
}
function postForm3() {
    let form = document.forms["postFORM2toJSON"];
    let xhr = new XMLHttpRequest();
    xhr.onload = () => alert(xhr.responseText);
    xhr.open("post", "webresources/hello/plain2");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(new FormData(form));
}
function init() {
    document.querySelector("input[name='botaoJSON']").onclick = postJSON;
    document.querySelector("input[name='botaoXML']").onclick = postXML;
    document.querySelector("input[name='botaoPOST']").onclick = postText;
    document.querySelector("input[name='botaoFORM2']").onclick = postForm2;
    document.querySelector("input[name='botaoFORM3']").onclick = postForm3;
}
onload = init;