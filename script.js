'use strict';

	// Массив с вопросами
	const questions = [
		{
			question: 'What is the difference between the let and var keywords when declaring variables in JavaScript?',
			answer: [
					'let - Local scope in a block, var - Local scope in a function', 
					'let - Variable is visible only inside a code block, var - Only inside a function',
			 		'let is the modern way to declare variables, var is the old way',
			 		'let is more preferred in modern code, var is less preferred',
		],
			correct: 3,
		},
		{
			question: 'Which of the following is not a high-level programming language?',
			answer: ['Python', 'Java', 'C', 'Ruby'],
			correct: 3,
		}
	];

	// Переменные игры
	let score = 0; // Кол-во правильных ответов
	let questionIndex = 0; // Текущий вопрос

	// Находим элементы
	const btn = document.querySelector('.btn'),
				main = document.querySelector('.main-head'),
				test = document.querySelector('.test'),
				headerContainer = document.querySelector('#header'),
				listContainer = document.querySelector('#list'),
				submitBtn = document.querySelector('#submit');

	// Скрытие начального окна страницы
	btn.addEventListener('click', () => {
			main.classList.add('hide');
			test.classList.remove('hide');
	});

	clearPage();
	showQuestion();
	submitBtn.onclick = checkAnswer; // После клика запускает функцию checkAnswer

	function clearPage() {
		headerContainer.innerHTML = '';
		listContainer.innerHTML = '';
	}

	function showQuestion() {
		console.log('showQuestion');
		
		// Вопрос
		const headerTemplate = `<h2 class='title'>%title%</h2>`,
					title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
					headerContainer.innerHTML = title;

		// Варианты ответов
		let answerNumber = 1;
		for (let answerText of questions[questionIndex]['answer']) {
			const questionTemplate = 
			`<li>
				<label>
					<input value="%number%" type="radio" class='answer' name='answer'>
					<span>%answer%</span>
				</label>
			</li>`;

			const answerHTML = questionTemplate
															.replace('%answer%', answerText)
															.replace('%number%', answerNumber);
			
			listContainer.innerHTML += answerHTML;
			answerNumber++;
		}
	}

	function checkAnswer () {
		// Находим выбранную радио кнопку
		const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

		// Если ответ не выбран - ничего не делаем, выходим из функции
		if (!checkedRadio) {
			submitBtn.blur();
			return;
		};

		// Узнаем номер ответа пользователя
		const userAnswer = parseInt(checkedRadio.value);

		// Если ответил верно - увеличиваем счет
		if (userAnswer === questions[questionIndex]['correct']) {
			score ++;
			console.log('score', score);
		}

		if (questionIndex !== questions.length - 1) {
			console.log('Это не последний вопрос!')
			questionIndex++;
			clearPage();
			showQuestion();
			return;
		} else {
			console.log('Это последний вопрос!')
			clearPage();
			showResults();
		}
	}

	function showResults() {
		console.log('showResults started');
		console.log(score);

		const resultsTemplate = 
					`<h2 class="title">%title%</h2>
					<h3 class="summary">%message%</h3>
					<p class="result">%result%</p>`;

		let title, message;
		// Варианты заголовков и текста
		if (score === questions.length) {
			title = 'Congratulations!'
			message = 'You are 100% Junior!'
		}	else if ((score * 100) / questions.length >= 50) {
			title = 'Not bad!'
			message = 'You are 75% Junior!'
		} else {
			title = 'You need more knowledge!'
			message = 'You are 30% Junior!'
		}

		// Результат
		let result = `${score} from ${questions.length}`;

		// Финальное сообщение
		const finalMessage = resultsTemplate
														.replace('%title%', title)
														.replace('%message%', message)
														.replace('%result%', result);
		
		headerContainer.innerHTML = finalMessage;

		// Меняем кнопку на "Играть Снова"
		submitBtn.blur();
		submitBtn.innerText = 'Try again';
		submitBtn.onclick = () => history.go();
	}