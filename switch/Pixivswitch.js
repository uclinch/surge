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


$done();