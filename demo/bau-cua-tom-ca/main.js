var anh1 = document.getElementById('anh1');
var anh2 = document.getElementById('anh2');
var anh3 = document.getElementById('anh3');
var innerThbao = document.getElementById('innerThbao');
var innerLichSuQuay = document.getElementById('innerLichSuQuay');
var lichSuQuay = 0;
var bau = 'https://i.imgur.com/O3S7N5u.png';
var ca = 'https://i.imgur.com/JjZSazf.png';
var cua = 'https://i.imgur.com/UzhCM5X.png';
var ga = 'https://i.imgur.com/7iTgaya.png';
var nai = 'https://i.imgur.com/FpN7Akq.png';
var tom = 'https://i.imgur.com/EUQIHT7.png';
var listKetQua = [bau,ca,cua,ga,nai,tom];
var listTen = ["Bầu","Cá","Cua","Gà","Nai","Tôm"];
var randomKetQua = Math.floor(Math.random() * listKetQua.length);
var thbaoText = "";
var listFix = [0,1,2];
var randomFix = 0;

function xocDia(){
	lichSuQuay += 1 ;
	var intervalXocDia = setInterval(xulyXocDia, 100);
	var updateTime = new Date(); //updateTime
	
	innerThbao.innerHTML = `Đang quay lần ${lichSuQuay}. . .`;
	setTimeout(function(){
		clearInterval(intervalXocDia);
		innerThbao.innerHTML = `Kết quả lần ${lichSuQuay} là: ${thbaoText}`;
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

window.onbeforeunload = confirmExit;
function confirmExit(){
return "Mọi kết quả sẽ không được lưu?";
}
