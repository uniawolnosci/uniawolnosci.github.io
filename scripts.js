function ocenki () {
	$(".ocena span:first-child").append("<img src='img/ocena1.png'/>");	
	$(".ocena span:nth-child(2)").append("<img src='img/ocena2.png'/>");	
	$(".ocena span:nth-child(3)").append("<img src='img/ocena3.png'/>");	
	$(".ocena span:last-child").append("<img src='img/ocena4.png'/>");	
	$(".ocena5").css("color","#00647d");	
	$(".ocena4").css("color","#008000");	
	$(".ocena3").css("color","#6D9900");	
	$(".ocena2").css("color","#C69100");	
	$(".ocena1").css("color","#C10000");	
	$(".ocena5").append("5/5");	
	$(".ocena4").append("4/5");	
	$(".ocena3").append("3/5");	
	$(".ocena2").append("2/5");	
	$(".ocena1").append("1/5");	

}

ocenki ()

function automatyzacja () {
	$("main").append("<article class='spistresci'> Spis Treści<section class='spis'> <ul> <li>Wstęp i deklaracja</li><ul> <li><a href='program.html'>Wprowadzenie</a></li> <li><a href='idea.html'>Deklaracja ideowa</a></li> <li><a href='wzorce.html'>Wzorce na świecie</a></li>  </ul><li>Gospodarka i polityka społeczna</li><ul> <li>Proste prawo</li> <li>Państwo dobrobytu</li> <li>Raj biznesowy</li> <li>Rynek światowy</li> <li>Transport</li> <li>Środowisko i energetyka</li> <li>Pomoc społeczna i sprawy socjalne</li>  </ul><li>Wolność człowieka</li><ul> <li>Wolność słowa</li> <li>Narkotyki</li> <li>Samoobrona</li> <li>Świeckie państwo</li> <li>LGBT i kwestie równouprawnienia</li> <li>Pozostałe</li>  </ul><li>Naród i społeczeństwo</li><ul> <li>Oświata </li> <li>Medycyna</li> <li>Patriotyzm</li> <li>Bezpieczeństwo </li> <li>Armia</li> <li>Dyplomacja</li> <li>Unia Europejska</li>  </ul><li>Ustrój rzeczypospolitej</li><ul> <li>Sądy</li> <li>Praworządność</li> <li>Parlament</li> <li>Samorządy</li> <li>Administracja</li> <li>Ministerstwa</li>  </ul><li>Zakończenie</li><ul> <li>O autorze</li></ul> </ul> </section></article>");	
	$("head").append("<meta charset='utf-8'> <meta name='theme-color' content='#00647d'> <meta name='description' content='Unia Wolnosci'> <meta name='author' content='Mateusz Słotwiński'> <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />  <title>Unia Wolności</title> <link rel='shortcut icon' type='x-icon' href='img/icon.png'> <link rel='canonical' href='https://soulgraphy.me'> <link href='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap' rel='stylesheet'> <link href='main.css' rel='stylesheet' type='text/css'>")
	$("body").prepend("<div id='loader-wrapper'><div id='loader'></div><div class='loader-section section-left'></div><div class='loader-section section-right'></div></div>")
}

automatyzacja ()
