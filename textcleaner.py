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
Locations of Universities with
which The UWI Mona has
research partnerships
"""

# print(someText)
print(f'\"{clean(someText)}\"')