//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

    var allArticles = document.getElementsByTagName("article");
    var myFirstTag = document.createElement('h3');

    function redHead () {
      for (var i = 0; i < allArticles.length; i++){
        allArticles[i].classList.add("generous-donation");
      }
    }

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.

  var donate = window.prompt("How much would you like to donate?");

  var lessThanGoal = document.createTextNode('Thank you for your donation of $45!');
  var moreThanGoal = document.createTextNode('Thank you for your very generous donation!');

  if (donate < 100) {
    myFirstTag.appendChild(lessThanGoal);
    SideNav.appendChild(myFirstTag);
  } else if (donate >= 100) {
    myFirstTag.appendChild(moreThanGoal);
    SideNav.appendChild(myFirstTag);
    myFirstTag.setAttribute("style","color:red");
    redHead();
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.

  document.getElementById('ConsoleDisplay').innerHTML += ("This speech was written by " + speechesArray[0].author + " in " + speechesArray[0].year + "." + "<br />");

  if(speechesArray[0].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += ("This speech took place before the common era." + "<br />" + "<br />");
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += ("This speech took place during the common era." + "<br />" + "<br />");
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += ("This is the oldest speech on the page." + "<br />");
  }
  if(speechesArray[0].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += ("This is the most recent speech on the page." + "<br />");
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  document.getElementById('ConsoleDisplay').innerHTML += ("This speech was written by " + speechesArray[1].author + " in " + speechesArray[1].year + "." + "<br />");

  if(speechesArray[1].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += ("This speech took place before the common era." + "<br />");
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += ("This speech took place during the common era." + "<br />");
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += ('This is the oldest speech on the page.' + "<br />" + "<br />");
  }
  if(speechesArray[1].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += ('This is the most recent speech on the page.' + "<br />" + "<br />");
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  document.getElementById('ConsoleDisplay').innerHTML += ('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + "." + "<br />");

  if(speechesArray[2].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += ('This speech took place before the common era.' + "<br />");
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += ('This speech took place during the common era.' + "<br />");
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += ('This is the oldest speech on the page.' + "<br />");
  }
  if(speechesArray[2].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += ('This is the most recent speech on the page.' + "<br />");
  }
});
