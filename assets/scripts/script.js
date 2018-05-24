$(document).ready(function(){

	const client_secret = 'F6wh6xdtLeyH1KksLmIA';
	const client_id = 'grenka-ynakp';
	let access_token = '';

	const animeListBlock = $('.anime-list');


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
			showAnimeList(result);
		});

		
			
	}
	
	$('button').click(function() {
		getAniList();
	})

	function showAnimeList(animeList) {
		for (var i = 0; i < animeList.length; i++) {
			animeListBlock.append(getAnimePreview(animeList[i]));
		}
	}

	function getAnimePreview(anime) {
		return '<div class="anime-preview"><div class="anime-preview__left"><img  src="' + anime.image_url_lge + '"></div><div class="anime-preview__right"><div class="anime-preview__title">' + anime.title_romaji + '</div><div class="anime-preview__genres"><span>Genres</span>' + getGenres(anime.genres) + '</div><div class="anime-preview__airing_status"><span>Airing Status</span>: ' + anime.airing_status + '</div><div class="anime-preview__total_episodes"><span>Episodes</span>: ' + anime.total_episodes + '</div></div></div>';
	}

	function getGenres(genres) {
		var result = "";

		for (var i = 0; i < genres.length; i++) {
		 	if (genres.length - i > 1) {
		 		result += genres[i] + ', ';
		 	} else {
		 		result += genres[i];
		 	}
		}

		return result;
	}

});