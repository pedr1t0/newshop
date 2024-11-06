var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        
        for (var j = 0; j < coll.length; j++) {
            var otherContent = coll[j].nextElementSibling;
            if (otherContent.style.display === "block") {
                otherContent.style.display = "none";
                coll[j].classList.remove("active");
            }
        }
        
      
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
