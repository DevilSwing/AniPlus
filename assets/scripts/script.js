$(document).ready(function(){

	const client_secret = 'F6wh6xdtLeyH1KksLmIA';
	const client_id = 'grenka-ynakp';
	let access_token = '';


	const params = {
		grant_type    : "client_credentials",
		client_id     :  client_id,
		client_secret :  client_secret
	}

	$.post('https://anilist.co/api/auth/access_token', params, function(result){
		access_token = result.access_token;
	});

	function getAniList (){
		$.get('https://anilist.co/api/browse/anime?access_token=' + access_token, function(result){
			console.log(result);
		});

		showAnimeList(result);
			
	}
	
	$('button').click(function() {
		getAniList();
	})

	function showAnimeList(animeList) {
			// цикл, который проходит по полученному массиву и закидывает верстку в анимелист - в каччестве верстки он получает строку с подставленными данными из метода ниже
	}

	function getAnimePreview(anime) {
		return '<div class="anime-preview"><div class="anime-preview__left"><img  src="' + anime.title + '"></div><div class="anime-preview__right"><div class="anime-preview__title">Cowboy Bebop: Knockin\' on Heaven\'s Door/Cowboy Bebop: Tengoku no Tobira</div><div class="anime-preview__genres"><span>Genres</span>:Action, Adventure, Comedy, Drama, Sci-Fi</div><div class="anime-preview__airing_status"><span>Airing Status</span>: finished airing</div><div class="anime-preview__total_episodes"><span>Episodes</span>: 26</div></div></div>';
	}

});