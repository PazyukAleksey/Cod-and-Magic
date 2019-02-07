var userDialog = document.querySelector('.setup');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

userDialog.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор' ,'Юлия', 'Люпита', 'Вашингтон'];
var surenames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
]
var eyesColors =['black', 'red', 'blue', 'yellow', 'green'];

function CreateWizard(){
    var wizard = {
        name: names[(Math.random() * (names.length - 1)).toFixed()] + ' ' + surenames[(Math.random() * (surenames.length - 1)).toFixed()],
        coatColor: coatColors[(Math.random() * (coatColors.length - 1)).toFixed()],
        eyesColor: eyesColors[(Math.random() * (eyesColors.length - 1)).toFixed()]
    }
    return wizard;
}

for (var i = 0; i < 4; i++) {
    var wizard = CreateWizard();
    var wizardElemnts = similarWizardTemplate.cloneNode(true);

    wizardElemnts.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElemnts.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElemnts.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    similarListElement.appendChild(wizardElemnts);
}
// var similarWizardTemplate = document.querySelector('#similar-wizard-template')
// .content.querySelector('.setup-similar-item');

// function renderWizard(wizard){
//     var wizardElements = similarWizardTemplate.cloneNode(true);
//     wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
//     wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
//     wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
//
//     return wizardElement
// }
