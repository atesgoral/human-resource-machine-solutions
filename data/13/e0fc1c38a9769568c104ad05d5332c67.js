callback({
  "levelNumber": 13,
  "size": 14,
  "steps": 25,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "viamodulo",
  "hash": "e0fc1c38a9769568c104ad05d5332c67",
  "path": "13-Equalization-Room-9.27/14.25-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 13-Equalization-Room - SIZE 14/9 - SPEED 25/27 --\n\n-- Based on 13.25.specific-Gimlao.asm. An extra jump makes it non-specific.\n\n    JUMP     c\na:\nb:\n    COPYFROM 0\n    OUTBOX\nc:\nd:\n    INBOX\n    COPYTO   0\n    INBOX\n    SUB      0\n    JUMPZ    a\n    INBOX\n    COPYTO   0\n    INBOX\n    SUB      0\n    JUMPZ    b\n    JUMP     d\n"
});