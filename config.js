module.exports = {
    app: {
        px: 'k',
        token: 'OTYzODM0MjkyNzAwNTkwMDgw.Ylb2og.H4wGIRyMLE5W9b3cB0JpaEY_iko',
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
