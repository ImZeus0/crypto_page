
import urllib.request , json
from re import *
import requests
import time

urls = ['https://api-pub.bitfinex.com/v2/ticker/tBTCUSD',
'https://api-pub.bitfinex.com/v2/ticker/tETHUSD',
'https://api-pub.bitfinex.com/v2/ticker/tXRPUSD',
'https://api-pub.bitfinex.com/v2/ticker/tZECUSD',
'https://api-pub.bitfinex.com/v2/ticker/tNEOUSD',
'https://api-pub.bitfinex.com/v2/ticker/tBSVUSD',
'https://api-pub.bitfinex.com/v2/ticker/tLTCUSD',
'https://api-pub.bitfinex.com/v2/ticker/tEOSUSD',
'https://api-pub.bitfinex.com/v2/ticker/tXMRUSD',
'https://api-pub.bitfinex.com/v2/ticker/tXTZUSD',
]

def get_price(urls):
	res = "stroke = \'{\"info\":["
	for url in urls:
		response = requests.get(url)
		todos = json.loads(response.text)
		name = url[40:-3]
		res += "{\"name\":\""+name +"\",\"price\":"+ str(todos[0])+"}"
		if url != 'https://api-pub.bitfinex.com/v2/ticker/tXTZUSD':
			res += ','
	res += "]}\'"
	print(res)
	return res

def write_file(str):
	f = open('data.txt', 'w')
	f.write(str)
	f.close()

while 1:
	write_file(get_price(urls))
	time.sleep(30)


