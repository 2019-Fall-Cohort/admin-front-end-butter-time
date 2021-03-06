const artists = require("./artists");
const albums = require("./albums");
const songs = require("./songs");
const wrapper = document.querySelector(".wrapper");

module.exports = {

    createButtons() {
        const buttonGrid = document.createElement("article");
        buttonGrid.classList.add("button-grid");
        wrapper.append(buttonGrid);

        var buttons = ['Artists', 'Albums', 'Songs', 'Add', 'Delete'];
        buttons.forEach(function (button) {
            const buttonLowerCase = button.toLowerCase();
            const buttonElement = document.createElement("button");
            buttonElement.innerHTML = button;
            buttonElement.classList.add("nav-button");
            buttonElement.classList.add(buttonLowerCase + "-button");
            buttonGrid.append(buttonElement);
        });

        this.addButtonOnclicks();

        document.querySelector(".add-button").hidden = true;
        document.querySelector(".delete-button").hidden = true;
        
    },

    addButtonOnclicks() {
        const artistsButtonElement = document.querySelector(".artists-button");
        artistsButtonElement.onclick = () => {
            artists.renderArtists();
            artists.renderAlbumsOfArtistsById();
        }
        const albumsButtonElement = document.querySelector(".albums-button");
        albumsButtonElement.onclick = () => {
            albums.renderAlbums();
        }
        const songsButtonElement = document.querySelector(".songs-button");
        songsButtonElement.onclick = () => {
            songs.renderSongs();
        }

        const deleteButtonElement = document.querySelector(".delete-button");
        deleteButtonElement.onclick = () => {
            let deleteConfirmation;
            var confirmDeletion = confirm("Are you sure you want to delete the topmost entity?");
            if (confirmDeletion == true) {
                this.deleteEntity();
            }
        }
    },

    deleteEntity() {
        const contentContainer = document.querySelector(".content-record");
        contentContainer.remove();
    }    

}
