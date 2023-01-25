function drawsky()
{
	let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    let hh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 

	let today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	
    let tmap=[0,14400,18000,25200,36000,61200,72000,75600,86399];

	let currentsec=h*3600+m*60+s;
	
    console.log(currentsec)

	let r1map=[5,0,20,88,88,88,88,20,5];
	let g1map=[7,0,30,114,114,114,114,30,7];
	let b1map=[21,0,83,152,152,152,152,83,21];
	let r2map=[35,0,110,224,118,118,224,100,15];
	let g2map=[47,0,135,192,144,144,192,125,27];
	let b2map=[80,0,199,143,182,182,143,119,50];
	
	let index=1;
	
	if (currentsec>=0&&currentsec<=14400) //mid night
	{
		index=1;
	}
	if (currentsec>=14400&&currentsec<=18000)//before morning
	{
		index=2;
	}
	if (currentsec>=18000&&currentsec<=25200)
	{
		index=3;
	}
	if (currentsec>=25200&&currentsec<=36000)
	{
		index=4;
	
	}
	if (currentsec>=36000&&currentsec<=61200)
	{
		index=5;	
	}
	if (currentsec>=61200&&currentsec<=72000)
	{
		index=6;
	}
	if (currentsec>=72000&&currentsec<=75600)
	{
		index=7;	
	}
	if (currentsec>=75600&&currentsec<=86399)
	{
		index=8;	
	}
	
	let r1=Math.round((r1map[index]-r1map[index-1])/(tmap[index]-tmap[index-1])*(currentsec-tmap[index])+r1map[index]);
	let g1=Math.round((g1map[index]-g1map[index-1])/(tmap[index]-tmap[index-1])*(currentsec-tmap[index])+g1map[index]);
	let b1=Math.round((b1map[index]-b1map[index-1])/(tmap[index]-tmap[index-1])*(currentsec-tmap[index])+b1map[index]);
	let r2=Math.round((r2map[index]-r2map[index-1])/(tmap[index]-tmap[index-1])*(currentsec-tmap[index])+r2map[index]);
	let g2=Math.round((g2map[index]-g2map[index-1])/(tmap[index]-tmap[index-1])*(currentsec-tmap[index])+g2map[index]);
	let b2=Math.round((b2map[index]-b2map[index-1])/(tmap[index]-tmap[index-1])*(currentsec-tmap[index])+b2map[index]);
	document.body.style.background = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
	
	let c = document.getElementById("myCanvas");
	let ctx = c.getContext("2d");
	ctx.canvas.width  = w;
    ctx.canvas.height  = hh;
	// Create gradient
	let grd = ctx.createLinearGradient(0,0,0,c.height);
	grd.addColorStop(0,"rgb(" + r1 + "," + g1 + "," + b1 + ")");
	grd.addColorStop(1,"rgb(" + r2 + "," + g2 + "," + b2 + ")");
	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(0,0,w,hh);
//      document.getElementById('demo2').innerHTML = h;
//		document.getElementById('demo2').innerHTML = "hiii";
//		document.getElementById('demo2').innerHTML = "hiiii";   
	setTimeout(drawsky, 60000); // ms

}

function startTime() {
    let today = new Date();
	let y=today.getFullYear();
	let n=today.getMonth()+1;
	let d=today.getDate();
    let h = today.getHours();
    let m = today.getMinutes();

    m = checkTime(m);
    document.getElementById('time').innerHTML =
    y+"-"+n+"-"+d+" "+h + ":" + m ;
    setTimeout(startTime, 60000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function drawwords()
{
	let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    let hh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	
	let c = document.getElementById("word");

	c.style.left=(w/2-500+200)+"px";
	c.style.top=(hh/2-250+180)+"px";
	
	let c2 = document.getElementById("time");
	c2.style.left=(w/2-450+360)+"px";
	c2.style.top=(hh/2-205+200)+"px";
}

function drawstar()
{
		let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    let hh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 

	let today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	
	let currentsec=h*3600+m*60+s; 

	let c2 = document.getElementById("myCanvas2");
	let ctx2 = c2.getContext("2d");	
	ctx2.canvas.width  = w;
    ctx2.canvas.height  = hh;
	
	let imgs1=new Image();
	imgs1.onload=function(){
	    ctx2.drawImage(imgs1, 0, 0, w, hh);
	} 
	
		if (currentsec>=0&&currentsec<=14400)
	{
	    imgs1.src="img/star3.png";	
	}
	if (currentsec>=14400&&currentsec<=18000)
	{
	    imgs1.src="img/star3.png";	
	}
	if (currentsec>=18000&&currentsec<=25200)
	{
	    imgs1.src="img/star4.png";	
	}
	if (currentsec>=25200&&currentsec<=36000)
	{
		ctx2.clearRect(0, 0, c2.width,c2.height);	
	}
	if (currentsec>=36000&&currentsec<=61200)
	{	
		ctx2.clearRect(0, 0, c2.width,c2.height);
	}
	if (currentsec>=61200&&currentsec<=72000)
	{
	    imgs1.src="img/star4.png";	
	}
	if (currentsec>=72000&&currentsec<=75600)
	{	
	    imgs1.src="img/star4.png";
	}
	if (currentsec>=75600&&currentsec<=86399)
	{
	    imgs1.src="img/star3.png";	
	}
	setTimeout(drawstar, 60000);
}

function drawpic()
{
		let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    let hh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 

	let today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	
	let currentsec=h*3600+m*60+s; 

	let c3 = document.getElementById("myCanvas3");
	let ctx3 = c3.getContext("2d");	
	ctx3.canvas.width  = w;
    ctx3.canvas.height  = hh;
	
	let imgsp=new Image();
	imgsp.onload=function(){
	    ctx3.drawImage(imgsp, 0, 400, w, hh);
	} 
	
	if (currentsec>=25200&&currentsec<=43200)
	{
	    imgsp.src="img/star3.png";	
	}
	if (currentsec>=43200&&currentsec<=64800)
	{
	    imgsp.src="img/star3.png";	
	}
	
	if (currentsec>=64800&&currentsec<=86399)
	{	
		imgsp.src="img/star4.png";	
	}
	if (currentsec>=0&&currentsec<=25200)
	{
	    imgsp.src="img/star4.png";	
	}

	let t = setTimeout(drawpic, 60000);
}

drawsky();
drawstar();
startTime();