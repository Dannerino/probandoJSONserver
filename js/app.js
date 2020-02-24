
/*  json-server --watch db.json */

/* AJAX */

function request(url,gato) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.timeout = 2000;
        
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.status);
                }
            }
        };
        xhr.ontimeout = function () {
            reject('timeout')
        };
        xhr.open('post', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(gato);
    });
}


/* CREAR EL OBJETO */

document.getElementById("enviar").addEventListener("click", () => {

    var objetito = { name: document.getElementById("Nombre").value, email: document.getElementById("Email").value, tfno: document.getElementById("Tfno").value, opcion: document.getElementById("selectivoMan").value };

    var myJSON =JSON.stringify(objetito);


    var peticion = request("http://localhost:3000/personas",myJSON);

});


