const Headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const array = [];
heading.forEach(element => {
    array.push(element.localName);
});
console.log(array);

function orgHeadings() {
    let i = 0;
    while (i < array.length) {
        const e = document.getElementsByTagName(array[i])[0];
            if ( e === `h${1}` ) 
            {
                console.log('Nothing changed')
            }

            else if ( e !== `h${1}` ) 
            {
                const d = document.createElement(`h${i + 1}`);
                d.innerHTML = e.innerHTML;  
                e.parentNode.replaceChild(d, e);
                console.log(e)
                console.log(d)
                i++;
             }

}};

orgHeadings();