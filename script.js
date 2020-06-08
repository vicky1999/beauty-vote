function createJSON(n) {
	text='[';
	for(var i=0;i<n;i++) {
		text+='{"id":'+i+',"votes"'+':0},'
	}
	text+='{"id":'+n+',"votes"'+':0}]';
	return text;
}

function SortByVotes(x,y) {
    return (x.votes <= y.votes) ? 1 : -1; 
}

var votes;
var n;

function init() {
	var json=createJSON(30);
	//console.log(json)
	n=30;
	votes=JSON.parse(json);
	displayImages();
}

function displayImages() {
	image1=document.getElementById('image1');
	image2=document.getElementById('image2');
	image1.src='Images/'+Math.floor(Math.random()*30)+'.jpeg';
	image2.src='Images/'+Math.floor(Math.random()*30)+'.jpeg';
}

function vote(image) {
	console.log(votes);
	img=document.getElementById(image);
	source=img.src;
	last_index=source.lastIndexOf('/')+1;
	dot_index=source.lastIndexOf('.');
	file=source.slice(last_index,dot_index);
	
	for(var ind=0;ind<=n;ind++) {
		console.log(file+" "+votes[ind].id);
		if(votes[ind].id.toString(10) === file) {
			votes[ind].votes++;
			break;
		}
	}	
	votes.sort(SortByVotes);
	//console.log(votes);
	displayImages();
}


function displayVotes() {
	document.body.innerHTML='';
	for(var i=0;i<=n;i++) {
		division=document.createElement('DIV');
		image=document.createElement('IMG');
		vote=document.createElement('P');
		division.style.display='inline';
		image.src='Images/'+votes[i].id+'.jpeg';
		image.style.width="500px";
		image.style.height="650px";
		image.style.margin="10px 30%";
		image.style.display="tableCell";
		vote.innerHTML=("# OF VOTES : "+votes[i].votes).bold();
		vote.style.fontSize="25px";
		vote.style.color="#4B3B5A";
		vote.style.fontFamily="arial";
		vote.style.margin="2px 40%";
		vote.style.display="inlineTable";

		console.log(vote);
		division.appendChild(vote);
		division.appendChild(image);

		document.body.appendChild(division);
		document.body.appendChild(document.createElement('HR'));
		//division.appendChild(document.createElement('BR'));
		
	}
}