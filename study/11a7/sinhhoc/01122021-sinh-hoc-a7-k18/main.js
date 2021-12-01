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
   "img1":"",
   "img2":"",
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
   "img1":"",
   "img2":"",
  },
  {"id":"07",
   "name":"",
   "img1":"",
   "img2":"",
  },
  {"id":"08",
   "name":"",
   "img1":"",
   "img2":"",
  },
  {"id":"09",
   "name":"",
   "img1":"",
   "img2":"",
  },
  {"id":"10",
   "name":"",
   "img1":"",
   "img2":"",
  },
  {"id":"11",
   "name":"",
   "img1":"",
   "img2":"",
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
  {"id":"",
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
