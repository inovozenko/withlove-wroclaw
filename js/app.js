const api = 'https://withlove-wroclaw.store';
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

tg.onEvent('mainButtonClicked', async () => {
    const response = await fetch(`${api}/order`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            selected: selected
        })
    });

    const result = await response.json();

    console.warn('> result', result);
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
