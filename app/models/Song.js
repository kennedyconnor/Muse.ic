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

    //     get Template() {
    //         return `<li> ${this.title} --- ${this.artist}</li>
    //          <audio onplay="app.controllers.itunesCtrl.autoPause('${this.preview}')" controls>
    //             <source src="${this.preview}" type="audio/mpeg">
    //             Your browser does not support the audio tag.
    //          </audio> `
    //     }
    // 


    get Template() {
        return `
        <div class="col-3">
            <div class="card" style="width: 22rem;">
                <img src="${this.albumArt}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text" style="list-style:none;">
                       ${this.artist} <br>
                        ${this.collection} <br>
                        $${this.price}<br>
                        </p>
                         <audio onplay="app.controllers.itunesCtrl.autoPause('${this.preview}')" controls>
                         <source src="${this.preview}" type="audio/mpeg">
                         Your browser does not support the audio tag.
                         </audio>
                    </div>
                </div>
            </div>
            }`
    }
}