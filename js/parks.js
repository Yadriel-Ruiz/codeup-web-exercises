
    let yellowStone = document.querySelector('#national-parks-yellowstone-div');
    let craterYellow = document.querySelector('#national-parks-crater-div');
    let yellowHala = document.querySelector('#national-parks-hala-div');

    let fontBold = document.querySelectorAll('h3');

    fontBold.forEach(function (element) {
    element.addEventListener('click', function () {
        const child = this.nextElementSibling;
        if (child && child.tagName === 'UL') {
            const childElem = child.children;

            const childArray = Array.from(childElem);

            childArray.forEach(function (li) {
                li.style.fontWeight = 'bold';
            });
        }
    });
});

    let listItems = document.querySelectorAll('li');

    listItems.forEach(function (li) {
    li.addEventListener('click', function () {
        // Get the parent ul of the clicked li
        let parentUl = this.closest('ul');

        // Check if the parentUl exists
        if (parentUl) {
            // Get all li elements in the parentUl
            let childLiElements = parentUl.querySelectorAll('li');

            // Reset the font color for all li elements in the parentUl
            childLiElements.forEach(function (childLi) {
                childLi.style.color = '';  // Reset to default color
            });

            // Set the font color to blue for the first li in the parentUl
            childLiElements[0].style.color = 'blue';
        }
    });
});

    function changeBackgroundColorToYellow(container) {
    const ulElement = container.querySelector('ul');
    if (ulElement) {
    const liElements = ulElement.querySelectorAll('li');
    const selectLast = liElements[liElements.length - 1];

    if (selectLast) {
    selectLast.style.backgroundColor = 'yellow';
    selectLast.style.color = 'black';
}
}
}

    function yellowColor() {
    changeBackgroundColorToYellow(yellowStone);
}

    function halaColor() {
    changeBackgroundColorToYellow(yellowHala);
}

    function yellowCrater() {
    changeBackgroundColorToYellow(craterYellow);
}

    function changeAll() {
    yellowCrater();
    yellowColor();
    halaColor();
}

    let button1 = document.getElementById('parks');
    button1.addEventListener('click', changeAll);