var dataInner = [
  {"dd":"",
   "c3":"",
   "c4":"",
   "cam":"",
  },
  {"dd":"",
   "c3":"",
   "c4":"",
   "cam":"",
  },
  {"dd":"",
   "c3":"",
   "c4":"",
   "cam":"",
  },
  {"dd":"",
   "c3":"",
   "c4":"",
   "cam":"",
  },
  {"dd":"",
   "c3":"",
   "c4":"",
   "cam":"",
  },
  {"dd":"",
   "c3":"",
   "c4":"",
   "cam":"",
  },
  {"dd":"",
   "c3":"",
   "c4":"",
   "cam":"",
  },
  {"dd":"",
   "c3":"",
   "c4":"",
   "cam":"",
  },
]
let innerTable = "";
for (let i=0; i<innerData.length;i++){
  innerTable += `
  <td>${dataInner[i].dd}</td>
      <td>${dataInner[i].c3}</td>
      <td>${dataInner[i].c4}</td>
      <td>${dataInner[i].cam}</td>
  `;
}
document.getElementById('innerData').innerHTML += innerTable
