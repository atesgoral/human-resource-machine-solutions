callback({
  "levelNumber": 23,
  "size": 13,
  "steps": 70,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "mrflip",
  "hash": "64959db7e1b06a7268842af2e5b1b097",
  "path": "23-The-Littlest-Number-13.75/13.70-mrflip.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 23-The-Littlest-Number - SIZE 13/13 - SPEED 70/75 --\n\n-- Tweak of @peterfreese solution adds one line but saves one op\n\n    INBOX\n    JUMP     d\na:\n    COPYFROM 0\n    OUTBOX\nb:\n    INBOX\n    JUMP     d\nc:\n    ADD      0\nd:\n    COPYTO   0\ne:\n    INBOX\n    JUMPZ    a\n    SUB      0\n    JUMPN    c\n    JUMP     e\n\n\nDEFINE LABEL 0\neJxTY2BgYDE8t9TNoCoTyGQ4aiDbvMm8MPm9RW7CUpsVMYtsteKkHdqKpjvWzRJ2tp7B7RbT5OHeVerh\n3pR/0PN5dLnvzoz8AJ7yrKDHbRrB9rNBZuxL6lpsn5QQDmK7xxuZgWiRIud5gsWFE88Xv44D8XtLukp3\nVS+JLK6LCUlovRU0q90oZVb70cJ7rfNb5NrMpjKMglEwCugCABWdN2I;\n\nDEFINE LABEL 1\neJyzZWBg0LPMTcizfN+/yoplfoY1xyIVW96lEY4By/d7BSwHSjMwGYXUbLCYXH3HPqIexJ8Trtg2Jepx\nG29sQitrQkzTgUTRWoaktiKO+NK0C9Fr4m+HP49WDXke/TpwTfz6gNK0/ID+iqwgtc7HIaVT7oXVzQqP\ndJ73I+Xo/JI0lvmf0uxng8ycnd+2YHa+dRaIfb1ArfN4GUPe3qrv6T+rv6dvrf2TVVB/rtyw/sfU3IbZ\njU+azdJDO7V6zvQwzAGpz5rJcjZnhlk6iL1mxtFC+blGKTfmb0iavNAopW/xzoy2ZV2lnkuv1YounN/y\nYmZmN8MoGAWjAA4AIN5nNA;\n"
});