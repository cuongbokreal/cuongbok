var dataInner = [
  {"id":"01",
   "name":"Quách Duy An",
   "html":`<img src="https://i.imgur.com/s5fZOzm.jpg" /><img src="https://i.imgur.com/qir0V1l.jpg" />`,
  },
  {"id":"02",
   "name":"Quách Thị Phương Anh",
   "html":``,
  },
  {"id":"03",
   "name":"Nguyễn Thị Quỳnh Anh",
   "html":``,
  },
  {"id":"04",
   "name":"Cảnh Thị Minh Ánh",
   "html":``,
  },
  {"id":"",
   "name":"",
   "html":``,
  },
  {"id":"",
   "name":"",
   "html":``,
  },

]
let innerTable = "";
for (let i=0; i<dataInner.length;i++){
  innerTable += `
  <tr>
      <td>${dataInner[i].id}</td>
      <td>${dataInner[i].name}</td>
      <td>${dataInner[i].html}</td>
  </tr>
  `;
}
document.getElementById('innerData').innerHTML += innerTable;
$(document).ready(function() {
   $('.content a').fancybox();
});
console.log('get')
