callback({
  "levelNumber": 20,
  "size": 23,
  "steps": 121,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "ichbineinNerd",
  "hash": "5b2ed032d66913b964689cadcbaa97cf",
  "path": "20-Multiplication-Workshop-15.109/23.121-ichbineinNerd.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n\n    JUMP     e\na:\n    INBOX\n    COPYFROM 9\nb:\nc:\nd:\n    OUTBOX\ne:\n    INBOX\n    COPYTO   0\n    JUMPZ    a\n    INBOX\n    COPYTO   1\n    COPYTO   2\n    JUMPZ    b\n    BUMPDN   0\n    JUMPZ    h\nf:\n    COPYFROM 2\n    ADD      1\n    COPYTO   2\n    BUMPDN   0\n    JUMPZ    g\n    JUMP     f\ng:\n    COPYFROM 2\n    JUMP     d\nh:\n    COPYFROM 1\n    JUMP     c\n"
});