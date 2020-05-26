import re
import sys

blacklist = "\n"
exceptions = ["\n\n"]

def textcleaner():
	f = open('dirtytext.txt', 'r')
	lines = [line.strip() for line in f.readlines()]
	print(lines)


# word = "klgfgf\n\njfd\n"
# res = word.replace("\n", '')
# print(res)

# res = []
# word = list(word)
# nl = "\n"


# print(res)
# print("".join(res))
	
textcleaner()



