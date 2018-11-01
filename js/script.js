for (i = 0; i <= book.length; i++) {

	document.write("<div class='bookBox grid-item " + book[i].genre + "'>");
	document.write("<div class='hvr-grow-shadow'>");
	document.write("<div class='coverBox'>");
	document.write("<img src='covers/" + book[i].image + ".jpg'>");
	document.write("</div>");
	document.write("<div class='personalInfo'>");
	document.write("<p class='authorName'>" + book[i].author + "</p>");
	document.write("<p class='title'>" + book[i].title + "</p>");
	document.write("</div>");
	document.write("<div class='formatBox'>");
	if (book[i].epub === true) {
		document.write("<div class='formatBoxInside'><img src='images/epub.png'/></div>");
	}
	if (book[i].mobi === true) {
		document.write("<div class='formatBoxInside'><img src='images/mobi.png'/></div>");
	}
	if (book[i].pdf === true) {
		document.write("<div class='formatBoxInside'><img src='images/pdf.png'/></div>");
	}
	document.write("</div>");
	document.write("</div>");
	document.write("</div>");

}
