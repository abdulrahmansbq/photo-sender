import { Telegraf } from 'telegraf';
import 'dotenv/config';
import * as fs from 'node:fs';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    await ctx.reply(`Welcome ${ctx.chat.first_name},`);
    await ctx.reply(`Glade that I am contacting to you through the Photo Sender Bot`);
    await ctx.replyWithMarkdown(
        "\n\n\nIn this bot and after taking your picture I can deliver you your picture. " +
        "To receive you picture send  the below message\n\n"+
        '``` \/image {picture number} ```  Example ``` \/image 1234 ```'
    );

});

bot.help(async (ctx) => {
    await ctx.replyWithMarkdown(
        "To receive you picture all what you have to so is sending the below message\n\n"+
        '``` \/image {picture number} ```  Example ``` \/image 1234 ```'
    );

});

bot.command('image', (ctx) => {
    let imageID = ctx.update.message.text.split(' ')[1];
    let extension = "";
    if (isNaN(imageID)) {
        ctx.reply(`Picture is not found`);
        return;
    }else if(fs.existsSync("../images/picbot-"+imageID+".png")){
        extension="png";
    }else if(fs.existsSync("../images/picbot-"+imageID+".jpg")){
        extension="jpg";
    }else if(fs.existsSync("../images/picbot-"+imageID+".jpeg")){
        extension="jpeg";
    }else{
        ctx.reply(`Picture is not found`);
        return;
    }
    ctx.replyWithPhoto({ source: "../images/picbot-"+imageID+"."+extension });
    fs.renameSync("../images/picbot-"+imageID+"."+extension,"../images/picbot-"+imageID+"-sent."+extension);
});

bot.launch();
