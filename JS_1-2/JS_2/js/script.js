var arr = new Array();
var name;
var user;

for (i = 0; i < 5; i++){

	arr[i] = prompt("Введите имя " + (i + 1));

}

name = prompt("Введите имя пользователя");

for(var i = 0; i < 5; i++) {

	if(arr[i] === name){
		user = true; 
		break;
	}
	user = false;
}

if(!user){
	alert(name + " не был авторизирован. Имя" + name + " не найдено!");
} else {
	alert(name + ", вы успешно вошли");
}