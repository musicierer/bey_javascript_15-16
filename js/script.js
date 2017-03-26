$("#go").click(function(){
	var txt = $("#search").val();
	console.log(txt);
	$.getJSON("https://pixabay.com/api/?key=3118779-be29778b1b1db18e334fc6de3&q="+txt+"&image_type=photo",
		function(data){
		console.log(data);
    
		$.each(data.hits, function(i,item){
          $("<img/>").attr("src", item.previewURL).appendTo("#example_j");
          });
        });
             });
	$("#clear").click(function(){
		$("#example_j").empty();
		
	});