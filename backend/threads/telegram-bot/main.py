"""
 This is a echo bot.
 It echoes any incoming text messages.
 """

import logging

from aiogram import Bot, Dispatcher, executor, types
from pathlib import Path
from aiogram.dispatcher.filters import Text

API_TOKEN = "5341845782:AAEecJVxbM_0nIqZj1_xcOc5lrYCymQw3XM"

# Configure logging
logging.basicConfig(level=logging.INFO)

# Initialize bot and dispatcher
bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)


@dp.message_handler(commands=["start", "help"])
async def send_welcome(message: types.Message):
    print(message['from']['username'])
    text = f"Привет, {message['from']['username']}! Я буду сообщать тебе о новых событиях. Нажми кнопку ниже для получения примера уведомления."
    buttons = types.ReplyKeyboardMarkup(resize_keyboard=True)
    button_new = types.InlineKeyboardButton("Новое событие", callback_data="new")
    button_past = types.InlineKeyboardButton("Прошедшее событие", callback_data="past")
    buttons.add(button_new, button_past)
    await bot.send_message(message["from"]["id"], text, reply_markup=buttons)


@dp.callback_query_handler(text=["new"])
@dp.message_handler(Text(equals="Новое событие"))
async def new_event(query: types.CallbackQuery):
    text = """Правда, что 10 деревьев может спасти 1 тонна собранной макулатуры? Да! Сегодня ты узнаешь об экологическом движении «РазДельный Сбор» и о том, как стать волонтёром 🌿  
📌 Всю информацию об экологическом движении «РазДельный Сбор» и как присоединиться к сообществу, найдёшь в telegram-канале (https://t.me/rsbor_ru), группе ВКонтакте (https://vk.com/rsbor_msk) и на сайте (https://rsbor.ru/)."""
    new_image = types.InputFile(str(Path(Path.cwd(), "new", "new.jpg")))
    buttons = types.InlineKeyboardMarkup(row_width=1)
    buttons.add(types.InlineKeyboardButton("Участвую", url="https://vk.com/rsbor_msk"))
    await bot.send_photo(query["from"]["id"], new_image, text, reply_markup=buttons)


@dp.callback_query_handler(text=["past"])
@dp.message_handler(Text(equals="Прошедшее событие"))
async def new_event(query: types.CallbackQuery):
    text = """Сохраним память вместе! ⭐️

Вчера на шествии «Бессмертный полк» волонтёры делали памятные фотографии для москвичей и гостей города.

📸Всего #ВолонтёрыМосквы сделали 50 тысяч снимков участников шествия. 

Добровольцы-фотографы помогали на площади Васильевский Спуск. Москвичи фотографировались вместе с друзьями и родными и, конечно, портретами героев семьи. 

Все снимки с шествия «Бессмертный полк» уже можно найти на сайте (https://mosvolonter.ru/n/2022/05/JOSx5o) Ресурсного центра #Мосволонтёр."""
    new_image = types.InputFile(str(Path(Path.cwd(), "new", "past.jpg")))
    buttons = types.InlineKeyboardMarkup(row_width=1)
    buttons.add(types.InlineKeyboardButton("Подробнее", url="https://mosvolonter.ru/n/2022/05/JOSx5o"))
    buttons.add(types.InlineKeyboardButton("Фин. отчет(бизнес)", url="https://link-to-bissnes-acc.ru/"))
    await bot.send_photo(query["from"]["id"], new_image, text, reply_markup=buttons)


if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)
