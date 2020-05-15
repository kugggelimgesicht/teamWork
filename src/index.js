const numeral = require('numeral');

function onFormLoaded() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `json.json`, true);
    xhr.send(null);
    xhr.onload = () => {
        const result = JSON.parse(xhr.responseText);
        renderResults(result);
    }
}
onFormLoaded()

function renderResults(set) {
    const container = document.getElementById('container');

    set.forEach((item) => {
        container.insertAdjacentHTML('beforeend',`
            <div id = "div1">
            <tr>    
                <td>${item.volume}</td>
                <td>${item.date}</td>
                <td>${numeral(item.price).format('$10,000.00')}</td>
            </tr>
            <div>
        `);
    })
}

document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );
        
        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };
    
    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
    
});