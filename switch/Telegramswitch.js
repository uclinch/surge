var d = new Date();
var h = d.getHours();

const TelegramDay   = 'Proxy';
const TelegramNight = '影视专线';

if (h >= 20 || h <1) {
    var TelegramNewPolicy = TelegramNight;
} else {
    var TelegramNewPolicy = TelegramDay;
}

$surge.setSelectGroupPolicy('Telegram', TelegramNewPolicy);


$done();