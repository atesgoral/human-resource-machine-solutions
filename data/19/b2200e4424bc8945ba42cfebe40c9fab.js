callback({
  "levelNumber": 19,
  "size": 12,
  "steps": 75,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "halchihal",
  "hash": "b2200e4424bc8945ba42cfebe40c9fab",
  "path": "19-Countdown-10.82/12.75-halchihal.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 12/10 - SPEED 75/82 --\n\n    JUMP    d\na:\nb:\n    OUTBOX\n    BUMPUP  9\n    JUMPN   b\nc:\n    OUTBOX\nd:\n    INBOX\n    COPYTO  9\n    JUMPN   a\ne:\n    JUMPZ   c\n    OUTBOX\n    BUMPDN  9\n    JUMP    e\n    \n"
});