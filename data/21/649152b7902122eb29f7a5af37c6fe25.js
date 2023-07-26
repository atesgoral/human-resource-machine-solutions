callback({
  "levelNumber": 21,
  "size": 9,
  "steps": 92,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "albertferras",
  "hash": "649152b7902122eb29f7a5af37c6fe25",
  "path": "21-Zero-Terminated-Sum-10.72/9.92-albertferras.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 21-Zero-Terminated-Sum - SIZE 9/10 - SPEED 92/72 --\n\na:\n    COPYFROM 5\nb:\n    COPYTO   0\n    INBOX\n    JUMPZ    c\n    ADD      0\n    JUMP     b\nc:\n    COPYFROM 0\n    OUTBOX\n    JUMP     a\n"
});