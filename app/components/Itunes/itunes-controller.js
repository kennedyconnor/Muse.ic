import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()
let _songs = itunesService.Songs;

function drawSongs(results) {
  //code to draw songs
  let template = '';
  results.forEach(song => template += song.Template); //push all song templates to html
  document.querySelector('#songs').innerHTML = template; //write to document

  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)

}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber('songs', drawSongs)
  }

  autoPause(currentSong) {
    let songs = document.querySelectorAll('audio');
    songs
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController