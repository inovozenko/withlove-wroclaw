const tg = window.Telegram.WebApp;

tg.expand();

const buttons = [
    document.getElementById('button1'),
    document.getElementById('button2'),
    document.getElementById('button3'),
    document.getElementById('button4')
];

let selected;

attachEvents();

Telegram.WebApp.onEvent('mainButtonClicked', () => {
    tg.sendData(selected);
});


function message(number) {
    return `Предзаказ на Букет ${number}`;
}

function attachEvents() {
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            selected = (i + 1);
            tg.MainButton.setText(message(selected));
            tg.MainButton.show();
        });
    });
}
