import { Telegraf } from 'telegraf';
import 'dotenv/config';
import * as fs from 'node:fs';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    await ctx.reply(`أهلاً ${ctx.chat.first_name},`);
    await ctx.reply(`شرفت ونورت معرض القهوة`);
    await ctx.replyWithMarkdown(
        "\n\n\nانا البوت الخاص بالصور عشان تستلم صورتك كل الي عليك تسويه هو انك تكتب هذا الأمر \n\n"+
        '``` \/image {رقم الصورة} ```  مثال ``` \/image 1234 ```'
    );

});

bot.help(async (ctx) => {
    await ctx.replyWithMarkdown(
        "\n\n\ عشان تستلم صورتك كل الي عليك تسويه هو انك تكتب هذا الأمر \n\n"+
        '``` \/image {رقم الصورة} ```  مثال ``` \/image 1234 ```'
    );

});

bot.command('image', (ctx) => {
    let imageID = ctx.update.message.text.split(' ')[1];
    if (!fs.existsSync("../images/"+imageID+".png") || isNaN(imageID)) {
        ctx.reply(`الصورة غير موجودة`);
        return;
    }
    ctx.replyWithPhoto({ source: "../images/"+imageID+".png" });
    fs.renameSync("../images/"+imageID+".png","../images/"+imageID+"-sent.png");
});

bot.launch();
