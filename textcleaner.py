def clean(text):
    res = []
    log = []
    for char in text:
        # print(char if char != '\n' else "NEWLINE")
        if char == '\n':
            if log and log[-1] == '\n':
                res.append(char)
        else:
            res.append(char)
        log.append(char)
    return "".join(res)

# add 2 new lines to separate paragrapghs
someText = """
Professor Dale Webber, Pro Vice-Chancellor and Principal of The UWI Mona
Campus, and Dr. Wayne Henry, Director General of the Planning Institute of
Jamaica (PIOJ) during Dr. Henry’s Distinguished Lecture at The UWI Research
Days 2019.
"""

# print(someText)
print(f'\"{clean(someText)}\"')