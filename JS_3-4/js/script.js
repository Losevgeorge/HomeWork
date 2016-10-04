var createDom = {};
var i;
var max;

createDom.createTitle = function(tagname, tagtext, tagclass) {
		var El = document.createElement(tagname);
		El.innerHTML = tagtext;
		El.className = tagclass;
		document.body.appendChild(El);
	};

createDom.createList=function(tagtext, tagclass) {
		/*Создаем элемент-список и задаем ему имя класса*/
		var list = document.createElement('ul');
		list.className = tagclass;
		var max = tagtext.length;
		var i = 0;
		while (i<max){
			var listElement = document.createElement('li');
			var listInput = document.createElement('input');
			listInput.setAttribute('type', 'checkbox');
			listElement.innerHTML = '<span>' + tagtext[i] + '</span>';
			listElement.insertBefore(listInput, listElement.children[0]);
			list.appendChild(listElement);
			document.body.appendChild(list)
			i++;
		}
	};
    

var TitleHead = 'Тест по программированию'

var TitleQuestions = ['1. Вопрос №1', '2. Вопрос №2', '3. Вопрос №3'];

var ListAnswers = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];

var Button = 'Проверить мои результаты';

createDom.createTitle('h2', TitleHead, 'text-center');

max=TitleQuestions.length;
i = 0;
while(i<max){
	createDom.createTitle('h2', TitleQuestions[i], 'main__title');
	createDom.createList(ListAnswers, 'list');
	i++;
};

createDom.createTitle('button', Button, 'btn btn-default');