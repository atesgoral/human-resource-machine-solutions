callback({
  "levelNumber": 38,
  "size": 82,
  "steps": 162,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "clarfonthey",
  "hash": "0f758cc07eed2261758a1115d51db19a",
  "path": "38-Digit-Exploder-30.165/82.162-clarfonthey.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 38-Digit-Exploder - SIZE 82/30 - SPEED 162/165 --\n\n    COPYFROM 10\n    ADD      10\n    COPYTO   7\n    COPYFROM 11\n    ADD      11\n    COPYTO   8\na:\nb:\nc:\n    COPYFROM 9\n    COPYTO   3\n    COPYTO   4\n    INBOX\n    SUB      11\n    JUMPN    m\n    COMMENT  0\n    COPYTO   5\n    BUMPUP   3\n    COPYFROM 5\nd:\n    SUB      8\n    JUMPN    e\n    COPYTO   5\n    BUMPUP   3\n    BUMPUP   3\n    COPYFROM 5\n    JUMP     d\ne:\n    ADD      11\n    JUMPN    f\n    COPYTO   5\n    BUMPUP   3\n    JUMP     g\nf:\n    ADD      11\ng:\n    COPYFROM 3\n    OUTBOX\n    COPYFROM 5\n    SUB      10\n    JUMPN    k\n    COPYTO   5\n    BUMPUP   4\n    COPYFROM 5\nh:\n    SUB      7\n    JUMPN    i\n    COPYTO   5\n    BUMPUP   4\n    BUMPUP   4\n    COPYFROM 5\n    JUMP     h\ni:\n    ADD      10\n    JUMPN    j\n    COPYTO   5\n    BUMPUP   4\n    JUMP     l\nj:\n    ADD      10\nk:\n    COPYFROM 4\nl:\n    OUTBOX\n    COPYFROM 5\n    OUTBOX\n    JUMP     c\nm:\n    ADD      11\n    COMMENT  1\n    SUB      10\n    JUMPN    r\n    COMMENT  3\n    COPYTO   5\n    BUMPUP   4\n    COPYFROM 5\nn:\n    SUB      7\n    JUMPN    o\n    COPYTO   5\n    BUMPUP   4\n    BUMPUP   4\n    COPYFROM 5\n    JUMP     n\no:\n    ADD      10\n    JUMPN    p\n    COPYTO   5\n    BUMPUP   4\n    JUMP     q\np:\n    ADD      10\n    COPYTO   5\nq:\n    COPYFROM 4\n    OUTBOX\n    COPYFROM 5\n    OUTBOX\n    JUMP     b\nr:\n    COMMENT  2\n    ADD      10\n    OUTBOX\n    JUMP     a\n\n\nDEFINE COMMENT 0\neJzLYGBg2GQwwzrbXN1X0n5P6lPnB+XfvBvmcfhvWibjO3NRkjfzolUuRxfPMfdd16f1fg9QOYODxufb\nKwzfXhFzqT13KODF2ZCw8ydB4v4JOjm+qZZJhzKkwmfmKLpJ5GuYMhc+T/tZmLswsLh+G0iNddKE06GZ\nL87+LHxxNrCb90RXv8LR0olFB0ByM+YcsUmfs9rCYXaDufTUiT7Zkwoj3/S7FHT176p90/9kmtWkx+u+\nTK7f5jStde/JOT7Hohb9PtW+Zs+Z5xt/n3q8O/6wypFJm9mOJ6z+eCJ3oecp/2mep2T7tp283Mh2vDnP\n90BL2NSdfJ6bFj/RB9l1vPOAbHTXDcXkvh16r6ZUeHyYe6vgx8KwVv3V7/cUr/t96sCGaZfsN6+/FrTN\n6BbPDqNbID3zX7zwq3ju6/7+6TeXO48SXD4+UHSbeLvO3/lmS5ja9cWJOVdVarmuGnTnXE2fteu66HaV\nO0Fn+e9Nu6TzIOLK+6fC55Nf8p6Q/JqwOv27/mLxX0mTxX/ld4LMrThfZXDsoqOlzgPBhsPvIq54fb35\n/uT3hT+e/Pr/n2EUjAIaAwCSXdJU;\n\nDEFINE COMMENT 1\neJzzZWBgSHNss2u3jAyVN7iSGat1tqpNLb/zk+qyGW1qk2f/0myYV2+qv/iI94WNQKUMNxKfp81Ozw7a\nkenrfiU7xCwj57F7Rk5j28dczpUg+alxcw82VLzfA2K/6f/mYtNr4izf7etu0hnst7UtLsasJbaEtcWz\nX6e1bemzNocd+R1S+zZ3fz3M3dt1ZHd/1xHVKUUHWme+3PphrvtyuwUlE1bNr6nnn/0r+dWUF35v+u86\ncPcesQGZ3dbo684/W30LiM1xKDtI5oC6r+ueiT5MO68F7tvqHW+65UrmgQ1cE+M2+K57vlFq3/Qte85M\n3Xn7+oo9J25NPBx7e/Uphks8FzbsO3bxwsZjFyfPXnn+TeuBE4FpAscU4iwPuUWAzA1bcy3w9HrhDK69\n29dyHFI7I3W0+eqBEyduMYyCUTCMAABQE5I/;\n\nDEFINE COMMENT 2\neJwzYmBgWBhxLTAhQC01wKO/Zp9T0uQ0x8mzCx3cl7M4mq7SdO9Zs8H3wka+iNa9QKUMfbnP05LLHrt/\nL0vz1ij3KmcsK14BEq/KZ9olV1F0gLnz62EQ//nGbXGn18fF6K+Oi6lfoZZ6fOH3ycYLi1e8W7R0g/ry\nl1s/bRDd7rF90ua3ux6vO7KvYZ7vAdm+hweOF8scOJjzdd+VzH1bjaNB5kxcPTfKZ21z3qcNH3tW7Hl7\nBSTmt6LB/OEKPs/rK9V9Vdf8Sr4PlGcYBaNgFJAFAMX9XZQ;\n\nDEFINE COMMENT 3\neJyzYmBgUDdxtHxl6ev+wUktdZVLbMkql8uNYi5hrScd8zt3WHJNdDOcPPuZ9tHF2lrFK4DKGULULE8W\nakw4PcV4wuk428UnWBy3HQWJH8rwjhfIdotYWODuwF2qdgYiVnvuQe3iEzqtJw+B+BcX3HWYMUfPpnqW\nnk3rzA+27NMV3R5MVfd9NSUl+dWU5Or4GcyLzOYw7RKfP/eg25K5B0tXbti3ZF39tgMblm6w3xy15PJm\n5akZ6z+X7Fo+0YdpoahF+pxe3e0zF2jNmn5aG2T+pMlS4Z9muBTMWxoy9/Dq+m3bNi4+Ubl9/TWGUTAK\nRgFWAACrAWaL;\n\nDEFINE LABEL 3\neJyTY2BgeJh6LfBI8m/vnKQLXu4xad7bwnRD4kJPRh8KeNNq6R8y19K/eIV+QPBWgeA7+/tD4w/vizp5\nyDjuzv7/STN21WT1rDmQG7VkX5HZpPmlNfVGZVvKGMsWJ4qVqPteAPKPlcX0NFRUTfetLV4xocFqo2TT\npM1V7X82MYyCUTAKBgUAAPGwObw;\n\nDEFINE LABEL 4\neJwTZmBgmJkzz6kvt8KjJe9kdEverlqdXN4TH3PTNhUUhMx9X8Q1cX6pQfeZ+sa2e035nWYtSZNntMxc\ndK9p6YYHtVL7squ6jmSle9+rS31wj2EUjIJRMOQAAPxsJds;\n\nDEFINE LABEL 5\neJwTZGBg2N/K5zmhYZ5TZPkpZ96CJZ4fcyf6rM06HPI5gz2KPf1XcmeKV3lnyrFuobT0WWfS9RcLZCes\nbiq+sDG/Q32L0zT+DQyjYBSMgiELAOsgHaM;\n\nDEFINE LABEL 7\neJyzYGBg0HS/krnHXS31m/e7UA7/7KCi4GuBYjFzo1LivOPnJrkU+KYeaHmYWjKhLnXTsrlJJw+JJJ4/\nGRj9+1RMVMXxE5EcB3ujmHa5x0zaPDVu6Ya38Us3JCXXb9uR+X7Pz8L3e4DGMyybeCVzSp9dpnw3Q/aC\nDsn84LYtZSdbbnbotB5d7NE+9+DxzmmXbvV43zvfu+hB6UTve+8WnTyUsPrCxnVrE1brbshdqLshfZbT\nOtm+s6umNMuuCKgTn3+roLzHOBpkdmpnnX9T95eYw5P/NwlOWzAxfc7SDdMW+hzbtbzghstKo1sMo2AU\njAK8AACPhHCr;\n\nDEFINE LABEL 8\neJzzZGBgmGd0LdDQeK+vi9lj9zxXX3c/3yWe3kHXAhcHx8UsDo4t+RzQ3lvvy7xI3iNtU7Oz7u7TNtuO\nvrLsOnLW/M+mOeamq/QtZJbNspm5KMYpd+Frnw9L4kLrtylER+4RSdywD2g8w/xS4+h9RV2xlwrOJRUU\nsBWlFkYt0SryXRdYvHdLclnr3t3lkXu+Vvesyay3mZlZX1O/tO5zycYKt4jksunB3KWMwSAztuZdCzQp\nnJZ9rMygW60mZK5He85OkLjlKoU4w2VuEaJLCiONF26L2zJvWnbfXLkyljmb+xbN3j/n5Jxvqy8ueLl1\n3tL3e/xWvN9zdV3apucb56803ZK7sHmb8tSn2wy612zaUjZnVVds/Qr2qHeLCiNB5lbPmuizafHxYoZ9\nhy4zjIJRMIwBAJlLiGw;\n\nDEFINE LABEL 9\neJyTZ2BgsKpabVFRomejl2Hl9Tb+XahxHHuUe4xaamD08eLAaNtGxriq6a6JxSvWpzrsuJd18hBz4baj\neaXbjmbWb9jH2uKw407743WXOkLmfmg9XqzT+jZ3Vn1kaF3tC7/E6t/eQOMZ9kXd02hImOeUlf48Lbro\n+2SjsjXzmTsVjjKMglEwCgYcAAAeZDgk;\n\nDEFINE LABEL 10\neJzTYWBg4PA/W7UtrCs2JuqCl0L0KeeYqO+Te6O+rW6OvrO/OXrOTaAShhwv1+vxGQU3VudLXgPx3Xq6\nXcXb+TwXN18L/NTgHS9T+6xOrSa/82t1wzynOquNExpWbe9rNT4k3516irtX7YzLRLUzB2fMPeg1q3Xv\nyTlWGz/MzV34Ye6x7l9zzKskZ/EmWkyfHpw4eYnnownfXHq67jqA7HhVk+BiUb8qwKF5Wxz/7K+H3Zao\nPmGgA+Bd8Gpu7doH9z5tmPrq8mbn9/SwcxSMgoECAAslXGo;\n\nDEFINE LABEL 11\neJzzY2BgyPF6njYx4F1obdBe31MhHE5KYdZGnuEb7SXCkybfDT+6GKiEodqeaRdQfktZ4qlV8RkJq0Fi\nE2bkKbFPv6G4ccIOveOdCS46rW4RnxoMiy3qZfss6tNntTUu3XClecauH52pp771Tbu0bOLbK5nTI654\nzWK4dHt+xXGupQ479Fc3zJNe69n/cs2cItkVuiF7F9112DIvxKx1prKe9NQFWiB7BOsSdfQaVlt4N220\nj+yvqXea9mruxQU+x7iW6lzesCL2NkhNykVfd7Hzp5xjzp5y/n18os/Ew9visg7ZZV4/aFjMcWhXLdvx\nnjXPT77fk3Lx96ld11ee/3z7xVmz+z7HFJ4preV+wbyI+4Xy1FvPPfu3PpyQwnq/MPL/VUU344t3HUBm\nR+w/YlN0rM7/ziPR7SeeFB1wf+5zjGEUjIJhAgDz8pYQ;\n"
});