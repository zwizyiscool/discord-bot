const client = require("../index");
const statusArray = [
'You from heaven ಠ_ಠ , WATCHING', 
'In Developement ◕‿◕ , WATCHING',
'/ commands ⌐■_■ , PLAYING',
'Made by zwizy ⌐■_■ , WATCHING',
'Selling Data to Government ◣_◢, PLAYING',
]

client.on("ready", () =>{
    console.log(`✅ ${client.user.tag} booted ! \n ______________________\n`)
    setInterval(() => {
        client.user.setStatus('dnd');
        const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
        const status = random[0];
        const mode = random[1];
        client.user.setActivity(status, { type: mode })
        //console.log(`✅ Status changed to ${status}`)
  
      }, 50000)
}
    

);
