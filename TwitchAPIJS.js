$(document).ready(function() {

  var callBack = '?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm&callback=?';
  var allUsers = document.getElementsByClassName("specificUser");
  var userImages = document.getElementsByClassName("onlineOfflineImg");
  var streamers = ["freecodecamp", "GeoffStorbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "medrybw"];
  var streamContents = document.getElementsByClassName("streamContent");

  streamers.forEach(function(stream) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + stream + '?callback=?', function(data) {
      if (data.stream === null) {
        userImages[streamers.indexOf(stream)].src = "http://irongateequine.com/wp-content/uploads/2015/02/Red-X.png";
      } else {
        userImages[streamers.indexOf(stream)].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Checkmark_green.svg/417px-Checkmark_green.svg.png";
        var streamInfo = data.stream.channel.status;
        streamContents[streamers.indexOf(stream)].textContent = streamInfo;
      }
    });
  });

  $("button").hover(function() {
      $(this).addClass("buttonBG");
    },
    function() {
      $(this).removeClass("buttonBG");
    });

  $(".specificUser").hover(function() {
      $(this).addClass("specificUserBG");
    },
    function() {
      $(this).removeClass("specificUserBG");
    });

  $("input").keyup(function(event) {
    $.each(allUsers, function(index) {
      if (allUsers[index].textContent.toLowerCase().indexOf($("input").val().toLowerCase()) === -1) {
        allUsers[index].style.display = "none";
        streamContents[index].style.display = "none";
      } else {
        allUsers[index].style.display = "block";
        streamContents[index].style.display = "block";
      }

    });
  });

  $("#all").click(function() {
    $.each(allUsers, function(index) {
      allUsers[index].style.display = "block";
      streamContents[index].style.display = "block";
    });
  });

  $("#online").click(function() {
    $.each(allUsers, function(index) {
      if (allUsers[index].innerHTML.includes("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Checkmark_green.svg/417px-Checkmark_green.svg.png")) {
        allUsers[index].style.display = "block";
        streamContents[index].style.display = "block";
      } else {
        allUsers[index].style.display = "none";
        streamContents[index].style.display = "none";
      }
    });
  });

  $("#offline").click(function() {
    $.each(allUsers, function(index) {
      if (allUsers[index].innerHTML.includes("http://irongateequine.com/wp-content/uploads/2015/02/Red-X.png")) {
        allUsers[index].style.display = "block";
        streamContents[index].style.display = "block";
      } else {
        allUsers[index].style.display = "none";
        streamContents[index].style.display = "none";
      }
    });
  });
});