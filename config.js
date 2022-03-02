module.exports = {
    app: {
        px: '!',
        token: 'OTA4NjYyNTc3ODcyMTM0MTU0.YY4_-A.fYor7b5pSVynPjJubyAVInSnyWM',
        playing: 'Fucking life'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
