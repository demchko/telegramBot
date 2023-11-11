import express from 'express';
import {PORT, TOKEN} from "./config.js";
import {Telegraf} from "telegraf";

const app = express();
const bot = new Telegraf(TOKEN);

bot.start(ctx => {
    ctx.reply('Welcome bro')
});

bot.on('text', ctx => {
    ctx.reply('just text');
})

bot.on('sticker', ctx => {
    ctx.reply('класний стікер');
})

bot.on('voice', ctx => {
    ctx.reply('Гарний голос');
})

bot.launch();
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))