var d = new Date();
var h = d.getHours();

const TelegramDay   = 'Proxy';
const TelegramNight = '影视专线';

if (h >= 20 || h <1) {
    var TelegramNewPolicy = TelegramNight;
} else {
    var TelegramNewPolicy = TelegramDay;
}

$surge.setSelecTelegramroupPolicy('Telegram', TelegramNewPolicy);
$notification.post("开始变换形态~", "定时切换", "'Telegram' 切换到 '" + TelegramNewPolicy + "'");
console.log("TelegramSwitch.js script: 'Telegram' 切换到 '" + TelegramNewPolicy + "'");

$done();
