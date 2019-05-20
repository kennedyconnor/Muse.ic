export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    get Template() {
        return `<li> ${this.title} --- ${this.artist}</li>
                 <audio onplay="app.controllers.itunesCtrl.autoPause('${this.preview}')" controls>
  <source src="${this.preview}" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio> `
    }
}