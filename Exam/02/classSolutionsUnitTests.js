let assert = require('chai').assert;
let expect = require('chai').expect;
let SoftUniFy = require('./classSolution');

describe('SoftUniFy', () => {
    let sofunify;
    beforeEach('initializing', () => {
        sofunify = new SoftUniFy();
    });
    it('should be innitialize with empty allSongs prop', () => {

        assert.deepEqual(sofunify.allSongs, {});
    });

    describe('downloadSong', () => {
        it('should add song to allSongs in given format', () => {
                let output = sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
                assert.equal(sofunify.allSongs['Eminem']['songs'][0], 'Venom - Knock, Knock let the devil in...');
                assert.deepEqual(output, sofunify);
            }
        );

        it('should add song to allSongs in given format if there is elements inside already', () => {
                sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...').downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
                assert.equal(sofunify.allSongs['Eminem']['songs'][1], 'Venom - Knock, Knock let the devil in...');
            }
        );
    });

    describe('playSong(song) searches', ()=>{
        it('should give massage if there are no songs',()=>{
            let massage = sofunify.playSong('test');
            assert.equal(massage,`You have not downloaded a test song yet. Use SoftUniFy's function downloadSong() to change that!` )
        });

        it('should give massage if there are no songs',()=>{
            sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
            let massage = sofunify.playSong('test');
            assert.equal(massage,`You have not downloaded a test song yet. Use SoftUniFy's function downloadSong() to change that!` )
        });

        it('sould return songs in correct format',()=>{
            sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

            let output = sofunify.playSong('Phenomenal');

            assert.equal(output,'Eminem:\nPhenomenal - IM PHENOMENAL...\n' );
        });
    });

    describe('songsList()',()=>{
        it('should give massage when no songs are added',()=>{
            let output=sofunify.songsList;
            assert.equal(output,`Your song list is empty` );
        });

        it('should give all songs when available', ()=>{
            sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

            let output = sofunify.songsList;

            assert.equal(output,'Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar.. ' );
        });
    });

    describe('rateArtist()', ()=>{
        it('wrong with one argument',()=>{
            let output = sofunify.rateArtist('Eminem');
            assert.equal(output, 'The Eminem is not on your artist list.')
        });

        it('wrong with two argument',()=>{
            let output = sofunify.rateArtist('Eminem', 50);
            assert.equal(output, 'The Eminem is not on your artist list.')
        })
    });
});