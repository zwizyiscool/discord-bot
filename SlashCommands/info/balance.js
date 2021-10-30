const {MessageEmbed, Interaction}= require('discord.js');
const db = require('../../schema/currency-schema')

module.exports = {
    name:'balance',
    description:'balance of user',
    run: async (client, interaction , arguments) => {
        db.findOne({UserID: interaction.member.id}, async (err, data)=>{
            if(!data){
                data = new db({
                    UserID: interaction.member.id,
                    Content: [
                        {
                            Content:500
                        }
                    ],
                })

            }
            data.save()
        })

        db.findOne({UserID: interaction.member.id}, async (err, data)=>{
            if (err) throw err
            if(data){
                let embed2 = new MessageEmbed()
                .setColor('#41D15C')
                .setTitle('ᵔ ͜ʖ ͡ᵔ')
                .setDescription(`${data.Content.map(
                    (w) => `You Balance is ✧ ${w.Content}`
                ).join(' ')}`)
                interaction.followUp({embeds:[embed2]})
            }else if (!data){
                let embed1 = new MessageEmbed()
                .setColor('#41D15C')
                .setTitle('ᵔ ͜ʖ ͡ᵔ')
                .setDescription(`You have 0 Nikons!`)
                interaction.followUp({embeds:[embed1]})
            }
            
        })
    }
}