$(document).ready(function() {
   $('.content').fancybox();
});
var dataInner = [
  {"id":"01",
   "name":"Quách Duy An",
   "img1":"https://i.imgur.com/s5fZOzm.jpg",
   "img2":"https://i.imgur.com/qir0V1l.jpg",
  },
  {"id":"02",
   "name":"Nguyễn Thị Quỳnh Anh",
   "img1":"https://i.imgur.com/de1mFae.jpg",
   "img2":"https://i.imgur.com/SVn8FI5.jpg",
  },
  {"id":"03",
   "name":"Quách Thị Phương Anh",
   "img1":"https://i.imgur.com/9E9BT3U.jpg",
   "img2":"https://i.imgur.com/0DFd1il.jpg",
  },
  {"id":"04",
   "name":"Cảnh Thị Minh Ánh",
   "img1":"https://i.imgur.com/FJWWdsg.jpg",
   "img2":"https://i.imgur.com/ElzKHt6.jpg",
  },
  {"id":"05",
   "name":"Nguyễn Đăng Bắc",
   "img1":"https://i.imgur.com/FU6XybL.jpg",
   "img2":"https://i.imgur.com/r2KnBFw.jpg",
  },
  {"id":"06",
   "name":"Nguyễn Ngọc Cường",
   "img1":"https://i.imgur.com/M4DWP4d.png",
   "img2":"https://i.imgur.com/iaflk9H.png",
  },
  {"id":"07",
   "name":"Cảnh Chi Duy",
   "img1":"https://i.imgur.com/TMp2lb4.jpg",
   "img2":"https://i.imgur.com/jlxYl1p.jpg",
  },
  {"id":"08",
   "name":"Trần Quang Duy",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-7570a9ad80c9.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-45252e851441.jpg",
  },
  {"id":"09",
   "name":"Nguyễn Duy Độ",
   "img1":"https://i.imgur.com/3Y7GCCF.jpg",
   "img2":"https://i.imgur.com/6lv0JSg.jpg",
  },
  {"id":"10",
   "name":"Nguyễn Viết Đức",
   "img1":"https://f6.photo.talk.zdn.vn/2072837213881553617/9e1363c0a9fa62a43beb.jpg",
   "img2":"https://f7.photo.talk.zdn.vn/819123960425751433/afd3efd525efeeb1b7fe.jpg",
   "img3":"https://f5.photo.talk.zdn.vn/5887967741865957684/95565810922a5974003b.jpg",
   "img4":"https://f2.photo.talk.zdn.vn/7086032971760460872/eb53813a4b00805ed911.jpg",
  },
  {"id":"11",
   "name":"Nguyễn Bá Được",
   "img1":"https://i.imgur.com/1txy4Je.png",
   "img2":"https://i.imgur.com/wbTbKcH.png",
   "img3":"https://i.imgur.com/J6pgeRW.png",
   "img4":"https://i.imgur.com/jPoakt2.png",
   "img5":"https://i.imgur.com/Qqf8WCp.png",
  },
  {"id":"12",
   "name":"Nguyễn Ngọc Hiệp",
   "img1":"",
   "img2":"",
  },
  {"id":"13",
   "name":"Đỗ Văn Hiếu",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-56aa7a40bac6.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-6d519d3b5313.jpg",
  },
  {
   "id":"14",
   "name":"Nguyễn Thạc Trung Hiếu",
   "img1":"https://f5.photo.talk.zdn.vn/7462192544288662522/cff2258dbc4977172e58.jpg",
   "img2":"https://f3.photo.talk.zdn.vn/5369936897255761951/5d1bab8b324ff911a05e.jpg",
   },
   {
   "id":"15",
   "name":"Nguyễn Văn Hiếu",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-08d5fb8fedda.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-084f442fc2ab.jpg",
   "img3":"https://im4.ezgif.com/tmp/ezgif-4-d6d6ee2dbfc1.jpg",
   "img4":"https://im4.ezgif.com/tmp/ezgif-4-71d26b1b8aee.jpg",   
   },
   {
   "id":"16",
   "name":"Đàm Xuân Hoàng",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-cf8882570d5d.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-f2b7b3bd10a6.jpg",
   "img3":"https://im4.ezgif.com/tmp/ezgif-4-f8c92a226d5e.jpg",   
   },
   {
   "id":"17",
   "name":"Trần Đức Hoàng",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-ac039c625421.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-f9c317528932.jpg",
   "img3":"https://im4.ezgif.com/tmp/ezgif-4-b1066aa5d746.jpg",
   },
   {
   "id":"18",
   "name":"Nguyễn Thế Học",
   "img1":"",
   "img2":"",
   },
   {
   "id":"19",
   "name":"Đỗ Quang Huy",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-e7c7d1e13cf5.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-d808eabe3ee1.jpg",
   },
   {
   "id":"20",
   "name":"Nguyễn Hưng",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-51df74cc0093.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-703b038d33eb.jpg",
   "img3":"https://im4.ezgif.com/tmp/ezgif-4-4f0c92a62dad.jpg",
   },
   {
   "id":"21",
   "name":"Nguyễn Quỳnh Hương",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-87d87c4a06cb.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-bd845d62870c.jpg",
   },
   {
   "id":"22",
   "name":"Cảnh Chi Khải",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-18cb3c82d16b.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-a042a4ed03db.jpg",
   },
   {
   "id":"23",
   "name":"Ngô Thị Khánh Linh",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-035da61188bb.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-1631c89a3318.jpg",
   "img3":"https://im4.ezgif.com/tmp/ezgif-4-befce449a2b5.jpg",
   "img4":"https://im4.ezgif.com/tmp/ezgif-4-83797a4e8677.jpg",   
   },
   {
   "id":"24",
   "name":"Nguyễn Thạc Quỳnh Mai",
   "img1":"https://f3.photo.talk.zdn.vn/5565617936431921686/5415fdf304c9cf9796d8.jpg",
   "img2":"https://f8.photo.talk.zdn.vn/4051201354176309744/20f0bae94cd3878ddec2.jpg",
   "img3":"https://f8.photo.talk.zdn.vn/1573501622545501722/0f99711f86254d7b1434.jpg",
   "img4":"https://f21-zpc.zdn.vn/8405369058727146323/3eac37a4c09e0bc0528f.jpg",
   "img5":"https://f21-zpc.zdn.vn/6169279107491899722/bdd0da612e5be505bc4a.jpg",   
   },
   {
   "id":"25",
   "name":"Nguyễn Quang Minh",
   "img1":"",
   "img2":"",
   },
   {
   "id":"26",
   "name":"Nguyễn Tất Minh",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-919a688b9499.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-3bc83d1d5324.jpg",
   },
   {
   "id":"27",
   "name":"Nguyễn Trung Nghĩa",
   "img1":"https://f5.photo.talk.zdn.vn/5052343883790457853/5e7dfa696853a30dfa42.jpg",
   "img2":"https://f17-zpc.zdn.vn/979514554606707151/2a1053f1c1cb0a9553da.jpg",
   },
   {
   "id":"28",
   "name":"Trần Đức Ngọc",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-fbca7fecd87d.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-38b85dad6cf7.jpg",
   },
   {
   "id":"29",
   "name":"Đặng Hữu Nhân",
   "img1":"https://f20-zpc.zdn.vn/1071803337341692186/ac2dd3c64afc81a2d8ed.jpg",
   "img2":"https://f21-zpc.zdn.vn/5228200500601931530/3e9bc9bd5f8794d9cd96.jpg",
   },
   {
   "id":"30",
   "name":"Nguyễn Đình Phong",
   "img1":"",
   "img2":"",
   },
   {
   "id":"31",
   "name":"Nguyễn Đình Quang",
   "img1":"",
   "img2":"",
   },
   {
   "id":"32",
   "name":"Nguyễn Văn Quảng",
   "img1":"https://f5.photo.talk.zdn.vn/5204800841443941015/d119861230d7fb89a2c6.jpg",
   "img2":"https://f6.photo.talk.zdn.vn/5380734234564500941/dd6b9b372cf2e7acbee3.jpg",
   },
   {
   "id":"33",
   "name":"Phạm Đình Quân",
   "img1":"https://f20-zpc.zdn.vn/7624421308630225837/6c73fdf51bcfd09189de.jpg",
   "img2":"https://f9.photo.talk.zdn.vn/2916388631773256901/e29d4101a73b6c65352a.jpg",
   "img3":"https://f21-zpc.zdn.vn/600486369016505852/3d00609786ad4df314bc.jpg",
   },
   {
   "id":"34",
   "name":"Thạc Thúy Quỳnh",
   "img1":"https://f12.photo.talk.zdn.vn/191046245187809877/7c37b38642bc89e2d0ad.jpg",
   "img2":"https://f8.photo.talk.zdn.vn/4695697307599259860/8633ae8c5fb694e8cda7.jpg",
   },
   {
   "id":"35",
   "name":"Nguyễn Đình Sơn",
   "img1":"https://f20-zpc.zdn.vn/1295724751332628739/e23b7678ec42271c7e53.jpg",
   "img2":"https://f8.photo.talk.zdn.vn/4256225773774665361/8c72c934530e9850c11f.jpg",
   },
   {
   "id":"36",
   "name":"Nguyễn Thanh Thảo",
   "img1":"",
   "img2":"",
   },
   {
   "id":"37",
   "name":"Quách Quang Thịnh",
   "img1":"https://f21-zpc.zdn.vn/3306380651180367180/b1b1e48635bcfee2a7ad.jpg",
   "img2":"https://f6.photo.talk.zdn.vn/4047519351455384578/db452196efac24f27dbd.jpg",
   },
   {
   "id":"38",
   "name":"Nguyễn Thị Anh Thư",
   "img1":"",
   "img2":"",
   },
   {
   "id":"39",
   "name":"Lê Thị Thanh Trà",
   "img1":"https://im4.ezgif.com/tmp/ezgif-4-8f8dd55488ee.jpg",
   "img2":"https://im4.ezgif.com/tmp/ezgif-4-c6c8e6910f9b.jpg",
   "img3":"https://im4.ezgif.com/tmp/ezgif-4-a964781f7418.jpg",   
   },
   {
   "id":"40",
   "name":"Đặng Quang Trung",
   "img1":"https://f10.photo.talk.zdn.vn/317083370808776371/e5121b152ed1e58fbcc0.jpg",
   "img2":"https://f9.photo.talk.zdn.vn/3756107435970028125/e9a6a64f938b58d5019a.jpg",
   },
   {
   "id":"41",
   "name":"Đỗ Xuân Trường",
   "img1":"https://f20-zpc.zdn.vn/7804427697767560391/568487283012fb4ca203.jpg",
   "img2":"https://f3.photo.talk.zdn.vn/1367411419826778125/d31d86c031fafaa4a3eb.jpg",
   "img3":"https://f2.photo.talk.zdn.vn/2406476289714396661/9b59fc9e4ba480fad9b5.jpg",
   },
   {
   "id":"42",
   "name":"Nguyễn Hữu Trường",
   "img1":"https://f12.photo.talk.zdn.vn/8797288243701438599/4b60d22ea814634a3a05.jpg",
   "img2":"https://f22-zpc.zdn.vn/3640566520063553651/df8fcc5fb7657c3b2574.jpg",
   "img3":"https://f11.photo.talk.zdn.vn/3748700510088333470/eade113e6a04a15af815.jpg",   
   },
   {
   "id":"43",
   "name":"Nguyễn Văn Tú",
   "img1":"https://f21-zpc.zdn.vn/3533986876513240261/d46719fc81c64a9813d7.jpg",
   "img2":"https://f7.photo.talk.zdn.vn/5911758804954956814/76e4f2646a5ea100f84f.jpg",
   },
   {
   "id":"44",
   "name":"Nguyễn Đăng Tuấn",
   "img1":"https://f11.photo.talk.zdn.vn/8263065713222869396/f8dc01f5a0cf6b9132de.jpg",
   "img2":"https://f3.photo.talk.zdn.vn/5344255123343941097/6dcbc19a60a0abfef2b1.jpg",
   },
   {
   "id":"45",
   "name":"Nguyễn Hữu Quang Tùng",
   "img1":"",
   "img2":"",
   },
   {
   "id":"46",
   "name":"Nguyễn Công Đạt",
   "img1":"https://i.imgur.com/FjJVdeq.png",
   "img2":"https://i.imgur.com/9IrAidi.png",
   "img3":"https://i.imgur.com/5MVqV7a.png",
   "img4":"https://i.imgur.com/CgKbwxQ.png",   
   }, 

]
let innerTable = "";
for (let i=0; i<dataInner.length;i++){
  innerTable += `
  <tr>
      <td>${dataInner[i].id}</td>
      <td>${dataInner[i].name}</td>
      <td class="mainImg">
        <a class="content" data-fancybox="gallery" href="${dataInner[i].img1}" data-caption="Bài làm của ${dataInner[i].name} - 1">
          <img src="${dataInner[i].img1}" alt="Bài làm của ${dataInner[i].name} - 1" title="Bài làm của ${dataInner[i].name} - 1"/>
        </a>
        <a class="content" data-fancybox="gallery" href="${dataInner[i].img2}" data-caption="Bài làm của ${dataInner[i].name} - 2">
          <img src="${dataInner[i].img2}" alt="Bài làm của ${dataInner[i].name} - 2" title="Bài làm của ${dataInner[i].name} - 2"/>
        </a>`;
   if (dataInner[i].img3){innerTable += `
         <a class="content" data-fancybox="gallery" href="${dataInner[i].img3}" data-caption="Bài làm của ${dataInner[i].name} - 3">
          <img src="${dataInner[i].img3}" alt="Bài làm của ${dataInner[i].name} - 3" title="Bài làm của ${dataInner[i].name} - 3"/>
         </a>`}
   if (dataInner[i].img4){innerTable += `
         <a class="content" data-fancybox="gallery" href="${dataInner[i].img4}" data-caption="Bài làm của ${dataInner[i].name} - 4">
          <img src="${dataInner[i].img4}" alt="Bài làm của ${dataInner[i].name} - 4" title="Bài làm của ${dataInner[i].name} - 4"/>
         </a>`}
   if (dataInner[i].img5){innerTable += `
         <a class="content" data-fancybox="gallery" href="${dataInner[i].img5}" data-caption="Bài làm của ${dataInner[i].name} - 5">
          <img src="${dataInner[i].img5}" alt="Bài làm của ${dataInner[i].name} - 5" title="Bài làm của ${dataInner[i].name} - 5"/>
         </a>`}
   
  innerTable += `</td></tr>`;
}
document.getElementById('innerData').innerHTML += innerTable;
console.log('get')
