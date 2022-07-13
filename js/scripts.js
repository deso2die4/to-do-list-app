



function newItem(){
  let listItem = $('<li></li>');
  let inputValue = $('#input').val();
  listItem.append(document.createTextNode(inputValue));


   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = $('#list');
     list.append(listItem);
   }

   function crossOut() {
   listItem.toggleClass("strike");
 }

    listItem.on("dblclick", function crossOut() {
		listItem.toggleClass("strike");
	});

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode("X"));
  listItem.append(crossOutButton);

  $(crossOutButton).on("click", deleteListItem);


  function deleteListItem(){
 		listItem.addClass("delete");
 	}


  $('#list').sortable();
}
