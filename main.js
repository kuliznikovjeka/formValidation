// Создать div
function getDiv(className) {
	let div = document.createElement('div');
	div.classList.add(className);
	return div
}
// Создать текстовое поле
function getInput(placeholder, type, className) {
	let input = document.createElement('input');
	input.placeholder = placeholder;
	input.type = type;
	input.classList.add(className);
	return input
}
// Cоздать label
function getLabel(className, text) {
	let label = document.createElement('label');
	label.classList.add(className)
	label.textContent = text;
	return label
}
// Создать span
function getSpan(className, text) {
	let span = document.createElement('span');
	span.classList.add(className)
	span.textContent = text;
	return span
}
// Cоздать кнопку
function getBtn(className, text) {
	let btn = document.createElement('button');
	btn.classList.add(className)
	btn.textContent = text;
	return btn
}
// Проверка на пустую строку
function getEmptyStr(value, label, text, validationResult) {
	if (value === '') {
		label.textContent = text;
		validationResult = true;
	}
}
// Проверка на сравнение длины со знаком < "меньше"
function сheckLengthLess(value, number, label, text, validationResult) {
	if (value.length < number) {
		label.textContent = text;
		validationResult = true;
	}
}
// Создать блок для текстовых полей
let box = getDiv('box');

// Создать заголовок
let title = document.createElement('h1')
title.classList.add('title');
title.textContent = 'Регистрация'

// Создание Фамилии
let surNameWrap = getDiv('field-wrap');
let surNameInp = getInput('Фамилия', 'text', 'text-field');
let surNameErrLabel = getLabel('error');
surNameWrap.append(surNameInp, surNameErrLabel);

// Создание Имени
let nameWrap = getDiv('field-wrap');
let nameInp = getInput('Имя', 'text', 'text-field');
let nameErrLabel = getLabel('error');
nameWrap.append(nameInp, nameErrLabel);

// Создание возраста
let ageWrap = getDiv('field-wrap');
let ageInp = getInput('Возраст', 'number', 'text-field');
let ageErrLabel = getLabel('error');
ageWrap.append(ageInp, ageErrLabel);

// Cоздание почты
let emaiWrap = getDiv('field-wrap');
let emailInp = getInput('Email', 'email', 'text-field');
let emailErrLabel = getLabel('error');
emaiWrap.append(emailInp, emailErrLabel);

// Создать пароль
let passwordWrap = getDiv('field-wrap');
let passwordInp = getInput('Пароль', 'password', 'text-field');
let passwordErrLabel = getLabel('error');
passwordWrap.append(passwordInp, passwordErrLabel);

// Создание чекбокса
let conditionWrap = getDiv('field-wrap');
let conditionLabel = getLabel('conditionLabel');
let conditionInp = getInput('Пароль', 'checkbox', 'checkbox');
let conditionSpan = getSpan('condition-span', 'Согласны с условиями?');
let conditionErrLabel = getLabel('error');
conditionLabel.append(conditionInp, conditionSpan);
conditionWrap.append(conditionLabel, conditionErrLabel);

// Кнопка регистрации
let regBtn = getBtn('btn', 'Регистрация');

regBtn.onclick = function () {
	// Получаем значения
	let surNameValue = surNameInp.value;
	let nameValue = nameInp.value;
	let ageValue = Number(ageInp.value);
	let emailValue = emailInp.value;
	let passwordValue = passwordInp.value;
	let conditionValue = conditionInp.checked;

	// Проверка валидации, если false, то проверка пройдена
	let validationResult = false;

	// Очистка полей
	surNameErrLabel.textContent = '';
	nameErrLabel.textContent = '';
	ageErrLabel.textContent = '';
	emailErrLabel.textContent = '';
	passwordErrLabel.textContent = '';
	conditionErrLabel.textContent = '';

	// Валидация поля ввода фамилии
	сheckLengthLess(surNameValue, 3, surNameErrLabel, 'Фамилия не может быть такой короткой', validationResult);
	getEmptyStr(surNameValue, surNameErrLabel, 'Фамилия не может быть такой короткой', validationResult);

	// Валидация поля ввода Имени
	сheckLengthLess(nameValue, 3, nameErrLabel, 'Имя не может быть таким коротким', validationResult)
	getEmptyStr(nameValue, nameErrLabel, 'Введите имя', validationResult);

	// Валидация поля ввода возраста
	сheckLengthLess(ageValue, 14, ageErrLabel, 'Вы ещё подросток', validationResult)

	if (ageValue === 0) {
		ageErrLabel.textContent = 'Введите возраст';
		validationResult = true;
	}

	// Валидация поля ввода почты
	сheckLengthLess(emailValue, 6, emailErrLabel, 'Вы ещё подросток', validationResult)
	if (emailValue.includes('@') === false) {
		emailErrLabel.textContent = 'Почта должна включать в себя знак @ ';
		validationResult = true;
	}
	getEmptyStr(emailValue, emailErrLabel, 'Введите почту', validationResult);

	// Валидация поля ввода пароля
	if (passwordValue.length < 6 || passwordValue.includes('_') === false) {
		passwordErrLabel.textContent = 'Пароль не может быть меньше, чем 6 символов, а также должен включать нижнее подчеркивание _';
		validationResult = true;
	}
	getEmptyStr(passwordValue, passwordErrLabel, 'Введите пароль', validationResult);

	// Валидация чекбокса
	if (conditionValue === false) {
		conditionErrLabel.textContent = 'Вы НЕ согласны с условиями';
		validationResult = true;
	}

	if (validationResult === true) {
		return
	}

	alert(`${surNameValue} ${nameValue}, поздравляю с успешной регистрацией!`)
}

// Создать поле для имени
box.append(
	title,
	surNameWrap,
	nameWrap,
	ageWrap,
	emaiWrap,
	passwordWrap,
	conditionWrap,
	regBtn
)

document.body.append(box);

