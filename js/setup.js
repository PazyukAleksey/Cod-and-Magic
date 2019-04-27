
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор' ,'Юлия', 'Люпита', 'Вашингтон'];
var surenames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];
var eyesColors =['black', 'red', 'blue', 'yellow', 'green'];
var firebalColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

function CreateWizard(){
    var wizard = {
        name: names[(Math.random() * (names.length - 1)).toFixed()] + ' ' + surenames[(Math.random() * (surenames.length - 1)).toFixed()],
        coatColor: coatColors[(Math.random() * (coatColors.length - 1)).toFixed()],
        eyesColor: eyesColors[(Math.random() * (eyesColors.length - 1)).toFixed()]
    }
    return wizard;
}
//Форма магов
var userDialog = document.querySelector('.setup');

//Удаление атриуба hidden для отображения формы
document.querySelector('.setup-similar').classList.remove('hidden');


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

//Кнопка для открытия формы
var setupOpen = document.querySelector('.setup-open');

//Кнопка для закрытия формы
var setupClose = document.querySelector('.setup-close');

//Аттриут для обнаружения через кнопку TAB
setupClose.setAttribute('tabindex', 0);
document.querySelector('.setup-open-icon').setAttribute('tabindex', 0);

//События для открытия и закрытия формы при помощи кликов и клавиш
userDialog.querySelector('.setup-user-name').addEventListener('focus', function(){
    document.removeEventListener('keydown', onPopupEscPress);
});
userDialog.querySelector('.setup-user-name').addEventListener('blur', function(){
    document.addEventListener('keydown', onPopupEscPress);
});
setupOpen.addEventListener('click', openSetup);
setupClose.addEventListener('click', closeSetup);
setupOpen.addEventListener('keydown', function(e){ if(e.keyCode === 13) openSetup();});
setupClose.addEventListener('keydown', function(e){ if(e.keyCode === 13) closeSetup();});

//событие для обнаружения отправляется ли форма при нажатии кнопки
userDialog.querySelector('.setup-submit').addEventListener('click', function(){  });

//Длинна поля setup-user-name не меньше 2 и не более 25
userDialog.querySelector('.setup-user-name').setAttribute('maxlength', 25);
userDialog.querySelector('.setup-user-name').setAttribute('minlength', 2);

//Событие для клавиши ESC пр открытой форме
var onPopupEscPress = function(evt){
    if(evt.keyCode === 27){
        closeSetup();
    }
};

//Функции для открытия и закрытия формы
function openSetup(){
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
}
function closeSetup(){
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
}

//объект мантии мага
var wizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
//объект глаз мага
var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
//объект фаербола
var wizardFirebal = document.querySelector('.setup-fireball-wrap');

//событие измененния цвета мантии
wizardCoat.addEventListener('click', function(){
    wizardCoat.style.fill = coatColors[Math.floor(Math.random() * (coatColors.length))];
});
//событие измененния цвета глаз
wizardEyes.addEventListener('click', function(){
    wizardEyes.style.fill = eyesColors[Math.floor(Math.random() * (eyesColors.length))];
});
//событие измененния фаербола
wizardFirebal.addEventListener('click', function(){
    wizardFirebal.style.backgroundColor = firebalColors[Math.floor(Math.random() * (firebalColors.length))];
});


//создание дополнительных магов
function createWizards() {
    for (var i = 0; i < 4; i++) {
        var wizard = CreateWizard();
        var wizardElemnts = similarWizardTemplate.cloneNode(true);

        wizardElemnts.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElemnts.querySelector('.wizard-coat').style.fill = wizard.coatColor;
        wizardElemnts.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

        similarListElement.appendChild(wizardElemnts);
    }
}

createWizards();
