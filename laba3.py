import re

with open ('Messenger.html' , 'r') as f:
    while True:
        line = f.readline()
        if not line:
            break
        result = re.findall("<\\s*a.+href\\s*=\"(\\S+)\"", line.strip())
        if result != []:
            print(result[0])
