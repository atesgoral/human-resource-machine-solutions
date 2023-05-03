callback({
  "levelNumber": 41,
  "size": 31,
  "steps": 546,
  "successRatio": 0.7,
  "legal": true,
  "worky": true,
  "author": "eiTTio",
  "hash": "42652b00d09792369ea216b4b0745393",
  "path": "41-Sorting-Floor-34.714/31.546-eiTTio.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 41-Sorting-Floor - SIZE 31/34 - SPEED 546/714 --\n\n    JUMP     c\na:\nb:\n    COPYFROM [24]\n    OUTBOX\nc:\n    INBOX\n    COPYTO   [24]\nd:\n    COPYFROM 24\n    COPYTO   22\ne:\n    BUMPUP   24\n    INBOX\n    JUMPZ    f\n    COPYTO   [24]\n    SUB      [22]\n    JUMPN    d\n    JUMP     e\nf:\n    BUMPDN   24\n    JUMPZ    b\n    COMMENT  0\ng:\n    COPYFROM [22]\n    OUTBOX\n    COPYFROM [24]\n    COPYTO   [22]\n    BUMPDN   24\n    JUMPZ    a\n    COPYTO   23\nh:\n    COPYTO   22\ni:\n    BUMPDN   23\n    JUMPN    g\n    COPYFROM [22]\n    SUB      [23]\n    JUMPN    i\n    COPYFROM 23\n    JUMP     h\n\n\nDEFINE COMMENT 0\neJxjYBgFo2AUjGQAAAQEAAE;\n\nDEFINE LABEL 22\neJyTYGBgOBV3P7kqfmWZQWJx540Ehy03EoxmP0vK6NiU7p+nmvMqxTjvVcrMAsuc5UXM9euK5TaylXjO\nFSmTbCwq31/RXhWV/7ZGN/tY89fUsy08GS1tD6tvt3V1T+poXDSpQ3MTwygYBaNgUAMAs9YtMw;\n\nDEFINE LABEL 23\neJzjY2BgON50zf96zfeAU6XvEw2LlxRsLTSr21pYONGwOGamYfHjuWtL1izJLp2+xq7q6Dbnlufbf7bb\nb2IYBaNgFAwLAAASRBy6;\n\nDEFINE LABEL 24\neJwTY2BgCCv+mupf9DXVo9A/73HeumWP8+Q2AoUZssuWxylVfE29WOGft6PxyeSMJvVZta1HVrS03V4F\nkg/rSY5Y3n0icXl3TdGCLr4Gjy7W6Y6df9ZO6tDcxDAKRsEoGBIAAF7+J24;\n"
});