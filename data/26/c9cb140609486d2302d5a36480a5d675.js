callback({
  "levelNumber": 26,
  "size": 99,
  "steps": 46,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "icez",
  "hash": "c9cb140609486d2302d5a36480a5d675",
  "path": "26-Small-Divide-15.76/99.46-icez.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 26-Small-Divide - SIZE 99/15 - SPEED 46/76 --\n-- Based on 39.52.unroll-viamodulo.asm, more code for faster speed.\n\na:\n    INBOX\nb:\n    COPYTO   0\n    INBOX\n    COPYTO   1\n    COPYFROM 0\n    SUB      1\n    JUMPN    s\n    SUB      1\n    JUMPN    o\n    SUB      1\n    JUMPN    k\n    SUB      1\n    JUMPN    g\n    SUB      1\n    JUMPN    c\n    JUMP     y\nc:\nd:\ne:\nf:\n    BUMPUP   9\ng:\nh:\ni:\nj:\n    BUMPUP   9\nk:\nl:\nm:\nn:\n    BUMPUP   9\n    BUMPUP   9\n    OUTBOX\n    INBOX\n    COPYTO   0\n    INBOX\n    COPYTO   1\n    SUB      1\n    COPYTO   9\n    COPYFROM 0\n    SUB      1\n    JUMPN    u\n    SUB      1\n    JUMPN    q\n    SUB      1\n    JUMPN    l\n    SUB      1\n    JUMPN    i\n    SUB      1\n    JUMPN    d\n    JUMP     aa\no:\np:\nq:\nr:\n    BUMPUP   9\n    OUTBOX\n    BUMPDN   9\n    INBOX\n    JUMPZ    x\n    COPYTO   0\n    INBOX\n    COPYTO   1\n    COPYFROM 0\n    SUB      1\n    JUMPN    v\n    SUB      1\n    JUMPN    r\n    SUB      1\n    JUMPN    n\n    SUB      1\n    JUMPN    j\n    SUB      1\n    JUMPN    f\n    JUMP     ab\ns:\nt:\nu:\nv:\n    COPYFROM 9\n    OUTBOX\n    INBOX\n    JUMPZ    w\n    COPYTO   0\n    INBOX\n    COPYTO   1\n    COPYFROM 0\n    SUB      1\n    JUMPN    t\n    SUB      1\n    JUMPN    p\n    SUB      1\n    JUMPN    m\n    SUB      1\n    JUMPN    h\n    SUB      1\n    JUMPN    e\n    JUMP     z\nw:\nx:\n    OUTBOX\n    INBOX\n    INBOX\n    JUMP     b\ny:\nz:\naa:\nab:\n    COMMENT  0\n    COPYTO   0\n    COPYFROM 9\n    COPYTO   2\n    BUMPUP   2\n    BUMPUP   2\n    BUMPUP   2\n    BUMPUP   2\n    BUMPUP   2\nac:\n    COPYFROM 0\n    SUB      1\n    JUMPN    ad\n    COPYTO   0\n    BUMPUP   2\n    JUMP     ac\nad:\n    COPYFROM 2\n    OUTBOX\n    JUMP     a\n\n\nDEFINE COMMENT 0\neJxLZmBgUJJ6njJT6tNSAenqlZYyT1fxajxdFaAnuAIoxRBi+CH4rsH0yLsG3e1sRgfnsBnlrQOJb7Xv\nz7plq1V62PpFr5nlxD0gsQiXdTk7gyTypoRwF58PmdsnGyK32CCYZS1Izj31TcHj5NKSoLjCiWJx/xdM\nTNy5dmpK4uZXmYmbg/IMVoHU3Kntz7Kt0SoVqOhYcrU8cbN3xbztIPHsBfqNyxbIVn2Zr1W6o/9AcX+f\nZ3l/n03N0gnxXXsmsU/YP9Vrwazps1arTL+xPnrKmk2lnS+3hTe+3AbS67n009Jbq46tyN5wbAX3JsEV\nxdsezEvYPmFywvYnjcXbPtbs3cRdrLM2rEhluU2N4pJrbY2L2Ce4LcpcdGCp08aqNan7b+9iOHVmH8Mp\n5/3lx0Dm8VzSnqd79tcUteO/psQeOTd91/7/C6T2xSzftuf7xm173PYu3mt5yHn/oaOrD2899fgCw6l9\nl3SOe1/9vXfDtRvrN1yrahC54RMlcoPVTu26uGvSdcnpN67LLf5858ctvbuTnjKMglEwAAAAgjW+RQ;\n"
});