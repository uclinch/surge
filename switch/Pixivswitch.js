var d = new Date();
var h = d.getHours();

const PixivDay   = 'Direct';
const PixivNight = '高速';

if (h >= 20 || h <1) {
    var PixivNewPolicy = PixivNight;
} else {
    var PixivNewPolicy = PixivDay;
}

$surge.setSelectGroupPolicy('Pixiv', PixivNewPolicy);
$notification.post("定时切换", "嗖的一下~", "'Pixiv' 切换到 '" + PixivNewPolicy + "'");
console.log("嗖的一下~ script: 'Pixiv' 切换到 '" + PixivNewPolicy + "'");

$done();