// Substitua os valores abaixo pelo seu token e chat_id reais
const TELEGRAM_BOT_TOKEN = '7744197774:AAGpZlPKH5IaEzJgU0fp76CKPzxEKmGh8jI';
const TELEGRAM_CHAT_ID = '5499096865';

function sendToTelegram(message) {
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message
        })
    });
}
