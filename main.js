const submitBtn = document.querySelector('#submitBtn');
const output = document.getElementById('output');

// sukurti ivyki paspaudus mygtuka paimami duomenys
submitBtn.addEventListener('click', function () {
    const name = document.querySelector('#name').value;
    const number = document.querySelector('#number').value;
    const distance = document.querySelector('#distance').value;
    const date = document.querySelector('#date').value;

// patikrinti ar nera tusciu duomnenu    
    if(name, number, distance, date =='') {
        alert ('reikia užpildyti tuščius laukus');
        return false;
    }
// sukuriamas duomenu masyvas
    const arrData = [name, number, distance, date];
// sukuriama nauja eilute duomenims ikelti
    const tr = document.createElement('tr');

    
// sukuriamas ciklas duomenu kelimui i lentele
   
    for (let i = 0; i < arrData.length; i++) {
        const td = document.createElement('td');
        const text = document.createTextNode(arrData[i]);
        td.appendChild(text);
        tr.appendChild(td);
    }

//    komanda perkelti duomenis 
    output.appendChild(tr);
// sukuriamas mygtukas sukeltu duomenu eilutei istrinti
    const trinti = `<td><button class="dell">Trinti</button></td>`;

    
// ikeliamas mygtukas
    tr.innerHTML += trinti;


    // const editButton = `<td><button class="redaguoti">Redaguoti</button></td>`;
    // tr.innerHTML += redaguoti;
    // var editTd = document.createElement('td');
    // editTd.appendChild(editButton);
    // tr.appendChild(editTd);
    // tbody.appendChild(tr);

        var editButton = document.createElement('button');
        editButton.classList.add('redaguoti');
        editButton.innerHTML = 'redaguoti';
        var editTd = document.createElement('td');
        editTd.appendChild(editButton);
        tr.appendChild(editTd);
        tbody.appendChild(tr);



// istrinami suvesti duomenys is input'u

    document.querySelector('#name').value = '';
    document.querySelector('#number').value = '';
    document.querySelector('#distance').value = '';
    document.querySelector('#date').value = '';
});


// paspaudus ant eilutes, pasikeicia spalva
output.addEventListener('click', function (event) {
    var tr = event.target.parentElement;
    tr.classList.toggle('salmon');
});

// paspaudus ant mygtuko, istrinama eilute

output.addEventListener('click', function (e) {

    if (e.target.classList.contains('dell')) 
    
    var result = confirm("do you really really want to delete?");
    if (result) {

        e.target.parentElement.parentElement.remove();
    }});

