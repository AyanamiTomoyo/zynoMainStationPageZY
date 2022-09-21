//背景变更
function UpdateImg() {
    var num;
    num = Math.floor(Math.random() * 12);
    console.log(num);
    var path = ["https://s3.bmp.ovh/imgs/2022/09/21/2146c23d97e99db1.jpg",
        "https://s3.bmp.ovh/imgs/2022/09/21/145173a79e0dbcfe.jpg",
        "https://s3.bmp.ovh/imgs/2022/09/21/87a7a649bb82a16b.jpg",
        "https://s3.bmp.ovh/imgs/2022/09/21/f2950c14901d1704.jpg",
        "https://s3.bmp.ovh/imgs/2022/09/21/ea29f27cf9b90983.jpg",
        "https://s3.bmp.ovh/imgs/2022/09/21/7618a3d4f8061601.jpg",
        "https://s3.bmp.ovh/imgs/2022/09/21/5d92fca61f09253f.jpg",
        "https://s3.bmp.ovh/imgs/2022/09/21/c252e8959e215ef1.jpg",
        "https://s3.bmp.ovh/imgs/2022/09/21/bf800e662404133e.jpg",
        "https://s3.bmp.ovh/imgs/2022/09/21/e8694ec2c32073a2.jpg",
        "https://s3.bmp.ovh/imgs/2022/09/21/6f142364e3267315.jpg",
        "https://s3.bmp.ovh/imgs/2022/09/21/e40aa15b9b90d159.jpg"
    ];
    console.log(path[num]);
    var res = 'url(' + path[num] + ')';
    // var path;
    // path = 'url(./img/' + num + '.jpg)';

    document.getElementById('bg').style.backgroundImage = res;
    console.log(document.getElementById('bg'));
}


//链接图标放大缩小
var bigger = document.getElementsByClassName("connect");
var arr = Array.from(bigger);
// var arr1 = Object.keys(bigger);
function big(myDocument) {
    myDocument.style.width = '72px';
    myDocument.style.height = '72px';
}
function small(myDocument) {
    myDocument.style.width = '70px';
    myDocument.style.height = '70px';
}
arr.forEach(element => {
    element.onmousemove = function () {
        big(element);
    }
    element.onmouseout = function () {
        small(element);
    }
})















//引入翻译，暂时无用


function googleTranslateElementInit() {

    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,fr,es,it,de' }, 'google_translate_element');

}



var head = document.getElementsByTagName('head')[0];
//翻译窗口用变量
var text = document.getElementById('text');
var text1 = document.getElementById('text1');
var btn = document.getElementById('btn');
//结束

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://res.zvo.cn/translate/translate.js';
// script.src = 'https://res.zvo.cn/translate/inspector.js';


script.onload = script.onreadystatechange = function () {
    translate.selectLanguageTag.languages = 'zh-CN,zh-TW,en,ko,ja';
    translate.execute();
    document.getElementById('translate').style.position = 'fixed';
    document.getElementById('translate').style.color = 'red';
    document.getElementById('translate').style.left = '20px';
    document.getElementById('translate').style.top = '-10px';
    document.getElementById('translate').style.fontSize = '35px';
    document.getElementById('translate').style.zIndex = '9999999999999';
    document.getElementById('translate').style.borderRadius = '50px';
}
head.appendChild(script);


// btn.src = 'https://res.zvo.cn/translate/translate.js';
// btn.onclick = function () {
//     alert(text.value);
// }


// function googleTranslateElementInit() {
//     new google.translate.TranslateElement(
//         {
//             // pageLanguage: 'zh-CN',
//             // 需要翻译的语言，比如你只需要翻译成越南和英语，这里就只写en,vi
//             includedLanguages: 'en,zh-CN,hr,cs,da,nl,fr,de,el,iw,hu,ga,it,ja,ko,pt,ro,ru,sr,es,th,vi',
//             layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//             // 自动显示翻译横幅，就是翻译后顶部出现的那个
//             autoDisplay: true,
//             // 还有些其他参数，由于原插件不再维护，找不到详细api了，将就了，实在不行直接上dom操作
//         },
//         'google_translate_element' // 存放翻译组件元素的id
//     );
// }
