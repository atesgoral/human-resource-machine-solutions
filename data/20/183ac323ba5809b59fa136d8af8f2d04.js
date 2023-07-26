callback({
  "levelNumber": 20,
  "size": 50,
  "steps": 65,
  "successRatio": 1,
  "type": "binarylut",
  "legal": true,
  "worky": true,
  "author": "viamodulo",
  "hash": "183ac323ba5809b59fa136d8af8f2d04",
  "path": "20-Multiplication-Workshop-15.109/50.65.binarylut-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 50/15 - SPEED 65/109 --\n\n-- Based on 45.66.binarylut-mrflip.asm. Calculate the *8 and *9 cases a little faster.\n\n    BUMPUP   9\n    BUMPUP   9\n    ADD      9\n    COPYTO   5\n    BUMPUP   5\n    JUMP     k\na:\n    ADD      0\n    ADD      0\nb:\nc:\n    ADD      0\n    ADD      0\nd:\ne:\nf:\n    ADD      0\ng:\n    ADD      0\nh:\ni:\n    ADD      0\nj:\n    OUTBOX\nk:\nl:\n    INBOX\n    JUMPZ    q\n    COPYTO   0\n    INBOX\n    JUMPZ    j\n    SUB      5\n    JUMPN    o\n    JUMPZ    b\n    SUB      9\n    JUMPZ    a\n    JUMPN    n\n    SUB      9\n    JUMPZ    m\n    COPYFROM 0\n    ADD      0\n    COPYTO   0\n    JUMP     f\nm:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   0\n    JUMP     g\nn:\n    COPYFROM 0\n    JUMP     c\no:\n    ADD      9\n    JUMPZ    d\n    JUMPN    p\n    COPYFROM 0\n    JUMP     e\np:\n    ADD      9\n    JUMPZ    h\n    COPYFROM 0\n    JUMP     i\nq:\n    OUTBOX\n    INBOX\n    JUMP     l\n"
});