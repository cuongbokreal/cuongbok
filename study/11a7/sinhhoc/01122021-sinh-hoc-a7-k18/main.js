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
   "img1":"",
   "img2":"",
  },
  {"id":"09",
   "name":"Nguyễn Duy Độ",
   "img1":"https://i.imgur.com/3Y7GCCF.jpg",
   "img2":"https://i.imgur.com/6lv0JSg.jpg",
  },
  {"id":"10",
   "name":"Nguyễn Viết Đức",
   "img1":"",
   "img2":"",
  },
  {"id":"11",
   "name":"Nguyễn Bá Được",
   "img1":"https://i.imgur.com/DX3iR7Q.png",
   "img2":"https://i.imgur.com/q65sW6f.png",
  },
  {"id":"12",
   "name":"",
   "img1":"",
   "img2":"",
  },
  {"id":"13",
   "name":"",
   "img1":"",
   "img2":"",
  },
  {
"id":"14",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"15",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"16",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"17",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"18",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"19",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"20",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"21",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"22",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"23",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"24",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"25",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"26",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"27",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"28",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"29",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"30",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"31",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"32",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"33",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"34",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"35",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"36",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"37",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"38",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"39",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"40",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"41",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"42",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"43",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"44",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"45",
"name":"",
"img1":"",
"img2":"",
},
{
"id":"46",
"name":"",
"img1":"",
"img2":"",
}, 

]
let innerTable = "";
for (let i=0; i<dataInner.length;i++){
  innerTable += `
  <tr>
      <td>${dataInner[i].id}</td>
      <td>${dataInner[i].name}</td>
      <td>
        <a class="content" data-fancybox="gallery" href="${dataInner[i].img1}" data-caption="Bài làm của ${dataInner[i].name} - 1">
          <img src="${dataInner[i].img1}" alt="Bài làm của ${dataInner[i].name} - 1"/>
        </a>
        <a class="content" data-fancybox="gallery" href="${dataInner[i].img2}" data-caption="Bài làm của ${dataInner[i].name} - 2">
          <img src="${dataInner[i].img2}" alt="Bài làm của ${dataInner[i].name} - 2"/>
        </a>
      </td>
  </tr>
  `;
}
document.getElementById('innerData').innerHTML += innerTable;
console.log('get')
