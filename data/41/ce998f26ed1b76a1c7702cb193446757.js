callback({
  "levelNumber": 41,
  "size": 31,
  "steps": 938,
  "successRatio": 0.7,
  "type": "insertion",
  "legal": true,
  "worky": true,
  "author": "clarfonthey",
  "hash": "ce998f26ed1b76a1c7702cb193446757",
  "path": "41-Sorting-Floor-34.714/31.938.insertion-clarfonthey.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 41-Sorting-Floor - SIZE 31/34 - SPEED 938/714 --\n\na:\n    COPYFROM 24\n    COPYTO   0\n    COPYTO   23\nb:\n    INBOX\n    JUMPZ    g\n    COPYTO   22\nc:\n    COPYFROM [23]\n    JUMPZ    d\n    JUMP     e\nd:\n    COPYFROM 22\n    COPYTO   [23]\n    BUMPUP   23\n    COPYFROM 24\n    COPYTO   [23]\n    COPYTO   23\n    JUMP     b\ne:\n    SUB      22\n    JUMPN    f\n    COPYFROM 22\n    COPYTO   21\n    COPYFROM [23]\n    COPYTO   22\n    COPYFROM 21\n    COPYTO   [23]\nf:\n    BUMPUP   23\n    JUMP     c\ng:\nh:\n    COPYFROM [23]\n    JUMPZ    a\n    OUTBOX\n    BUMPUP   23\n    JUMP     h\n\n\nDEFINE LABEL 0\neJzTYGBgSIlrzpubFJh2KMM7/nneyeh9RXExeaW8ia6Vtwq8m3IXerSv2q7VdWe/UZ/C0RsTHx17MfPR\nMf7ZPscuzz55CKidYWLGgdf3srzvxeZGXPGv8F2n13C/f0bLljKPdoW41M7sIJCaRZvnr9y28dQq1TWr\ntj9cYXlyw4ppl0pX3r6esDr5kfTaZ09Pr3/2lG+z971fWwpu5O3YdvTijlXbtbeeWsUwCkbBKKApAABn\nFVTj;\n\nDEFINE LABEL 21\neJzjYWBgSC5rs+spujRTofjlVrGS93tuVB66/KBW8lp6y7RLQGmGY3G7as8lZTbZdWi1MIyCUTAKhhUA\nAObkFeg;\n\nDEFINE LABEL 22\neJwTYGBgmBjwJSYjRDckMFrd90ailVd4ipXX0jR1X94C86qKkllda5tEt8e21m8DKmXYE3/+ZGAxT6Vw\n5ZeYa3UN5gyjYBSMgiENAFlqGE0;\n\nDEFINE LABEL 23\neJwTYWBgyCvdZypW4mh5Jv1Yd06S8aHJyZNn38s65WyWE2XbksdsbVI4w3p97WP3Tw0v/NY2tYSlt6il\nMnd2HenpKrgB1M6wNmtt+/LK9t7oLs9+hlEwCkbBkAIABXEigQ;\n\nDEFINE LABEL 24\neJyTYWBgeFC711em9oLX/6oKD9fKCg+jsok+nvlzoz5n3CpYmra8oSRtwcTPGVFLFmcv3WBfUL/tRqXD\njsLmtE2Kbb7rTDrblkZ3ic3f23Vm0t4u547jneZVW9tq01803o4AGs1wJft2RFd5yYTtjTk7zVo4DjKM\nglEwCgYVAACQeDXn;\n"
});