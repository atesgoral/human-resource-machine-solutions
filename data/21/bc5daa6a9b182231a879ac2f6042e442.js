callback({
  "levelNumber": 21,
  "size": 9,
  "steps": 88,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "steambap",
  "hash": "bc5daa6a9b182231a879ac2f6042e442",
  "path": "21-Zero-Terminated-Sum-10.72/9.88-steambap.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 21-Zero-Terminated-Sum - SIZE 9/10 - SPEED 88/72 --\n\n    JUMP     b\na:\n    COPYFROM 0\n    OUTBOX\nb:\n    COPYFROM 5\nc:\n    COPYTO   0\n    INBOX\n    JUMPZ    a\n    ADD      0\n    JUMP     c\n"
});