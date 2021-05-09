# Caesar Cipher CLI

Утилита для шифровки и дешифровки текста с использованием [шифра Цезаря](https://en.wikipedia.org/wiki/Caesar_cipher)

## Установка

npm:

`git clone https://github.com/uaolmer/nodejs-course.git`

`cd nodejs-course/caesar-cipher-cli/`

`npm install`


## Использование

CLI утилита должна принимать 4 параметра:

`-s, --shift`: сдвиг по шифру

`-i, --input`: файл чтения

`-o, --output`: файл записи

`-a, --action`: кодирование/декодирование (encode/decode)

Параметры action и shift являются обязательными.

## Примеры

Для чтения и запись в файл:

`$ node caesar-cli -a encode -s 7 -i input.txt -o output.txt`

Для работы с консолью:

`$ node caesar-cli -a encode -s 7`