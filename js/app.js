document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("search").addEventListener("click", function() {

        let input = document.getElementById("search_box").value.trim();

        input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        let url = "superheroes.php?query=" + input;
        
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById("result").innerHTML = data;
            })
            .catch(error => console.log(error));
    });
});
