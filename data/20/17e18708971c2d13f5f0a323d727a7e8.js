callback({
  "levelNumber": 20,
  "size": 185,
  "steps": 49,
  "successRatio": 0.1,
  "type": "specific",
  "legal": false,
  "worky": false,
  "author": "Eirik0",
  "hash": "17e18708971c2d13f5f0a323d727a7e8",
  "path": "20-Multiplication-Workshop-15.109/185.49.specific-Eirik0.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 185/15 - SPEED 49/109 --\n\n-- This solution is level-specific (patterned and quantity-limited input).\n-- It assumes 5 pairs of numbers (0-9) of which the 2nd\n-- and 3rd pair contain a zero and that the others do not. It uses\n-- the same branching structure as solutions such as\n-- 208.52.specific-mschordan.asm to determine the multiplier.\n\n    BUMPUP   9\n    BUMPUP   9\n    ADD      9\n    COPYTO   4\n    INBOX\n    COPYTO   0\n    INBOX\n    SUB      4\n    JUMPN    g\n    JUMPZ    e\n    SUB      9\n    JUMPN    d\n    JUMPZ    c\n    SUB      9\n    JUMPN    b\n    JUMPZ    a\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   0\n    JUMP     l\na:\n    ADD      0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    JUMP     k\nb:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   2\n    ADD      2\n    JUMP     m\nc:\n    ADD      0\n    ADD      0\n    COPYTO   0\n    JUMP     j\nd:\n    COPYFROM 0\ne:\n    ADD      0\n    ADD      0\n    JUMP     i\nf:\n    COPYFROM 0\n    JUMP     n\ng:\n    ADD      9\n    JUMPN    f\n    JUMPZ    h\n    COPYFROM 0\nh:\ni:\nj:\nk:\nl:\n    ADD      0\nm:\n    ADD      0\nn:\n    OUTBOX\n    INBOX\n    SUB      4\n    JUMPN    u\n    JUMPZ    s\n    SUB      9\n    JUMPN    r\n    JUMPZ    q\n    SUB      9\n    JUMPN    p\n    JUMPZ    o\n    INBOX\n    COPYTO   0\n    ADD      0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    JUMP     ac\no:\n    INBOX\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    ADD      0\n    JUMP     ab\np:\n    INBOX\n    COPYTO   0\n    ADD      0\n    ADD      0\n    COPYTO   2\n    ADD      2\n    JUMP     aa\nq:\n    INBOX\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    JUMP     z\nr:\n    INBOX\n    COPYTO   0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     y\ns:\n    INBOX\n    COPYTO   0\n    ADD      0\n    ADD      0\n    JUMP     x\nt:\n    INBOX\n    JUMP     ad\nu:\n    ADD      9\n    JUMPN    t\n    JUMPZ    v\n    INBOX\n    COPYTO   0\n    ADD      0\n    JUMP     w\nv:\n    INBOX\n    COPYTO   0\nw:\nx:\ny:\nz:\naa:\nab:\nac:\n    ADD      0\nad:\n    OUTBOX\n    INBOX\n    INBOX\n    OUTBOX\n    INBOX\n    OUTBOX\n    INBOX\n    INBOX\n    SUB      4\n    JUMPN    aj\n    JUMPZ    ai\n    SUB      9\n    JUMPN    ah\n    JUMPZ    ag\n    SUB      9\n    JUMPN    af\n    JUMPZ    ae\n    INBOX\n    COPYTO   0\n    ADD      0\n    ADD      0\n    COPYTO   2\n    ADD      2\n    ADD      2\n    OUTBOX\nae:\n    INBOX\n    COPYTO   0\n    ADD      0\n    COPYTO   1\n    ADD      1\n    ADD      1\n    ADD      1\n    OUTBOX\naf:\n    INBOX\n    COPYTO   0\n    ADD      0\n    ADD      0\n    COPYTO   2\n    ADD      2\n    ADD      0\n    OUTBOX\nag:\n    INBOX\n    COPYTO   0\n    ADD      0\n    COPYTO   1\n    ADD      1\n    ADD      1\n    OUTBOX\nah:\n    INBOX\n    COPYTO   0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    OUTBOX\nai:\n    INBOX\n    COPYTO   0\n    ADD      0\n    ADD      0\n    ADD      0\n    OUTBOX\n    INBOX\naj:\n    ADD      9\n    JUMPN    al\n    JUMPZ    ak\n    INBOX\n    COPYTO   0\n    ADD      0\n    ADD      0\n    OUTBOX\nak:\n    INBOX\n    COPYTO   0\n    ADD      0\n    OUTBOX\nal:\n    INBOX\n    OUTBOX\n\n\nDEFINE LABEL 0\neJzjY2BgmJyWkMefsWUyf8af9Z/S7p3gz9i5dkXWlsmPcpzbLQv2Nr0v3tuUXcrQ6lbO23eoYufaQxX9\nexmoAPQa1BYcb8pcxNjatfhKp/tCaphJCgjd67ST3naOglEw2AAATyslOw;\n\nDEFINE LABEL 1\neJyTYmBgOO4uWrvf62jhR3/73N3h9rmVEbMbd4ef7H4QKjndI9h9YYJX4mY1jyVbz7v0781wv7S/1C93\nj03y8+1ArQzPy052nyplmZ9dyrEzu/TPes2ykFUNlXWzKmquTfFu3DJZrXnNErVmn90Mo2AUjIJBCQB3\nHzAz;\n\nDEFINE LABEL 2\neJyTYGBg6HU9GC7m9z1AOXSL35GQ0rRJ/t5lEb4bKruCcsvNI/srQqKc20OiJKf/DWOZHxDAMn+WT8xM\noDaG7kzvMs+s+bPZswsn3srfUFlcxFFyvzIh709Vf8Wfqi2T7armz2YYBaNgFAxqAAC1uCgH;\n\nDEFINE LABEL 4\neJzjYWBg+Bo52fdr5KOImPC2zr9hj+eeiHs8tzvTegZQiuFRTmYse7Ze/4qsiCPdmXX3GbCAr6nuxT+r\nOUrutYbUiHXeagjqutcs0L2mN6jLeoZ0u/eShNaA5Vtrb60TKVLaIpOvtj0z6/MBbOaMglEwCugPAB3S\nLug;\n\nDEFINE LABEL 9\neJwTZGBgaAy9VGUflpC3Oep9IlPiwXCVnJiQ/7mPIv7nhqQ253CUeGbNbgxMD5jgkiC4Qig6cbNNcsiq\nDemCKxxzBVdsLfyznoFMIFJkPSO5om6Wc0vMTBD/SH9daNXko4Vbpq7oCp3K27e8r78ioHtNvHGXZNCV\nzr22k7rMLI/0exu+m95n/GzWZ7Nf8xQdxRecdBNfMNnXZl5XnMasnRkG0/9kMc15XvRoeVUDyMyK7d8D\n/mxlibLbWpp2f8vRQrutK7oqtlvPeLM7ZNWTfbIbPx712d10+vl26XNNW0Iv3Fp38aLgCt/LB+dwXznZ\nveby3qaii0cLq84JJr88YR28/tg1f8YDhT6r9lzzr9j+KALshxc714Lo52/sc+0+mFnafXiu2/Bey+D5\nm5Nufq/sc8Oem9V9f8bQClKz98nOtTOeTV8z4eWf9Zde+OwWedG/9/uz3D2Wzzh2Wj5r2hL23H5T2HOO\nneSG5ygYBeQAAOyurOA;\n"
});