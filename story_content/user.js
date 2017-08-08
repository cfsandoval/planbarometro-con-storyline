function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5uj7ES23ODt":
        Script1();
        break;
      case "6VnJw2cz8p2":
        Script2();
        break;
      case "5hoUfvVnnQT":
        Script3();
        break;
      case "6YfMKIpwh6u":
        Script4();
        break;
      case "66JLen5AUSr":
        Script5();
        break;
      case "6CGvv5eGvWk":
        Script6();
        break;
      case "61Cbe8pkcaG":
        Script7();
        break;
      case "5dzgctUfFkK":
        Script8();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
player.SetVar("idioma",en);
}

function Script2()
{
  var player = GetPlayer();
var idioma = player.GetVar("valor");
var link = "http://elearning.cepal.org/moodle/lb/radar/test2.html?institucional"+valor;
alert(link)
window.open(link);


}

function Script3()
{
  var player = GetPlayer();
player.SetVar("slideno",1);
}

function Script4()
{
  var player = GetPlayer();
var number = player.GetVar("slideno");
var link = "www.cepal.org";
win=window.open(link);

}

function Script5()
{
  alert(muestra alerta);
}

function Script6()
{
  parent.document.body.style.backgroundColor = "#990000";
}

function Script7()
{
  var email="yourAddress@email.com";
var subject="subject line";
var body_start="How you want to begin your body.";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script8()
{
  var number = player.GetVar("slideno");
var link = http://elearning.cepal.org"+number;
OpenWebObject(1,link,0,0,720,520,245,52);
var oWebObject1 = g_oWebObjects["1"];
oWebObject1.Div.style.zIndex = 900 ;
}

