var dataInner = [
  {"id":"01",
   "name":"Quách Duy An",
   "html":`<img src="https://i.imgur.com/s5fZOzm.jpg" /><img src="https://i.imgur.com/qir0V1l.jpg" />`,
  },
  {"id":"02",
   "name":"Quách Thị Phương Anh",
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
  <td>${dataInner[i].dd}</td>
      <td>${dataInner[i].c3}</td>
      <td>${dataInner[i].c4}</td>
      <td>${dataInner[i].cam}</td>
  `;
}
document.getElementById('innerData').innerHTML += innerTable
