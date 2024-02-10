const expand = document.querySelectorAll('.expand-sign');

function handleExpandClick(event) {
    let parent = event.currentTarget;
    let ans = parent.parentNode.nextElementSibling;
    let plusSvg = parent.children[0]; 
    let minusSvg = parent.children[1];
    if (ans.style.display == 'none') {
        ans.style.display = 'block';
        plusSvg.style.display = 'none';
        minusSvg.style.display = 'block';
    }
    else {
        ans.style.display = 'none';
        plusSvg.style.display = 'block';
        minusSvg.style.display = 'none';
    }
    
}

expand.forEach(function(element) {
    element.addEventListener('click', handleExpandClick);
});