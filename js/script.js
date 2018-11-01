		 for (i = 0; i <= book.length; i++) {
			
			document.write("<div class='bookBox "+book[i].genre+"'>");
			document.write("<div class='coverBox'>");
			document.write("<img src='covers/"+book[i].image+".jpg'>");
			document.write("</div>");
			document.write("<div class='personalInfo'>");
			document.write("<p class='authorName'>"+book[i].author+"</p>");
			document.write("<p>"+book[i].title+"</p>");
			document.write("</div>");
			document.write("<div class='formatBox'>");
			if (book[i].epub === true) {
			document.write("<div class='formatBoxInside'>epub</div>");
			}
			if (book[i].mobi === true) {
			document.write("<div class='formatBoxInside'>mobi</div>");
			}
			if (book[i].pdf === true) {
			document.write("<div class='formatBoxInside'>pdf</div>");
			}
			document.write("</div>");
			document.write("</div>");
			
}
