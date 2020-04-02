var data = stroke;
var obj = JSON.parse(data);
document.write ('<table>');
a = "<i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>"
b = "<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>"
for (i=0; i<11; i++) {
	document.writeln("<tr>");
	for (j=0; j<2; j++){
		if(i == 0 && j==0){
			document.write("<td bgcolor=\"black\">" + "НАЗВА ВАЛЮТИ" + "<\/td>");
			}		    	
				else if(i == 0 && j==1){
				document.write("<td bgcolor=\"black\">" + "ЦІНА (USD)" + "<\/td>");
				}
				else{
					 if(j==0){
						document.write("<td bgcolor=\"black\">" + obj.info[i-1].name + "<\/td>");
					    }
					    if(j==1){	
					    	if(obj.info[i-1].price < obj.info[i-1].difference)
					    		{
					    		document.write("<td bgcolor=\"red\">" + obj.info[i-1].price +"% "+b+ "<\/td>");
					    		}
					    	if(obj.info[i-1].price == obj.info[i-1].difference)
					    			{
					    				document.write("<td bgcolor=\"black\">" + obj.info[i-1].price +"% "+ "<\/td>");
					    			}
					    	if(obj.info[i-1].price > obj.info[i-1].difference)
					    			{
					    				document.write("<td bgcolor=\"#3B8036\">" + obj.info[i-1].price +"% "+a+ "<\/td>");
					    			}
					    		}
					    		
					    	}
					    	
					    } 
					    	document.writeln("<\/tr>");
				    }
				    document.write ("<\/table> ");