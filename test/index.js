const { constants } = require('../constant');
const { Emojis } = require('../Emojis');

const emojis = new Emojis({ 
    applicationId: '1238788572694450206',
    applicationToken: constants.token
});

(async()=>{
    const emoji = await emojis.get('1265366228113952869');
    console.log(emoji)
})()