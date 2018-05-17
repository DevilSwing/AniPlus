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
	console.log(result);
	access_token = result.access_token;
});
function getAniList (){
	$.get('https://anilist.co/api/browse/anime?access_token=' + access_token, function(result){
		console.log(result);
	});
		
		}
		$('button').click(function() {
			getAniList();
		})



});