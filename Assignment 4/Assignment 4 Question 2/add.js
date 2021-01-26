
function AddNumbers()
{
	var a=Number(document.getElementById("n1").value);
	var b=Number(document.getElementById("n2").value);
	console.log(a);
	console.log(b);
	var c=a+b;
	console.log(c);
	document.getElementById("n3").value=c;
}