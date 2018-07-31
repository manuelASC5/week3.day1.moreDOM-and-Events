function changePos(pos,offset){
    const num= +pos.slice(0,pos.length-2);
    return (num + offset) + 'px';
}
for(let article of document.querySelectorAll("article")){
    article.addEventListener("mousedown",function(mouse){
        document.addEventListener("mousemove", dragging);

        function dragging(mouse){
            console.log(mouse);
            article.style.top= changePos(article.style.top,mouse.movementY);
            article.style.left =changePos(article.style.left, mouse.movementX);
        }

        document.addEventListener("mouseup", function(mouse){
            document.removeEventListener("mousemove", dragging);
        });
    });
}