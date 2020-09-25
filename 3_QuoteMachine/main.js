url = "https://raw.githubusercontent.com/AbhiramKrishna88/100JS/master/3_QuoteMachine/quotes.json";
var i = 0;

window.onload=quote();

function hex(){
	const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        var clr = "";
        for (var i = 0; i < 6; i++) {
            const randomNumber = [Math.floor(Math.random() *16)];
            clr = clr + hex[randomNumber];
            //console.log(clr+"---"+(randomNumber-1));
         }
    return clr;
    
}

function quote() {
	fetch(url)
	.then(res => res.json())
	.then(data => {
		//console.log(data); 
		//console.log(data.quotes[0].quote); 
		addCont(data);
	})
	.catch(err=>{console.log(err);});
		//console.log(hex());
	//console.log(getComputedStyle(document.documentElement).getPropertyValue('--bcolor'));
	document.documentElement.style.setProperty("--bcolor", "#"+hex());

	function addCont(jsonData){
		//console.log(jsonData.quotes[i].quote);
		document.getElementById('text').innerHTML = jsonData.quotes[i].quote;
		document.getElementById('author').innerHTML = jsonData.quotes[i].author;	
		i++;
		if (i==jsonData.quotes.length) {i=0;}
	}
}