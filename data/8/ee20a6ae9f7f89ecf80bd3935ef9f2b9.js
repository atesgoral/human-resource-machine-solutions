callback({
  "levelNumber": 8,
  "size": 6,
  "steps": 24,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "atesgoral",
  "hash": "ee20a6ae9f7f89ecf80bd3935ef9f2b9",
  "path": "08-Tripler-Room-6.24/6.24-atesgoral.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 08-Tripler-Room - SIZE 6/6 - SPEED 24/24 --\n\n-- Triple each inbox item by copying to memory and adding it to itself twice.\n\na:\n    INBOX\n    COPYTO   0\n    ADD      0\n    ADD      0\n    OUTBOX\n    JUMP     a\n"
});