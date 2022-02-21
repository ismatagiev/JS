let students = [];
let id_info = 0;

function load_from_site() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://217.71.129.139:4035/students.php');
	xhr.send();
	xhr.onload = function() {
		if (xhr.status != 200) {
			alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
		}
		else{
			students = JSON.parse(xhr.statusText)['response']
		}
	};
	xhr.onerror = function() {
		alert("Запрос не удался");
	};
}

function load_all() {
	let table = document.getElementsById('tbl_all')

for (let i = 0; i < students.length; i++) {
	let id = students[i].id
	let name = students[i].name
	let surname = students[i].surname
	let tr = document.createElement('tr')
	let td1 = document.createElement('td')
	let td2 = document.createElement('td')
	let td3 = document.createElement('td')
    
     td1.textContent = id
     td2.textContent = name
     td3.textContent = surname

     tr.appendChild(td1)
     tr.appendChild(td2)
     tr.appendChild(td3)

     table.appendChild(tr)
  
     }
}

function load_student(id) {
	let head = document.getElementById('zagolovok')
	console.log(students[id])
	head.textContent = 'Информация о студенте №' + students[id].id
     let name_info = document.getElementById('name')
     name_info.textContent=students[id].name
     let surname_info = document.getElementById('surname')
     surname_info.textContent=students[id].surname

     if (id_info == students.length - 1){
     	let btn_next = document.getElementById('next').disabled=true
     }
     else{
     	let btn_next = document.getElementById('next').disabled=false
     }
     
     if (id_info == 0){
     	let btn_previous = document.getElementById('previous').disabled=true
     }
     else{
     	let btn_previous = document.getElementById('previous').disabled=false
     }
}

 function next() {
 	id_info +=1;
 	 load_student(id_info)
 	}

function previous() {
	id_info -= 1;
	load_student(id_info)
}

