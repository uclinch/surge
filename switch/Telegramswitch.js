var d = new Date();
var h = d.getHours();

const TelegramDay   = 'Proxy';
const TelegramNight = '影视专线';

if (h >= 21 || h <1) {
    var TelegramNewPolicy = TelegramNight;
} else {
    var TelegramNewPolicy = TelegramDay;
}

$surge.setSelectGroupPolicy('Telegram', TelegramNewPolicy);
$notification.post("定时切换", "嗖的一下~", "'Telegram' 切换到 '" + TelegramNewPolicy + "'");
console.log("嗖的一下~ script: 'Telegram' 切换到 '" + TelegramNewPolicy + "'");

$done();