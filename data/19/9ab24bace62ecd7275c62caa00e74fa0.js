callback({
  "levelNumber": 19,
  "size": 116,
  "steps": 57,
  "successRatio": 0.02,
  "type": "specific",
  "legal": false,
  "worky": false,
  "author": "Eirik0",
  "hash": "9ab24bace62ecd7275c62caa00e74fa0",
  "path": "19-Countdown-10.82/116.57.specific-Eirik0.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 116/10 - SPEED 57/82 --\n\n-- This solution is level-specific (patterned and quantity-limited input).\n-- This solution is the same as 119.59.specific-viamodulo.asm but\n-- takes advantage of the fact that the first input is never 1 and\n-- the second input is never -1.\n\n    INBOX\n    COPYTO   4\n    OUTBOX\n    BUMPDN   4\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    g\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    f\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    e\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    d\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    c\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    b\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   4\na:\nb:\nc:\nd:\ne:\nf:\ng:\n    OUTBOX\n    INBOX\n    COPYTO   4\n    OUTBOX\n    BUMPUP   4\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    n\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    m\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    l\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    k\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    j\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    i\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    h\n    OUTBOX\n    BUMPUP   4\nh:\ni:\nj:\nk:\nl:\nm:\nn:\n    OUTBOX\n    INBOX\n    OUTBOX\n    INBOX\n    JUMPZ    ag\n    COPYTO   4\n    JUMPN    o\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    af\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    ae\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    ad\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    ac\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    ab\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    aa\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    z\n    OUTBOX\n    BUMPDN   4\n    JUMPZ    y\n    OUTBOX\n    BUMPDN   4\n    JUMP     x\no:\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    w\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    v\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    u\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    t\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    s\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    r\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    q\n    OUTBOX\n    BUMPUP   4\n    JUMPZ    p\n    OUTBOX\n    BUMPUP   4\np:\nq:\nr:\ns:\nt:\nu:\nv:\nw:\nx:\ny:\nz:\naa:\nab:\nac:\nad:\nae:\naf:\nag:\n    OUTBOX\n"
});