callback({
  "levelNumber": 28,
  "size": 96,
  "steps": 52,
  "successRatio": 0.08,
  "type": "specific",
  "legal": false,
  "worky": false,
  "author": "Mygod",
  "hash": "abef92acdfd127579e2a9cfb03718ac5",
  "path": "28-Three-Sort-34.78/96.52.specific-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 28-Three-Sort - SIZE 96/34 - SPEED 52/78 --\n\n-- This solution is level-specific (patterned and quantity-limited input).\n-- The input SHALL consists of 4 tuples, and the first 3 should be in reverse\n-- order, the 2nd should be in order.\n-- Heavily based on 62.73-AlanDeSmet.asm.\n\n    INBOX\n    COPYTO   0\n    INBOX\n    COPYTO   1\n    INBOX\n    OUTBOX\n    COPYFROM 1\n    OUTBOX\n    COPYFROM 0\n    OUTBOX\n    INBOX\n    OUTBOX\n    INBOX\n    OUTBOX\n    INBOX\n    OUTBOX\n    INBOX\n    COPYTO   0\n    INBOX\n    COPYTO   1\n    SUB      0\n    JUMPN    i\n    COMMENT  1\n    INBOX\n    SUB      0\n    JUMPN    h\n    COMMENT  7\n    ADD      0\n    COPYTO   2\n    SUB      1\n    JUMPN    g\n    COMMENT  9\n    COPYFROM 0\n    OUTBOX\n    COPYFROM 1\n    OUTBOX\n    COPYFROM 2\n    OUTBOX\n    JUMP     a\ng:\n    COMMENT  8\n    COPYFROM 0\n    OUTBOX\n    COPYFROM 2\n    OUTBOX\n    COPYFROM 1\n    OUTBOX\n    JUMP     a\nh:\n    COMMENT  6\n    ADD      0\n    OUTBOX\n    COPYFROM 0\n    OUTBOX\n    COPYFROM 1\n    OUTBOX\n    JUMP     a\ni:\n    COMMENT  0\n    INBOX\n    SUB      1\n    JUMPN    k\n    COMMENT  3\n    ADD      1\n    COPYTO   2\n    SUB      0\n    JUMPN    j\n    COMMENT  4\n    COPYFROM 1\n    OUTBOX\n    COPYFROM 0\n    OUTBOX\n    COPYFROM 2\n    OUTBOX\n    JUMP     a\nj:\n    COMMENT  5\n    COPYFROM 1\n    OUTBOX\n    COPYFROM 2\n    OUTBOX\n    COPYFROM 0\n    OUTBOX\n    JUMP     a\nk:\n    COMMENT  2\n    ADD      1\n    OUTBOX\n    COPYFROM 1\n    OUTBOX\n    COPYFROM 0\n    OUTBOX\na:\n    INBOX\n    COPYTO   0\n    INBOX\n    COPYTO   1\n    SUB      0\n    JUMPN    i\n    COMMENT  1\n    INBOX\n    SUB      0\n    JUMPN    h\n    COMMENT  7\n    ADD      0\n    COPYTO   2\n    SUB      1\n    JUMPN    g\n    COMMENT  9\n    COPYFROM 0\n    OUTBOX\n    COPYFROM 1\n    OUTBOX\n    COPYFROM 2\n    OUTBOX\n\n\nDEFINE COMMENT 0\neJzTYmBgWM6jGJHBE+L3hNfaZj5/rtFNwT4ZAdFSLm7x79zHJPby/5aZrVoul6mfozQ/DKic4SW3kdlu\nGSMzELtD/6TEASNvKRXbFJ1HtloGi2z1jB2NpgeA5D76t4kphDmL9MWwiDIl+ssyJd5TvxD92uBdgLXN\ns+Amx3lhPJ73wqYH6AY+imh335B03bEwGaQvP8Bd3CDAX3anz3vjf15tLq4es4MZRsEoGAU0AQD5tTW8\n;\n\nDEFINE COMMENT 1\neJxTY2Bg2MNiL5jBYy8Yz39UVFaARzpWYLrSEt7F2mbsz3WFRTL1z4kWmvKKfbcUEG1yfMg32VePSzKo\nlF0yCKiVwYLtrLQFm7MTiL1S2V82RVVQ7o+xmWWD0V7bEO2zniDxaVqTfUH0fbsQP2bPDWy23t+5rX04\nJKx91HT3eOsZ7/FucrT2aXMBqeF2s7Zx8DKzZBgFo2AU0AUAAI1GJdE;\n\nDEFINE COMMENT 2\neJwzZmBgKOCcH/aMx8xSVPio6EQRd/HdMvb22+S04oBSDIv4WJw3KrA4g9gTdK4pbrB4pPXG8rXBUYNb\nQX66atEg8X4XDokpUe7iHPEnJdriz0onheYaffPdYbXTh8FBNpzBISSqzi4kisdTIUw2dKP/6zhb7w1J\noU6laSC9rR6zVQ96LtZm9Fpj6Ow5PQAkdr1gupJZ7Xtj+bxHESB+1WQe6X8Tz0pHtafoKLeUWjxpdnZK\nbvH2iG2b7CvQPTu4ZlJMyLYpEYEMo2AUjAKSAQCM20K9;\n\nDEFINE COMMENT 3\neJzzZ2BgMObg8TTg1DNeznNS4poAAxi8EmRgaJdQ1GqR3GCyW+asJ0hsE8di7ZPij7RA7GlaR0Un6BwV\ndTE8K21p6i8baz9bdb5dguYXMz3jP8Zmlv+N9tqC1OUHFLK3JGxgY0gy47ZPOijUksAhMS1SVNE9PkLZ\nJllW3SpFy6AmudCUKbHS+l6Yt4d2EA/YrpVBVnyqISclFMI+m4H4u2VOlkwRPlnykC+kZjlPTNNL7tIp\nGTx1s57wui8UFb60ol0iZJWRwuSVILV1xk35epbOBfVe/RW23pOr/3lNr9tgwbEI7O7IDUn7ktbEb0hf\nE78ia0PSi6y92TmZ7sWNibMbP6SndrzKXNP7KrNw4of0PzPsk9wXdsZ5L0kP5l0K0hseuSVVNGpnxuWo\nkyWXo35MZRgFo2AYAAB4sm8P;\n\nDEFINE COMMENT 4\neJyzY2BguCzsLv6Et00sl6tLsoAzRKGAc42hHlednTZ3m0sq71nPcCFRf27xa/6NUiF+QOUMT1XcxWU0\n3MX/GEuqFFjEqH0yV9SqM8416tC3t+/Wc3ft0z3pBlJ3xSkhPMCly73VY7F2kf9BodzAkxK3w3dYXY66\nFwqSZ/Y86BAfdtBhWmSdHYi/L8ld/EcKh8St/AjlQxXzNQ5VPNc9Wq5nrJjb5wWS12zayx/UtYPHaYIV\n387JB4VKpp6UMJp2TbF8ymLtSV0r9Dz6MvV/TzIy+zG5zm7fRA63iI57odqNCeEgvanNDELKLUdFF7Vc\nU1za7O3BMApGwSgAAwDua1T3;\n\nDEFINE COMMENT 5\neJwzYWBg+MNyK6iAM0FzEd9BoVgBd/HLwvfUe8Tq7P5Kv44DSjMYc7i7+oq5u4LYSmohCvy61xTv2+Ua\nHTKUDQWJTYsMUXgWfE1xi5+iloXvCr0qn/fGVT57bdcEzg6eFpmb4JS4IQmkLifznnpt1WJtvYbXBvsr\n+7y8S+eHBRaviZ9auCYeJC/c5SyybvpBofAFbWITF3lLCS2SVBFfoKilNXOLufgCa5urC+rsri5ocxFf\nwOMpP1cyyGKKWvSxvsJkkN5jfYJytpNE/RlGwSgYBSQBALG9RkE;\n\nDEFINE COMMENT 6\neJyzZWBguMf/nZtZ6g/fZ/km4dVK7uIvlHmkl6lcklumMl/jhbKarqn8BhNmqUJTU/k/NkYKbS6FCn1e\n2+RmB1fKzg/jkNCKy+XSSwQawzBTsE1sPv9e2/n8Ad4zBZdEgsRYJV8bXBQpNAWxLU39ZVVsZdUDXPSM\nLzobmRlatLkcNbjmD5Kr8tGKexC6xXxa5HQloeijov4xHBKb0yIC12VsSALJPw456SYQc9azLonHE8RP\ny76l4l36SMu4Ts/Yuvq7ZVwexJzfk9rEjvXxSF/rkFW/05ZrJNfm7HSnjcczoHuy75H+Sz4WU066MYyC\nUTAK4AAAz6hPqA;\n\nDEFINE COMMENT 7\neJxzYWBgWM/JI80tflKiUcpbap90n8xf6Qhle+kUHV6xDSYzBT+bMUvtsKqX/mNjK+PuWi8d4H1ONCZk\nOc+90O1sjyKA2hlWcQvKveQ+6gxiT9CZLM+lH6G8yVxR671Fio6epZbBJvPPZt9Nd1hN1u7zAqnhdnse\n7eF+1rPKR1Llp0+fzBa/JuGP/oXs7wLes2YF8UgvD+5yB6lz8LK3L/K3tgGxT4qbTfUXLZwYK1A48Qmv\n2dR3nCGrDDhX7FjPqbf3GU/ZIS9x+5P20nUnQGrZDTZMWGXFMEfNpm1Bg5HsRpAYn2vVUVvvtgW5gTFN\nWUGzG58Fp3bEhx2cMy8sdw9I/qeP95LUEO8lDKNgFIwwAACV3Fr9;\n\nDEFINE COMMENT 8\neJyzY2BgyOBpE4sSZBD6oFAnkKPEIKSlzCKqpSwot1Fhvoa5XKb+X+lco5PiG0x2ym4wMZU3MiuRZ3He\nJnfW86DUvVBhkczYAs4VMUBjGJT5TkrE83NIxAp0SUoIyYaCxPx0/WUdjQTlsq0kVVZYx6ip2Shqqdmo\n6WZYZ+rbGTM4NBu6u4LU5QayiJ5xlVQJcFmsLejy3viM615bW+9r/gYBCeGqIQnh8WEQ83hjb6kci7+n\nnpadoqOY+9ogMfe98ae0Pzb2SRxuIPmzJSF+hyoy9f9Xhij8qRKUW9tQaf28qc/rTltqFEj+aHmf16Y6\nHk+GUTAKRgEYAACnGUm5;\n\nDEFINE COMMENT 9\neJyzZGBgOCnuLXVRhEf6I8d8jW9smfrb2TaYFHHU2WVx83jOERD1Z5CeHgBUxnBX/Z56pOY99TpjPeMV\n1t8tV1gzOPw3CvEDyXG6n5Vu9fCWUg7lkQ6J8pcVip4sHxQ9W/VxSK7RxGhrG5/YJscTcSF+XnEJ4f4x\nK2JmRuQmFPm/TwTptfZJ0Nzuq2WgGzjZVyP4UQRI7G3GYu1l2Sk6X2r/2HyvaXK8VBQTAhKXa8uMndNm\nby/RMV9DuOukRH+3uzh3L4cERx+P9IdpQDfPFPRZNkstGqR2SieDw7YpBx0YRsEoGAU4AQBZCks1;\n\nDEFINE LABEL 0\neJzjZ2BgeJRz7nJkgd5entKd0wrqSy3eNOy1vdeqlzirfWdGT8/zzn0Tzy3Nn+58Rmtm/xWgcgb2cud5\nfD1NcxlGwSgYBUMeAACrzxtW;\n\nDEFINE LABEL 1\neJyTZ2BgWJZdaR2dv8X8fb2R2ZkeBgeHid4eFlNuBZVMTY36PLUpf8tUjpKdk6fXHetb0j6nbcOE9fWf\nJwkWf570v/LzJL0Gs6m+PV2LW/qnr9k3ccWOfxML9zNPsD8p3HXyQkaTz6W0bN7LP1LczwOtYbhU5Owk\nWPxj6tVCte2RBQdPMYyCUTAKBhwAAK7aPPU;\n\nDEFINE LABEL 2\neJyTYGBg4OirtO7qNTIL6E7ReV9/UqKipk3saHmb2Ox8f1nz1EdabfGFptMijzo/C34UsTLoc8rKII4S\nici2BQxJDKc2p/FejsubfJ2xcvJ1w/pzlx+2OJ/h6NPadaR/ydZ/E0NWMYyCUTAKBjUAAI5fKy4;\n"
});