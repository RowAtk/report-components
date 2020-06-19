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
MITS delivered software application support of teaching and learning in specific courses
guidance. to tutors in accomplishing common tasks within the Virtual by providing for the installation, training and support of open source software (OSS) – a
Learning Environment.
 free alternative to specific commercial off-the-shelf applications. During the period
Virtual training using online tools such as Blackboard Collaborate and Zoom August 2017- July 2019, there was a total of 1,596 open source software applications
video conferencing.
 installed. This compares with 1,298 installed instances for the prior period, August 2015 to
July 2017.
"""

# print(someText)
print(f'\"{clean(someText)}\"')