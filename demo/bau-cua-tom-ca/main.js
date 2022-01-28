var anh1 = document.getElementById('anh1');
var anh2 = document.getElementById('anh2');
var anh3 = document.getElementById('anh3');
var innerThbao = document.getElementById('innerThbao');
var innerLichSuQuay = document.getElementById('innerLichSuQuay');
var lichSuQuay = 0;
var bau = './././././bau.png';
var ca = './././././ca.png';
var cua = './././././cua.png';
var ga = './././././ga.png';
var nai = './././././nai.png';
var tom = './././././tom.png';
var listKetQua = [bau,ca,cua,ga,nai,tom];
var listTen = ["Bầu","Cá","Cua","Gà","Nai","Tôm"];
var randomKetQua = Math.floor(Math.random() * listKetQua.length);
var thbaoText = "";
var listFix = [0,1,2];
var randomFix = 0;

function xocDia(){
	var intervalXocDia = setInterval(xulyXocDia, 100);
	var updateTime = new Date(); //updateTime
	lichSuQuay += 1 ;
	setTimeout(function(){
		clearInterval(intervalXocDia);
		innerThbao.innerHTML = `Kết quả là: ${thbaoText}`;
		innerLichSuQuay.innerHTML += `Lần ${lichSuQuay}: ${thbaoText} ${updateTime.toLocaleString()} <br/>`;
	}, 3000);
	
}

function xulyXocDia(){
		var randomKetQua = Math.floor(Math.random() * listKetQua.length);
		anh1.src = listKetQua[randomKetQua];

		var randomFix = listFix[Math.floor(Math.random() * listFix.length)];
		var random2 = randomKetQua+ randomFix;
		if (random2 >= 6 && random3%2 == 1){random2 = randomFix}
		if (random2 >= 6 && random2%2 == 0){random2 = random2/2}
		if (random2 >= 6){random2 = randomFix}	
		anh2.src = listKetQua[random2];

		var randomFix = listFix[Math.floor(Math.random() * listFix.length)];
		var random3 = randomKetQua+ randomFix +1;
		if (random3 >= 6 && random3%2 == 1){random3 = randomFix +1}
		if (random3 >= 6 && random3%2 == 0){random3 = random3/2}
		if (random3 >= 6){random3 = randomFix +1}	
		anh3.src = listKetQua[random3];

	console.log(`Random: ${randomKetQua}`);
	console.log(`Random2: ${random2}`);
	console.log(`Random3: ${random3}`);
		thbaoText = `<b>${listTen[randomKetQua]}</b>, <b>${listTen[random2]}</b>, <b>${listTen[random3]}</b>.`;
}
