# micro-bigfive-results

Example: https://bigfive-results.now.sh/

micro webservice that returs bigfive results score

## Questions

```sh
$ curl -v http://localhost:3000/getResults -d '{
  "testType": "personality",
  "langCode": "no",
  "data": {
    "O": { "score":33, "count":10, "result":"positive", "facet":{} },
    "N": { "score":21, "count":10, "result":"negative", "facet":{} },
    "E": { "score":31, "count":10, "result":"positive", "facet":{} },
    "C": { "score":31, "count":10, "result":"positive", "facet":{} },
    "A": { "score":30, "count":10, "result":"neutral", "facet":{} }
  }
}
'
```

Both returns

```JavaScript
{}
```

## Supported languages

Set ```langCode``` to code

| Code | Name |
| ---- | ---- |
| en   | English |
| no   | Norwegian |

## Translation

Use [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code.

## Deploy using [Now](https://zeit.co/now)

```sh
$ now https://github.com/maccyber/micro-bigfive-results
```

## License
[MIT](LICENSE)

## About

Created by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber)

![alt text](https://robohash.org/micro-bigfive-results.png "Robohash image of micro-bigfive-results")
