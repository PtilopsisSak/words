document.write('<div id="fireworklayer" style="left: -391px; top: 3px; height: auto; width: auto; position: absolute; z-index: -3"><canvas id="fireworkcanvas" width="400" height="400" ></canvas></div>')
var x=150;
var maxlen=x;
var n = 30;
var changes1=[0.1,1,3,5,7,5,3,1,0.5];
var changes=[];
var color=["#66CCFF","#0000FF","#FF00FF",'#1abc9c','#1abc9c','#3498db','#9b59b6','#34495e','#16a085','#27ae60','#2980b9','#8e44ad','#2c3e50','#f1c40f','#e67e22','#e74c3c','#95a5a6','#f39c12','#d35400','#c0392b','#bdc3c7','#7f8c8d'];
for (var i=0;i<11;i++){
    changes[i]=changes1[i]/17
}
var timeout=30;
var times=8;
var curtimes=0,curtimes1=0;
var curangle=[],curangle1=[];
var curlen=[],curlen1=[];
var dx=0,sx= 0,dxx= 0,dx1,sx1;
fireworkcanvas.width  = 2*x;
fireworkcanvas.height = 2*x;
var c=document.getElementById("fireworkcanvas");
var cxt=c.getContext("2d");
cxt.lineWidth=4;
cxt.lineJoin="round";
cxt.lineCap="round";
//
function draw() {
    //
    cxt.clearRect(0,0,2*x,2*x);
    if (curtimes==0){
        for (i=0 ;i<n;i++){
            curangle[i]=Math.random()*2*Math.PI;
            curlen[i]=Math.ceil(Math.random()*maxlen)
        }
    }
    for (i=0;i<n;i++) {
        dx=curlen[i]*changes[curtimes];
        sx=curlen[i]*curtimes/times;
        dxx=dx+sx;
        cxt.beginPath();
        cxt.moveTo(x+Math.cos(curangle[i])*dxx,x+Math.sin(curangle[i])*(dxx));
        cxt.lineTo(x+Math.cos(curangle[i])*(sx-dx),x+Math.sin(curangle[i])*(sx-dx));
        cxt.stroke();
    }
    if (curtimes==times) {
        curtimes=0;
        if (ai) {
            setTimeout("rnd()",timeout);
        }else{
            setTimeout("cxtclear()",timeout);
        }
    } else{
        curtimes++;
        setTimeout("draw()",timeout);
    }
}
function cxtclear(){cxt.clearRect(0,0,2*x,2*x)}
document.addEventListener('click', function (e) {
    ai =false
    fireworklayer.style.left= e.pageX-x;
    fireworklayer.style.top=e.pageY-x;
    cxt.strokeStyle=color[Math.floor(Math.random()*22)];
    draw();
});
