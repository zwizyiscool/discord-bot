const {Interaction , MessageEmbed, } = require('discord.js')

module.exports = {
    name:'purge',
    description:'purge messages',
    options: [
        {
            name:'amount',
            description:'amount to purge',
            type: "NUMBER",
            required: true,
        },
        {
            name:'target',
            description:'user messages to porge',
            type: "USER",
            required: false,
        },

        ],

        run: async (interaction) => {

            const amount = interaction.options.getNumber('amount')
            const target = interaction.options.getMember('target')

            const messages = await interaction.channel.messages.fetch()

            const embed1 = new MessageEmbed()
            .setColor('#41D15C')
            .setTitle('ᵔ ͜ʖ ͡ᵔ')

            if(target){
                let i = 0
                const filtered = []
                (await messages).filter((m) => {
                    if(m.author.id === target.id && amount > i){
                        filtered.push(m)
                        i++
                    }
                })
                await interaction.channel.bulkDelete(filtered, true).then(messages => {
                    embed1.setDescription(`Purged ${amount} messages from ${target} `)
                    interaction.reply({embeds:[embed1]})
                })

            } else {
                await interaction.channel.bulkDelete(filtered, true).then(messages => {
                    embed1.setDescription(`Purged ${amount} messages from this channel.`)
                    interaction.reply({embeds:[embed1]})
                })
            }
            
        }

}