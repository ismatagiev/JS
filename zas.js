let students = [];
let id_current = 0;

//Загрузка информации с сайта
function load_from_site(){
    $.get('http://217.71.129.139:4035/students.php', function(data){
        students = JSON.parse(data)['response']
    });
}

function load_all() {
    let table = document.getElementById('tbl_all')
    for (let i = 0; i < students.length; i++) {
        let id = students[i].id
        let name = students[i].name
        let surname = students[i].surname

        //создание строки и 3 ячеек
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')

        //Запись данный в ячейки
        td1.textContent = id
        td2.textContent = name
        td3.textContent = surname
    
        //вствка ячейки в строку
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    
        //вставка строки в таблицу
        table.appendChild(tr)
    }
}



function load_student(id) {
    let head = document.getElementById('zagolovok')
    head.textContent = 'Информация о студенте № ' + students[id].id
    let name_info = document.getElementById('name')
    name_info.textContent = students[id].name
    let surname_info = document.getElementById('surname')
    surname_info.textContent = students[id].surname

    if (id_current === 0) document.getElementById('btn_previous').disabled = true 
    if (id_current < students.length-1){ 
        document.getElementById('btn_next').disabled = false
    }
    if (id_current > 0) document.getElementById('btn_previous').disabled = false
    if (id_current === students.length-1){
        document.getElementById('btn_next').disabled = true
    }   

}


 function next() {
 	id_current +=1;
 	 load_student(id_current)
 	}

function previous() {
	id_current -= 1;
	load_student(id_current)
}

