# micro-bigfive-results

Example: https://bigfive-results.now.sh/

micro webservice that returs bigfive results score

## Questions

```sh
$ curl -v http://localhost:3000/getQuestions -d '{ "lang": "en" }'
```

```sh
$ curl -v http://localhost:3000/getQuestions?lang=en
```

Both returns

```JavaScript
{}
```

## Supported languages

Set ```lang``` to code

| Code | Name |
| ---- | ---- |
| en   | English |
| no   | Norwegian |

## Translation

Use [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code.

## Deploy using [Now](https://zeit.co/now)

```sh
$ now https://github.com/maccyber/micro-bigfive-questions
```

## License
[MIT](LICENSE)

## About

Created by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber)

![alt text](https://robohash.org/micro-bigfive-results.png "Robohash image of micro-bigfive-results")
