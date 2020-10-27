const submitBtn = document.querySelector('#submitBtn');
const output = document.getElementById('output');
let duomenuModal = document.getElementById('duomenu_modalas');
var data = document.getElementById('date');
var numeris = document.getElementById('number');
var laikas = document.getElementById('distance');
var kelias = document.getElementById('name');

var deleteIndex, editIndex;
var mainModalButton = document.getElementById('main_modal_mygtukas');

var redaguotiDuomenis = false;
const duomenys = [];

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
   

// istrinami suvesti duomenys is input'u

    document.querySelector('#name').value;
    document.querySelector('#number').value = '';
    document.querySelector('#distance').value = '';
    document.querySelector('#date').value = '';

        var editButton = document.createElement('button');
        editButton.classList.add('redaguoti');
        editButton.innerHTML = 'redaguoti';
        var editTd = document.createElement('td');
        editTd.appendChild(editButton);
        tr.appendChild(editTd);
        tbody.appendChild(tr);

});



// paspaudus ant mygtuko, istrinama eilute

output.addEventListener('click', function (e) {

    if (e.target.classList.contains('dell')) 
    
    var result = confirm("do you really really want to delete?");
    if (result) {

        e.target.parentElement.parentElement.remove();
}});




output.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('redaguoti')) {
        duomenuModal.classList.add('modal_overlay--active');
        editIndex = e.target.parentElement.parentElement.rowIndex - 1;
        // sudedam duomenis is masyvo i modalo inputus
        data.value = duomenys[editIndex][0];
        numeris.value = duomenys[editIndex][1];
        laikas.value = duomenys[editIndex][2];
        kelias.value = duomenys[editIndex][3];
        mainModalButton.innerHTML = 'Redaguoti';
        redaguotiDuomenis = true;
    }
})