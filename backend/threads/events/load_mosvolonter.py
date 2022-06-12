from tkinter import Y
import requests
import json
from bs4 import BeautifulSoup
from datetime import datetime, date

def get_event_list():
    url = 'https://mosvolonter.ru/events'
    s = requests.Session()
    r = s.get(url)
    text = r.text.split('eventsList:')
    text = text[1].split('let mapDefaults')
    result = json.loads(text[0].strip()[:-2])
    return result


def get_detail(url):
    fullurl = 'https://mosvolonter.ru'+url
    s = requests.Session()
    r = s.get(fullurl)
    soup = BeautifulSoup(r.text, 'lxml')
    return str(soup.select_one('div.mos-event_txt'))
    


def get_event():
    try:
        events = get_event_list()
        for month in events:
            for dayevent in events[month]:
                for event in events[month][dayevent]:
                    d_event = {
                        "image": event.get('image', None),
                        "title": event.get('title', 'Нет записи'),
                        "description_other": get_detail(event.get('url')),
                        "date_end_request": event.get('dateEnd'),
                        "date_start_request": event.get('dateStart'),
                    },
                    l_tags = event.get('eventTags', ['notags'])
                    yield d_event[0], l_tags
    except Exception as e:
        print(f'PARSING ERROR: {e}')

if __name__ == '__main__':
    for i, t in get_event():
        print(i, t)
        break
