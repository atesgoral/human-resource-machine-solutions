callback({
  "levelNumber": 20,
  "size": 38,
  "steps": 93,
  "successRatio": 0.9,
  "type": "specific",
  "legal": false,
  "worky": false,
  "author": "AMob",
  "hash": "0c1b9db1171d655cb629306235c1b105",
  "path": "20-Multiplication-Workshop-15.109/38.93.specific-AMob.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 38/15 - SPEED 93/109 --\n-- This solution is level-specific (quality-limited input) and assumes input\n-- values of 0-9.\n\n    COMMENT  0\n    JUMP     l\na:\n    ADD      0\nb:\n    ADD      0\nc:\n    ADD      0\nd:\n    ADD      0\ne:\n    ADD      0\nf:\n    ADD      0\ng:\n    ADD      0\nh:\n    ADD      0\ni:\n    ADD      0\nj:\nk:\n    OUTBOX  \nl:\n    COMMENT  1\n    INBOX   \n    JUMPZ    m\n    COPYTO   0\n    INBOX   \n    JUMPZ    k\n    COPYTO   1\nm:\n    BUMPDN   1\n    JUMPZ    i\n    BUMPDN   1\n    JUMPZ    h\n    BUMPDN   1\n    JUMPZ    g\n    BUMPDN   1\n    JUMPZ    f\n    BUMPDN   1\n    JUMPZ    e\n    BUMPDN   1\n    JUMPZ    d\n    BUMPDN   1\n    JUMPZ    c\n    BUMPDN   1\n    JUMPZ    b\n    BUMPDN   1\n    JUMPZ    a\n    INBOX   \n    COPYFROM 9\n    JUMP     j\n\n\nDEFINE COMMENT 0\neJzbzcDA8EP8nnq4imgakMnApPBWzVwrROGVVZ9Mqc1ns6M2dzw6rOMSZ1m9zJhqdjprg45RiotqXCJI\n7V719IAT+hu89Yw3eGeb7PfiNH3tDhLX1M/Uv6VnHWyjVxMP4n8yFE27pVdc0Kb1r/yCml9zjIZ9ywvN\nmKYT+tmN/JYxTd9NGyYI6egta9M6vsZPV355pb7eMm0HvWUPnaMWn3epWJjrenDOJOeQySCzljq5Tol2\nm70+13X/3knOkw+AxFaYqm2favZ6F7/lv1f7LQ6/MzG3fA4Sl1d/vWu1xsdTqzVyL4P48+2Ong11qrnk\n7Ox4zdmZ7RZILNXPvuVtzINKplzLEhA/MPdfOVPu/r1Hs9fdv5E1/eO6jKZHIPFrkWou5pG/3PaFhRWd\nCcz+AhJrLb9UJVj5dBWIvauRp7yp5e3Mqc3eS/Qa1LY71HPs7Kru3TC5SH45SN59yqWqv9MvVQXN+Vcu\nNV+rdPLCpnyQeMySiMC+uUYpvjN4yi9Pfd7ZMtV1yrrpb2dmzm9bMGfGov1F066cEZ29/dyFRUfPxiyR\nPfFiaf4mkL5fS1yn8C45OEd+sdp2+cUvb+ctbnrEu8T9Ge+SiQ/BYbIxwcFtU1xi5Mbv6ffXrcsBiV3a\nvC1aZGdNvPLRrjiImgeVltsfVILYIWv1ljmuO/wOxLbc/rWDbZ/3kof7TbY1HNh+ruHAsg/O+6d/PLVn\n63u1HbyvQGr2b1m0f9a2XztBbJkNAVenbnK8BmIrH13Tu/5Y5qJ/x3o3gPg1Z6saOM4XTgw/f2f3znMz\nL+w8p/RT96zfN5DcygePIiIfGKXU3dMqPXdvep37w6qGlBcPKls/v68Ah+/no1GCX09nvflWOBHEr369\n36v69fd09rdfO768fb0L7O47q9aF3Hl8uu5ezaXCx6I3dV4bXU/4evTsol8fT535o3McpObMn88ra/88\nfMMwCrACALgyTks;\n\nDEFINE COMMENT 1\neJxbxcDA8FCkzk5WLMjxsmSQY6bybBugEMMN2QbZG7JMZi2SuQlFUgFJnbJxiaeVVsSA5IT5TnZrC67p\nvarl1yykE9O0QWd6HUi8RqnUn0lhyTwmBZ3jIP5UM0mVJ2YHNWVMVllr6rf4zdB8FAESV7O54+Hhftaz\nyPO1O4h/S29dzlSzdTnz7b6nQ/jPO0/oT51/Qn/VOhD/kvmlKn7L9xWvrC5VMdp97ei1/zOj195563y7\nuCvJtmy3ZlnFXYmzXHH+idmi/SD1s6wOzhGxXTIPxO7W+7xyl8mqdfstZq8H8ae7S5dNdxdub/XYNNfM\ng2klSCzVb11OkH9MU5D/xIdifnvvgcR08hXb7PIaJlxOu7N7dzL/Sa040Zsg8ctpsqHrMnIT7uZJlz0q\nym4UrLww+3iN+A6QnEQfh5tE336v7X2TfUH8lNm2RgvnrLJmmpPgkDNpv1fU5Ba/ddOtg4umbYs2mPgy\nQ63zfUX89AeVTHP+ldfM0yrNnB9WtGP+rUyQXqcJc6VB6t2nuE4xndq24NkUz6Mg8dVLxF1jlsQ0gdgh\na3dJOq6LMri/TjQtcuOmuZEbrY9xbXx8+uz6K2eEVpQdAql5c7zHVvnozNjWI3uzPQ7/mTH9cOLmg0fv\n7NY4OfnAvkuTD/BePrfn9+XXu0Bq752ZGctx/nQWAzgBfAxvv+qYLH1ufu6c45YlN0/wlF+7qlUKktp3\naYP3vktdcbGXVVJjL1csnHll8gGQ+MLTVQ1bTt3o+nfs3iwQ//fl3T3ptysWyt63XQri73iTHnDqtWxo\n4ePchMuPHJMtn02vm/3Udmnh48enQfKdz/yaq19XNfz6+KDy+afD1Vc/xzS9+fZ0lfX3//8ZRgHNAABL\nUiFx;\n\n"
});