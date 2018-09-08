
//Scores
h1_score=0;
headers_score=0;
title_score=0;
alt_score=0;

//Weights
h1_weight = 1;
alt_weight= 1;

function seo(){
	$('#milestones').html('');
	//head
	title_score = title();
	meta_score = meta();

	//body
	h1_score = h1();
	alt_score = alt();
}


function title(){
	let title = $('title');
	let title_count_score=0;
	let title_length_score=0;
	
	if(title.length<1){ (title_count_score-1) * -10;}

	if(title[0].innerHTML.length<60){ title_length_score = 10;
	else{ title_length_score = (title[0].innerHTML.length - 60) * -1; }

	return title_length_score + title_count_score;
};

function meta(){};



function h1(){
	let h1 = $('h1');
	$("#milestones").append('Header');
	//number of H1's  -- there must only be 1 h1
	if(h1.length==1){
		$("#milestones").append('<li>Only 1 header - Good!</li>');
		h1_count_score= 10;
	}else{
		$("#milestones").append('<li>More than 1 header - bad</li>');
		h1_count_score= -5*(h1.length-1);
	}
	
	//length of H1
	if(h1[0].innerHTML.length<65){
		$("#milestones").append('<li>h1 less than 65 characters - Good!</li>');
		h1_length_score= 10;
	}else{
		$("#milestones").append('<li>h1 more than 65 characters - Bad!</li');
		h1_length_score = (h1[0].innerHTML.length - 65) * -1;
	}

	return h1_length_score + h1_count_score;
}
function alt(){
	let images = $('img');
	let no_alts=0;
	for (var i=0; i<images.length; i++) {
		if(images[i].getAttribute("alt")==""){ no_alts++;};
	}
	return (images.length - no_alts) * alt_weight;
}

			

		//Title
		//Meta charset
		//description
		//keywords


	//BODY SECTION
		//ALT Attributes on Images - each image has alts
			


	//use of strong instead of bold
	//use of emphasis instead of i
	//











// var totalScore = 0;



// var meta = $('meta');

// for (var i = meta.length - 1; i >= 0; i--) {
// 	for (var j = meta[i].attributes.length - 1; j >= 0; j--) {
// 		switch(meta[i].attributes[j]){
// 			case "description":
// 				if .length<60;
// 			case "keywords":
// 			case "charset":
// 			default
// 		}
// 	}
// }
// var metaDescription = $('meta').attr('name').length == 1 ? 10 : 0;

// var metakeywords = $('meta').attr('keywords').length == 1 ? 10 : 0;

// var linksScore = $('a').length;

// var keywords = $('h1').html().split(' ');
// var keywordScore = $('body').html()
// (temp.match(/is/g)
// //title mawjoud, fama - w a9al min 60 w fih keywords behin
// var titleScore = $('title').html();

// //viewport mawjoud


