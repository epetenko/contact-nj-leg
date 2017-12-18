var pymChild = null;

var pymChild = new pym.Child();

var results_json = [];

$(document).ready(function () {

$.getJSON( 'js/town_by_town4.json', function( data ) {
  results_json.push(data)
  pymChild.sendHeight();
});

// pymChild = new pym.Child();

$('#town').autoComplete({
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = Object.keys(results_json[0]);
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        pymChild.sendHeight();
        suggest(matches);
        pymChild.sendHeight();
    }

});

$("#input_click" ).click(function() {
  var town = $('#town').val();
  if (town == 'Newark' | town == 'Jersey City'){
    console.log("this")
    $('.exception').html(
    $("<div class='weirdness'><p>You live in a town that's split up. Check <a target='_blank' href='http://njgin.state.nj.us/state/NJ_CongressionalDistricts/'>this map</a> to find out what district you fall under.</p></div>")
    );
    create_house_split(results_json[0],town)
    // create_sen_split(results_json[0],town)
  } else {
    create_cards_house(results_json[0],town)
    create_cards_senate(results_json[0],town)
    pymChild.sendHeight();
    console.log(pymChild);
  };
  $('.house').show();
  $('.senate').show();
});

function create_cards_house(data,town_val) {
  key = data[town_val][0]
  $('.district').html(
    $("<div class='title'>DISTRICT "+key.District+"</div>")
  );
  $('.house').html(
    $("<div class='chamber'>ASSEMBLY</div>")
  );
 $('.house').append(
    $("<div class='legislators'><div class='name'>" + key.Assembly_1 + "</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key.Assembly_phone_1 + "'>" + key.Assembly_phone_1 + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key.Assembly_email_1 + "'>" + key.Assembly_email_1+"</a></td></tr><tr><td>Address:</td><td>"+ key.Assembly_office_1 +"</table></div></div>")
  );
  $('.house').append(
    $("<div class='legislators'><div class='name'>" + key.Assembly_2 + "</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key.Assembly_phone_1 + "'>" + key.Assembly_phone_2 + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key.Assembly_email_2 + "'>" + key.Assembly_email_2+"</a></td></tr><tr><td>Address:</td><td>"+ key.Assembly_office_2 +"</table></div></div>")
  );
  pymChild.sendHeight();
};

function create_cards_senate(data,town_val) {
  key = data[town_val][0]
  $('.senate').html(
    $("<div class='chamber'>SENATE</div>")
  );
 $('.senate').append(
      $("<div class='legislators'><div class='name'>" + key.Senate + "</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key.Senate_phone + "'>" + key.Senate_phone + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key.Senate_email + "'>" + key.Senate_email+"</a></td></tr><tr><td>Address:</td><td>"+ key.Senate_main_office +"</table></div></div>")
  );
  // $('#close-geo').show();
  pymChild.sendHeight();
};

function create_house_split(data,town_val) {
  key=data[town_val];
  console.log(key)
    $('.house').html(
      $("<div></div>")
    );
      $('.district').html(
      $("<div></div>")
    );
     $('.senate').html(
      $("<div></div>")
    );
  $.each(key,function(i,item){

    $('.house').append(
    $("<div class='district title'>DISTRICT "+key[i].District+"</div><div class='chamber'>ASSEMBLY</div>")
  );
   $('.house').append(
      $("<div class='legislators'><div class='name'>" + key[i].Assembly_1 + "</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key[i].Assembly_phone_1 + "'>" + key[i].Assembly_phone_1 + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key[i].Assembly_email_1 + "'>" + key[i].Assembly_email_1+"</a></td></tr><tr><td>Address:</td><td>"+ key[i].Assembly_office_1 +"</table></div></div>")
    );
    $('.house').append(
      $("<div class='legislators'><div class='name'>" + key[i].Assembly_2 + "</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key[i].Assembly_phone_1 + "'>" + key[i].Assembly_phone_2 + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key[i].Assembly_email_2 + "'>" + key[i].Assembly_email_2+"</a></td></tr><tr><td>Address:</td><td>"+ key[i].Assembly_office_2 +"</table></div></div>")
    );
    $('.house').append(
    $("<div class='chamber'>SENATE</div>")
    );
    $('.house').append(
      $("<div class='legislators'><div class='name'>" + key[i].Senate + "</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key[i].Senate_phone + "'>" + key[i].Senate_phone + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key[i].Senate_email + "'>" + key[i].Senate_email+"</a></td></tr><tr><td>Address:</td><td>"+ key[i].Senate_main_office +"</table></div></div>")
      );
  });
  pymChild.sendHeight();
};


function create_sen_split(data,town_val) {
  key=data[town_val];
    // $('.senate').html(
    //   $("<div></div>")
    // );
  $.each(key,function(i,item){

    $('.house').append(
    $("<div class='district title'>"+key[i].District+"</div><div class='chamber'>SENATE</div>")
  );
   $('.house').append(
      $("<div class='legislators'><div class='name'>" + key[i].Senate + " ("+ key[i].Senate_party+")</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key[i].Senate_phone + "'>" + key[i].Senate_phone + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key[i].Senate_email + "'>" + key[i].Senate_email+"</a></td></tr><tr><td>Address:</td><td>"+ key[i].Senate_main_office +"</table></div></div>")
      );
  });
  pymChild.sendHeight();
};




  // $('#close-geo').click(function(){
  //   console.log("this")
  //   $('.house').slideToggle(function(){pymChild.sendHeight();});
  //   $('.senate').slideToggle(function(){pymChild.sendHeight();});
  // });


});






