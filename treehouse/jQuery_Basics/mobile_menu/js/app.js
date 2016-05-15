//Problem: It looks gross in smaller browser widths and devices
//Solution: Hide the text links and swap them out with mobile nav
  //Create a select and append to #menu
  var $select = $("<select></select>");
  $("#menu").append($select);
  //Cycle over menu links
  $("#menu a").each(function(){
    var $anchor = $(this);
    //Create an option
    var $option = $("<option></option>");

    //Deal with selected options depending on current page
    if($anchor.parent().hasClass("selected")) {
      $option.prop("selected", true);
    };
    //options value is the href
    $option.val($anchor.attr("href"));
    //options text is text of links
    $option.text($anchor.text());
    //append option to select
    $select.append($option);
  });

  //Bind change listener to the select
  $select.change(function(){
    //go to select's location
    window.location = $select.val();
  });
