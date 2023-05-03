callback({
  "levelNumber": 21,
  "size": 11,
  "steps": 68,
  "successRatio": 1,
  "type": "obsolete",
  "legal": false,
  "worky": true,
  "author": "clarfonthey",
  "hash": "be32675d3eefb02afdc2494c887693e1",
  "path": "21-Zero-Terminated-Sum-10.72/11.68.obsolete-clarfonthey.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 21-Zero-Terminated-Sum - SIZE 11/10 - SPEED 68/72 --\n\n-- This solution is superseded by 10.68-skwasjer.asm being functionally same\n-- with further optimization.\n\n    JUMP     c\na:\n    COPYFROM 0\nb:\n    OUTBOX\nc:\n    INBOX\n    JUMPZ    b\n    COPYTO   0\nd:\n    INBOX\n    JUMPZ    a\n    ADD      0\n    COPYTO   0\n    JUMP     d\n\n\nDEFINE LABEL 0\neJwTZWBgONJfrqfde1RnVeNRnciUz2ZXUyOs3uZ9dbYpZfJdXvM+0ax2Z0ZqbUJeRc3MkuKi9Kky+Q3L\n2bMrdkhlJR8IyXl55EDxxFNVjVfO/Gxfcf7kzJMXGEbBKBgFQwYAAAOgKXQ;\n\nDEFINE LABEL 5\neJxTYGBgSOraYLK/Vd6kqrHFfH3lRIeycnHX4qKOwL15RilCuUsK0rK/dqjkvF8Wlye/b0YBwymRorZz\np0r3X2GpKLwWXFd47Wf7t7Mfu/JPRvVGHPnc77M7dpLnOq/JtktvTpacLj3ZstuglUMfaA2DeKqw9omC\nswmTKyy7GVuZrs9qL37MMApGwSgYUAAAOm05bA;\n"
});