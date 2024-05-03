
document.querySelector(".search1").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var pesquisa = document.getElementById("searchInput").value.toLowerCase();
    
    if (pesquisa === "camisas" || pesquisa === "camisa") {
        window.location.href = "/HTML/cat-camisas.html";
    } else if(pesquisa === "calças" || pesquisa ==="calcas" || pesquisa === "calca" || pesquisa === "calça") {
      window.location.href = "/HTML/cat-calcas.html";
    }else if(pesquisa === "tenis" || pesquisa == "sapatos" || pesquisa == "sapato"){
      window.location.href = "/HTML/cat-tenis.html"
    }
    else{
      alert("Nenhum resultado encontrado para '" + pesquisa + "'.");
    }
});

