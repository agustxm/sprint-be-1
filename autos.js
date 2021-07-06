document.getElementById("button").addEventListener("click", function() {
    var autoAIngresar = document.getElementById("autoAIngresar").value;
    var autosRegistrados = new Array();
    autosRegistrados.push(autoAIngresar);
    console.log(autosRegistrados);
    document.getElementById('ul').insertAdjacentHTML("beforeend", '<li>' + autosRegistrados + '</li><br>');
})