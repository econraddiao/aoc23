const test1 = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

const data = `Card   1: 82 15 37 75 85 51 99 18 17  2 |  8 17 54 14 18 99  4 85 51 49 91 15 82 24 75 25 69 61 52 58 37 87  2 22 28
Card   2: 67 26 84 63 48 73 36 94 89 65 | 36 94 96 65 89 87 12 26 81 82 77 99 40 63  6 73 55 48 10 69 59 78 24 67 84
Card   3: 57 44 28 69 45 17 48 62 93 89 | 44 92 33 24 40 43 89 94 62 19 78 87 70 28 57 14 74 32 80 18  8 85 79  9 71
Card   4: 74 18 96 80 53 40 72 89 26 84 | 77 53 50 72 88 27 46 26 74 89 39 79 90 57 81 80 92 84 64 21 42 45 76 40 18
Card   5: 90 53 63 16 45 84 80 86 71 36 | 84 57 67 63 87 36 78  1 53 51 26 90 58 71 86 44 11 30 47 95 16 55 45 80 15
Card   6: 27 87 77 39  1 33 65 66  5  4 | 43 62 41 11 89 97 55 45 56 69 22 96 84 21 94 47 24 32  3 65 63 85 98 95 93
Card   7: 86 98 87 80 36 41  3  2 29 96 | 41 28 86 54 80 21 55  2 73 53 98 33  5  3 20 45 83 71 42 87 36 46 96 29 60
Card   8: 25 12 79 16 57 82  5 15 58 52 | 16 86 55 71 76 47 97  8 60 45 70 73 83 69 38 95  3 53 18 84 87 22 19 11 74
Card   9: 55 81 25 96 64 56  8 46 42 41 | 46 64 32 47 90 66 73 71 96 99 25 26 14 42 63 81 75 56 55  7 51 92 30 41 31
Card  10:  8 58 13 23 54 71 18 51 89 10 | 89 64 93 34 70 15 48 67 86 51 38 13 28 78 58  9 95  5 22 57 18 11 99  8 23
Card  11: 94 12 72 82  3  6 41 91 30 89 | 48 47 26 99 62 57 67 28  1 84 32 20 96 14 78 59 22 95 53 85  8 90 87 40 49
Card  12: 45 74 54  7  1 42 76  5 46 63 | 47 42  9 62 76 74 98 63 44  6 72  2 24  5 70 18 88  7 33 89 46  1 23 58 95
Card  13: 10 87 14 75 81 49  2 62 54 99 | 80 53 19 44 22 35 86  3 64 10 69 88 84 56 58 77 30 94 96 59  1 28 37 34 57
Card  14: 49 26 38 79 19 25 92 45 37 86 | 29 91 89 21 14 76 99 72  4 48 61  7 80  1 43 13 58 39 36 57 34  5 77 83 71
Card  15: 67 13 19 73  3 92 99  9 40 97 | 85  8 51 41 87 26 61 69 11 67 75 40 77 74 66 16 58  9 90 19 83 50 92  7 44
Card  16:  5 45 86 13 16 18 91 85 84 50 | 64 95 33 63 77 66 57 52 48 96 20 90 67 70 82 17 91  9  6 12 44 76 62 26 60
Card  17: 80 59 74 57 46 76 73 48  7 69 | 13 65 21 40 53 39 43 79 31 92 67 27  6 22 24 90 63  4 51 47  9  8 11 42 45
Card  18: 26 70 28 46 45 87 21 60 15 30 | 84 40 52 65 41  4 48 33 54 19 94 49 56 64  6 69 67 31 68 24 32  5  1 25 85
Card  19: 52 38 95 83 86 40 46 54 29 68 | 22  9 59 60 36 82 70 13 30  3 81 18 64 93 25 66 35 16 85 80 45 72  5 98 51
Card  20: 53 82 57 94 71 84 26 50 14 37 | 59 77  1  6 17 22 18 72 29 25  2 81  4 56  9 60  8 52 42 43 86 55 19 66 61
Card  21:  8 97 45 69 62 86 46 21 84 92 | 29 70 77 19 54 56 87 15 65 99 26 16 60  5 39 13 42 74 96 88  7 33  4 58 44
Card  22: 90 87 47 36 10 68 25 34 37 57 |  4  9 65 68 45 36 47 37 87 66 95 57 41 84 21 34 64 25 60 10 90 94 75 81 26
Card  23: 15 28  8 13 86 91 84 71 29 48 | 40 42 26 48 76 77 91 82  4 53 16 25  8 20 13 44 15 86 29 73 64 99 49 87 58
Card  24: 11 86 44  7 85 95 19 28 41 62 | 87 41 44 90  7  3 19 71 28 31 95 48 30 86 76 62 11 46 85 39 35 96 77 55 18
Card  25: 10 66 15 54 87 94 41 64 69 88 | 89 58 68  7 29 59 71 46 53 99 39 64 34 52 79 22 94  2 83 15 33 41 36 13 21
Card  26: 12 45 26 34 63 70 95 80  3  9 | 76 95 65 72 18 90 19 84 61 87 41 85  3  9 17 49 44  4 45  2 57  8 51 97 26
Card  27: 91 88 82 25 94 28 55 67 75 81 | 91 94 88 55 87 86 70  9 75 25 29 14 13 84 67 24 56 81 64 23 82 50 39 28 33
Card  28:  1 12 91  3 21 13 26 79 89 73 | 54 73 70  2 67 10 46 72  4 91 49 26 13 47 89  3 81 71 32 12 82 84 20  1 79
Card  29:  9 74 67 81 48 49 51 43 89 12 | 22 12 33 31  9 90 88 81 77  2  3 74 61 21 26 57 49 11 40 35 70 95 67 79 43
Card  30: 54 81 19 21 53 75 70 30 48 42 | 26 96 56 70 42  2 54 65 40 53 75 35 19 95 21 25 31 41 22  5 30 47 11 52 10
Card  31: 70 44 14 22 41 19  4 61 51 47 |  8 60 66 16 87 17 85 32 63 41 37 65 35  1 80 19 67 77 39 12 58 64 89 43 73
Card  32: 29 78 33 58 95 27 26 88  3 74 | 95  6 28 90 73 50 76 58 67 78 29 44 81 49 63 24 88 64 25 82 74 75 31 56 27
Card  33:  1  2 22 25 16 42 18 70 14 43 | 73 88 80 91 49 53 34 13 75  1 36  5 24 43 63 31 93 42 67 94 74 30  8 14  2
Card  34: 61 93 15 19 54 80  8 10 29 31 | 91  3 74 71 55 78 39 76 98 11 46 97 86 24 33 83 63 72 40 43 41  5 88 79 13
Card  35:  7 66 28 68 54 62 21 71 97 55 | 30  2 17 23 60 20 42 81 41 32 37 96 59 47 19 70 14 38 83 50 56 16 48 58  3
Card  36: 51 84 65 26  4  1 29 98 38  2 | 60 67 24 76 99 79 31 34 13 83  6 68 53 43 77 98 49 90 75 21 19 51 70 40 48
Card  37: 23 49 47 78  7 91 79 54 87 41 | 10 45 76 33 34 61 16 30 71 67 11 95 57 92 18 94 66 73 28 50 20 85 87  8  2
Card  38: 80 15 34 32 36 58 25 64 29 76 | 81 97 87 90 44 17 99 20 65 89 79 86 88 12 59 82 95  9 69 27 51 47  3 52  1
Card  39: 32 63  5 33 18 78 45 30 48 85 |  6 93 69  8  7 40 36 58 91 13 15 97 46 74 49 89 92 88 34 23 59 90 20 86 28
Card  40: 84 75 20 38 61 40 39 31 73 32 |  9 10  7 31 86 34 38 90 67 42 61 81 23 32 64 72 20 26 76 49 40 75 73 12 18
Card  41:  5 27 41 42 64 21 74 62 80 88 | 17 73 81  6  7 45 61 18 86 77 19 51 15 44 47 48 90 32 95 54  2 89 58 35 30
Card  42: 70 91 14 36 81 64 11 79 73 16 | 25 52 87 62  5 50 96 61 63 35 16  9 21  4 98 29 45 73 32 67 71 22 28 48 66
Card  43: 21 14 41 55 36 94 24 71 32 64 | 13 37 90 25 96  4 79 72 98 57 83 35 65 30 11 78 75 14 21 24 66 38  6 69 34
Card  44: 46 14 17 79 88 89 91 94 18 57 | 75 32 51 20  6 48 12 36 77 78  8 95 62 26 91 47 96 44 71 93 61 94 55 81 10
Card  45:  7 67 29 75 52 47 13 57  1 22 | 94 57 22 52 72 74 63 60 39 89  6 27 71 36  8  7 84 75 58 50 83  3  9 16 12
Card  46: 59 22 81 73 18 71 24 25 60 98 | 91 98 35  2 57  7 22 43  4 49 59 96 79 36 56 88 99 15 60 89 80  6 10 45 34
Card  47: 94 79 46 19 10 17 95 58 67 32 | 82 22 12 35 84 67  9 11 19 92 52  8 76 95 32 46 10 42 39 33 64 36 61 21 24
Card  48: 26 59 37 67  7 34 46 32 17 78 |  6 26 10  5 24 84 41 13 78 36 12 91 80 52 31 11 59 40 19 46 45 43 29 30 18
Card  49: 69 52 64 35 82 38 66  6 56 81 | 74  6 57 42 58 31 41 12 89 49 32 77 90 71 34 94 54 25  1 26 64 24 78 59  4
Card  50: 70 88 55 32 45 93 52 85 64 40 | 66 68 79 59 89 85  3 57 86 43 27 51  7 50 88 63 23 36 24 31 17 61 47 94 80
Card  51: 32 98  8 85 76 73 78  1 95 83 | 60 75 53 42 36 30 91 40 64 50 35 25 55 34 62  5 10 48 87 54 74  4 17 73 37
Card  52: 76 69 72 77 13 52  9 67 86 32 | 63 58 98 29 23 49 94  6 40 62 72 24 88 93 51 37 55 69 97 12 80 33 74 53 48
Card  53: 96 61 98  3 41 52 94 42 68 78 |  8 21 55 65  2 43 76  5 89  7 51 67 87 75 48  1 38 12 30 59 33 17 92 58 53
Card  54: 68 82 48 53 43  6 45 41  8 80 | 96 79  5 88 66 32 86 39 84  1 49 34 89 16 56 11 28 13 35 12 62 23 59 78 57
Card  55: 54 72 92 73  7  8 30 16 41 47 | 23 98 70  9 16 30 84  8 34  7 38 80 47 35 52 73 92 19 72 69 87 88 12 41 54
Card  56: 71 91 25  2 44  5 62 93 48 66 | 58 91 65 90 18 39 93 53  2 56 79 85 48  5 67 94 62 66 55 25 71 89 44 80 87
Card  57: 13 16 76 81 99 90  5 95 45 66 |  3 57 89 50 61 35 85 44 62 18 95 99 23 30 83 97 94 20 37 53 74 15 59 48 22
Card  58: 65 33  4  9 13 60 44 89 67 30 | 13  6 26 92 85  1 56 96 61 40 63  9 53 57 68 88 52 69 33 64  4 89 31 94 75
Card  59: 13 44 38 18 33  3 30 79 89 92 | 82 88 26 92 73 13 20 33 99 98 44 30 18 91 39  3 67 89 31 79 24 87 61 38 52
Card  60: 50 43 29 47 42 22 23 31 57 79 | 63 90 99 13 52 58 76 95 51 79 42 47 94 92 97 43 50  5 44 22 57 96 29 23 31
Card  61: 85 79 17 31 99 87 70 97 13 14 | 42 67 58 36 34  5 38 56 93 45 16 75 10 39 28 54 61 87 55 30 59 32 98 23 86
Card  62: 73 76 16 36 83  6 25 92 19 58 | 25 83 58 92 72 29 19 16 93 73 32 74 82  2 24 65  6 69 36 78 66 89 76 44 26
Card  63: 53 13 31 41 12 22  2  6 43 46 | 42 41 53 21 27 12 31 13 59 30 46 34 65 83 54 14  1  9 75 73 50 43 79 70 63
Card  64: 79 63 31 60 96 37 46 44 43 56 | 73 34 88 91 78 39 36 37 80  2 56 79 98 28 93 70 96 86 63  7 89 17 60 30  5
Card  65: 60 67 51 96 54 93 52 35 91 39 | 16  7 54 76 96 21 93 77 67  2 95 60  1 46 42 91 79 35 48 51 71 37 39 52 55
Card  66: 81 78 23 99 29 56 11 43 48 79 | 75 56 23 79 88 10 78 21 93 44 25 86 29 87 94 11 43 26 92 51 81 99 72 48 91
Card  67: 29 23 59 71 21 88 72 95 85 64 | 61 70  8  9 83  7 78 27 60 15 22 35 96 47 86 42 37 11 77 18 85 24 19 63 31
Card  68: 78 93 53 29 59 73 45  4  1 58 | 72  4 63 93 59 45 67 73 87 58 29 12 81 53 78 76 71 21 50 92  1 62 16  5 66
Card  69: 91 56 62 48 26 97 31 80 88 53 | 46 43  6 45 14 91 33  5 19 48 68 81 17 64 12 40 56 74 50 25 26 72 73 13 67
Card  70: 62  5 28 14 42 94 48  2 54 26 | 28 66 46 33 75 63 89 59 38 87 90 83 29 49  3 15 85  6 40 58 32 82 25 76  8
Card  71: 17 45 55 58 64 19 87 76 47 10 | 91 85  7 65 10 84 36 42 57 62 96  1  3 55 72 30 17 64 82 81 93 69 99 18 53
Card  72: 65 50 62 51 97 93 49 54 38 92 | 30  7 51 54 13 72 11 20 79 61 40  9 53 17 33 92 47 43 83 45 32 67 64 39 55
Card  73: 29 83 63 46  2 86 81 56 57 69 | 78 81 34 90 32  9 95 93 85 22 80 49 37 65 74 51 68 46 38 43 83 86 92 44 87
Card  74: 50 59 88 81 25 93 70 41 45 72 | 20 48 16 32 51 52 66 30 40 38 99 37 63 44 10 17 58 68 19 97 83  1 95 46 23
Card  75: 86 92 53 46  5 49 17 48 25 76 | 53 15 75 96 51 69 37 66 95 83 49 54 78 64 33 98 99 34 12 58 60 23 89 84 13
Card  76:  9 11 30 34 33 58 19 64 56 17 | 52 95 77 24 60 37 49 42 71 45 57 94 15 65 13 83 99 97 78 91 44  2 84 96 62
Card  77: 28 44 49 36 30 90 72  8 54 82 | 12 19 16 98 15 70 77 66 94 59 79 91 85 96 18 29 50  5 78  3 10 46 41 35 43
Card  78: 27 35 75 20 56 49 29 60 70 78 | 85 58 61 83 94 16  9 97 92 39 59 18  1 51 77 55 79 33 68 43 47 69 31 19 89
Card  79:  5 75 99 55 95 80 20 50 61 29 |  9 90 59 35 34 82  6 72 86  2 88  3 83 93 46 57 40 63 19 52 39 77 36 79 94
Card  80: 24 72 45 43 22  3 20 93 88 37 | 19  3 93 28 92 42 72 37 89 20 24  7 88 65 45 22  5 15 35 41 40  1 11 43 36
Card  81: 56 37 74 19 63 14 72 54 35 58 | 15 58 33 50  4 29 14 35 38 19 65 71  7 44 86 16 84 46 36 88 56 89 78 13 31
Card  82: 74 46 78  2 86 24 12 63 95 43 |  2 42 44 12 11 23 47 10  9 63 30 38 15 35  4 49 43 37 85 84 25 34 95 71 80
Card  83: 60 16 23 37 54 75  6 70 20 64 | 69 88 41 15 60 83 23 14 58 49 75 70 16 32 54 37  9 20 34 64 47 33  6 66 31
Card  84: 52 11 25 21 95 32 94 80 70 64 | 68 32 26  3 40 11 33 75 60 25 96  6 35 70 86 80 64 95 37 17 21  5 94 52 54
Card  85: 93 59 35 62 43 50  4 10 65 66 | 42 67 18  3 13 34 59 65 11 24 91 32 43 87 66 56 12 97 35 75 37 94  5 71 93
Card  86: 89  8  5 59 46 77 26 15 30 24 | 26  3 96 41 35 94 24 93 20 59 77 86 15 46  8 17  1  5 30 98 55 89  9 43 85
Card  87: 43 59 21 29 54 33 78 67 47 44 | 47 96 44 65 80 67 20 33 78 49 29 70 54 53 51 81 66 34 38  2 52 23 26 61 88
Card  88: 40  2 12 90 56  6 53 98 97 18 | 12 29 56 37 13 79 63 70 45 11 41  6  2 87 75 90 40 33 98 97 53 74 16 18 58
Card  89: 92 96 75 73 19 46 70 59 60 38 | 39 22 96 24 23 35 99 97 30 86 33 55 36 66 59 85 19 54 88  8  3 73 78 47 62
Card  90: 66  4 84 39 35 89 58 99 75 26 | 89 70 34 98 45 75 22 95 31  4 64 84 51 32 44  6 39 26 47 69 18 17 35 58 13
Card  91: 94 50 90 58 37 17 57 27 95 78 | 58 70 19 84 11 39 30 87 52 25 15 51 76 56 75 45  7 32 16 82 17 18 94 38 69
Card  92: 10 82 70  9 53 65  5 52 92 15 | 59 86 33 17 47 77  4 73 70 45 92 75 28 85 96 31 49  3 78 55 67 29 94  8 80
Card  93: 28 96 39 25 56 92 71 67 38 17 |  5 79 52 43 88 67 51 74 17 62  2 48 26 64 21 69 84 57 13 53 99  1 56 25 71
Card  94: 94  9 39 62 92  2 86 34 35 21 | 19 81 55 30  5 41 94 74 40 49 31  4 17  3 82 85 78 45 38 36 20  1 24 70 71
Card  95: 41 67 23 14 37 51 25 75 54  9 | 44 47  1 88 17 79 68 60 74 72 11 38 70 28 91 41 63 64 51  2  3  6 92 53 86
Card  96: 72 28 58 55 99 52 87 43 53 36 | 41 42 44 78 62 67 71 69  1 63 76 24 66 68 28 98 16 21 49 80 51 81 23 15 48
Card  97: 29 18 25 85  6 49 93 32 88 82 | 25 12 27 81 99 93 82 67 24 64 84 74  4 88 21 53 75 41 94  3 83 85 10 70 91
Card  98: 58 51 79 10 86  7 11 67 26 99 | 64 80 25 51 11 36 99 49 17 85 16 50 65 31 57 92  2 73 94 79 75 83 59 14  6
Card  99: 99 90 86 72 54 22 43 29 10 49 | 55  6 48 25 10 92 72 19 77 50 36 16 17 47 58 22 24  8 31 34 51 45 39 95 98
Card 100: 22 74 77 49  4 95 63 44 52 56 |  7 86  3 46 26 23 78 97 43 16 91 30 92 77 18 51 41 15  1 21 19 61 88 14 27
Card 101: 81 84 44 75  8 55 29 67 63 34 |  1 20 28 46 36 82 60 27 62 69 40 18 87 91 74 66  6 38 15 21 45 17 52 78 37
Card 102: 78 42 39 61 80 30 81 52 60 57 | 27 54 25 48 37 93 41 92 84  2 67 91 94 26 51 29 14  7 98 62 74 65  8 24  1
Card 103:  7 78 29 89 99  4 49 91 34 26 |  4 26 76 90 49 47 86 41 72 29  7 91 58 96 30 69  3 53 89 78 85 99 70  8 11
Card 104: 81 36 16 63 66 71 98  2 49 54 |  2 71 81 51 88 58 46 89 67 18 10 49 77 63  7 36 98 21 94 60 66 16 17 54 25
Card 105:  3 31 41 65 52 14 53  5 67 32 | 86  1 79 41 31 25 63  4 53 92 50 82 52  5 56 34 71  3 65 32 67 14 95 60 64
Card 106: 89 41 20 96 90 37 95 93 49 46 | 96 97 65 95 39 41  2 26 93 89  3 85 99 77 31 46 15 49 75 27 34 32 70 72  6
Card 107:  9 41 39 98 64 97 47 21 58 73 | 97 29 45 92 94 73  8  9 98 84 21  4 87 47 64 24 12 41 39 44 81 72 71 78 58
Card 108: 94 61 24 91 52 38 40  7 97 86 |  7 21 69 48 44 56  1 20 25 88 77 67 93 34 76 61 52 64 33 65 17 95 92 24  6
Card 109: 31 87 17 94  4 50 84 69 46 67 |  3 79 14 77 19 42 56 26 40 38 89 94 11 68 21  1 74 28 59 17 54 51 76 23 70
Card 110: 16 75 19 42 36 73 87  8 40 38 | 62 75 19 36 21 74 20 42 25 66 95 73 38 79 50 16  5 96 87 68 48 40  8 12 18
Card 111: 77 16 69 73 53 82 55 68 84 70 |  5 53  2 84 85 68 31 67 15 82 73 70 55 45 77 89 79 91 90 18 10 69 41 16 27
Card 112: 42 44 21 67 65 64  7 12 61 29 | 78 42 54 21  5 53 64 44 61 75  8 79 90 67 85  7 12 99 24 93 65 36 29 32 16
Card 113:  8 71 21 46 93 30  9 52 36 75 | 93 63 16 70 75 52 68 47 51 34 36 46 60 21 29 30  9 54 84  8 92 74 71 55 82
Card 114: 20 34 26  5 48 49 32 16 51 89 | 26 32 89  9 81 34 59 49 98 44 96 30  2 78 41 67 51 70 25 75 20  3 48  5 45
Card 115:  2 78 24  3 84  4 99 40 15 76 | 24 41 62 45 43 13 19  4 36 64 81 42 59 71 21 73 55 77 67 72 70 96 65 40 29
Card 116: 42  3 62 38 70 95 89 41 96  8 | 86  6 59 52 96 13 73 48 35 50 10 77 33  5 74 78 69 81 31  1 89 46 65  3  2
Card 117: 92 40 30 75 82 58 50 72 60 78 | 59 55 85 40 17 72 45 94 71 83 65 66 10 98 39 43  2 75 49 30 82 84 38  1 60
Card 118: 34 85 64 52  3 50 25 92  2 87 | 55 62 53 88 28 92 65 38 19 56 43 26 79 24 74 84 59 73 31 80 14 94 48 34  9
Card 119: 52 17 18 20  2 50 57 45 92 30 | 73 20 19 40 99 30 48 15  2 47 77 26 11 17 49 92 62 50 57 97 25 66 44 67  4
Card 120: 16 75  2 22 44 82 91 79 99  7 | 71 11 10 23 88 68 69 47 43  9 56  8 37 46 80 24 33 57 59 78 22 90 82 29  6
Card 121:  9  1 71 29 66 80 44 89 73 15 | 70 80 11  9 89 31 96 22 51 40 15 77 92 18 71  1 55 97 25 41 10 90  7 65 99
Card 122: 63  3 60 11 23 22 28 18 98 90 | 83 96 74 16 64 56  5 61 65 37 89 73 97 49 46 42 35  1 91 77 29  7 13 87 10
Card 123: 80  6 17 94 30 79 89 21  2 12 | 78 37 88 83 79 77 48 14 62 18 27  6 61  1 35 87 12 38 26 47  9 54 94 16 73
Card 124: 12 13  4 20 87 75 51 59 90 83 | 76 33 70 79 85 86 21 35 15 67 88 60 47 73 50 18 55 97 29 37 44 57 69 42 84
Card 125: 10 51 74 85  9 42 73 45 13 37 | 88 24  4 51 64 80  8 73 92 32 33 70 61 29 95 15  6 79 91 58 31  7 26 11 53
Card 126: 99 91 38 56 49 39 82 35 23 43 | 17 70  5 36 50 64  4  8 14 12 10 41 74 69 32 75 86 59 34 37 33 55 46 80 27
Card 127: 45 52 11 95 69 51 86 96 65 91 | 36 14 85 10 21 67 87 71 25 41 53 30 60 13 90 19 40 61 22 31 49 38 58 84 89
Card 128: 11 49 19 60 55 20 74 31 24 89 | 93 22 19 88 74 35 11 98 80 71 60 26  3 84 20 64 55 68 24 92 28 49 41 89 31
Card 129: 88 91 87 40 76 83 94 14 19 38 | 39 76 40 14  3 61 48 72 38  6 82 88 53 31 93 87  2 46 19 83 36 94 91 22 90
Card 130: 77 99 31 39 81 87 57 65  2 22 | 80 30 53 87 49 77 31 64 88 71 42 57 73 75 39 94 65 99 24 96 81 22 18 84  2
Card 131: 43 46 87  1 89 74 35 18 19 78 | 77 30 66 71 84 28 41  7 60 40 42 87 18 27 57 32 46 97  3 79 63 69 78 89  1
Card 132: 97 48 86 60 10 82 36  3  4 44 | 36 70 57 18 87 86 48 75  2 83 88 12 28 97 78  1 72 84 60 47  4 37 26 32 66
Card 133: 64 42 96 61 21 22 11 68 28 49 | 50 64 41 70 58 22 10 28 32 18 78 49 16 11 21 56 61 26 13 68 42 37 30 82 96
Card 134: 52 34 62 86 74 65 16 68 78 97 | 71 31 30 47  2 97 12 27 49 38 23 83 90 16 89 35 19 82 91 60  6 26 99 41 17
Card 135: 83 49 31  8 52 22  7 46 40 77 | 95  7 52 28 35 91 19 14 77 16 34 44 39  3 68 26 41 71 31 10  4 13 43 72  1
Card 136: 41 57 29 85 44 60 30  5  7 87 | 41 47 88 97 50 10 95 30 29 57 60  9 53  7 18 81 85  5 16 33 87 44 55 80  3
Card 137: 26 35 75 13 18 90 99 27 29 39 | 21 42 86 20 48 64 95 55  8 91 16 37 71 65 98  5 77 39 63 46 10 14 45 82 28
Card 138: 97  7  1 70 23 14 51 63 88 17 | 23  6 68 19 41 80 88 63 29 93 92 25 65 27 90 30  1 51 38 43 70 84 97 53 22
Card 139: 99 96 93  5 31 86 38 83 45 60 | 16 44 30 59 28 29 78 97 85 26 12  5 55 62 34 82 17 49  7 74 91 51 77 15 42
Card 140: 95 59 97 77  9 48 18 36 15 19 |  7  6 28 84 15 17  5 14 77 39 65 38 51 29 59 21 33 95 18 32 55 90 97 36 49
Card 141: 93 47 42  2 74 38  3 60 62 15 | 67 28 46 54 75 51 26 80 82 94 34  9 45 17  2 35 30 16 42 90 68 71 64 70 76
Card 142:  7 59 70 82 42 35 34 41 22 45 | 47 19 82 72 87 89 44 21 22 39 95 43 14 77 88 20 29 41  7 50 65 49 35 15 45
Card 143:  2 75 38 31 94 32 74  7 33 76 | 92 95 27 19 66 57 36 55 77 65 15 61 22  2 99 23 34 33 46 31 74 40 52 48 96
Card 144: 36 69 46 39 45 35 83 48 98 51 | 18  7 61 53 38 25  8 63 27 86 41 88 32 91 85 71 49 95 47  2 24 78 97 64 87
Card 145: 83 59 85 72 62 98 39 99 70 53 |  8 29  9 61 65 69 77 80 90 53 14 76 12 31 48 34  2 97 66 54 27 91 62 94 18
Card 146:  5 37 56 24  7  6 17 44 84 21 | 67 24 88 53 38 31 48 42  9 11  5 72 52 35 98 65 91 85 86 29 37 64  7 12 63
Card 147: 70 68 58 36 56 18 23 76 93  4 | 54 88 30 76 12  3 84 75 63 47 94 19 11 83 43 26 27  2 36 14 99 82 41  8 24
Card 148: 25  3 69 75 27 96 29  4 19 99 | 50 83 21 14 18 78 16 49 86 22 45 15 85 52 13 54 79 10  5 31 82 37 43 72 19
Card 149: 84 14 37 49 22 63  1 15 76 32 | 56 68  4 39 54 36 13 72  8 95  2 90 26 21 61 81 75 53 52 55 18 25 60 29 42
Card 150: 17  7 44 83 13  1 61 68 76 11 | 45 85 30 56 86 31 82 16 35 59 99 32 57 79 69  3 10 39 66 12  9 97 46 14 58
Card 151: 72 23 42 84 75 31 47 80 46 15 | 80 94 86 46 79 90 42 84  7 31 47 24 99 25 23 16 32 97 55 72 67 20 19 15 75
Card 152: 48 75 49 87 35 95 71 54 13 10 | 22  7 31 21 53 45 18 73 42 19 50 78 82 99 93 43 17 66 15 77 29 16 44 34 63
Card 153: 58 25  5 97 63 70 21 28 11 65 | 25 85 38 69 15  5 21 67 83 28 98 63 47 56  7 70 66 97 57 58 11 22 65 96 95
Card 154: 56 88 25 12 31 53 33 46 87 17 | 17 52 83 75 28 53 87 12 62 51 27 34 13 54 46 56 73 10 92  4  6 33 35 24 84
Card 155: 61 33 68 37 44 86  6 73 43 81 | 64 89 27 59 56 25 83 75  5  9 21 93 32 18 77 84 71 99  2 17 88 61  4 34 76
Card 156: 95 20 25 40 81 50 10 97 37 64 | 87 65 67 79 60 76 59 47 62 26 83 20 77 73 38 15 58 19 66 93 88 39 29 24 78
Card 157: 17 13 48 39 83 36 57 56 92 22 | 17 96 22 64 60 52 13 83 57 72 39 48 15 78  6 12 84  4 30 93 36 10 77 56 92
Card 158: 53 64 20 63 74 66 11 67 56 33 | 16 64 68 60 53 23  8 20 73 66 81 33  9 69 63 28 98 10 96 56 77 11 58 74 67
Card 159: 34 22 13 14 42 45 98 48  5 76 | 68 20 83 29 74  2 92  6 25 32  8 89 87 46 71 72 39 33 12 21 11 45 95 36  5
Card 160:  1 41 87 40 65 56 58 35 45 83 | 76 18 45 83 39 52 92 29 24 85 87 40  3 38 35 90 88 70  1 49 58 41 56 65 94
Card 161: 71 23 75 47 35 86 39  8 70 65 | 75 15  8 60 86 20 74 29 31 70 52 39 42 65 78  7  3 33 47 14  4 76 51 49 22
Card 162: 45 87 26 33 85 31 49 23 59 24 | 59 13 49 16  3 63 28 22 83 45 17 62 52 68 25 95 24 65 89 80 26 66 77 99 33
Card 163: 56 77 19 98 36 60 41  5 73 59 | 77 73 54 62 89 59 78 41  5 28 98 35 15 32 19 45 56 21  7 60 87 75 36 38 71
Card 164: 73 14  1 77 23 35 87  3 52 84 | 23 84 14 64 35 52  3 50 33 74 19 30 15  1 73  9 88 72 81 16 80 87 29 97 69
Card 165: 68 65 89 28 41 12 29 20 90 99 | 41  3 67 43 12 23 54 25 47 68 92 88  9 16 93 14 89 60 99 69 81 95 50 84 13
Card 166: 39 79 38 86 52 41 58 26 54 11 |  7 36 80 52 40  4 74 30 88 79 90 26 47 61 55 75 93 95 97  1  8 44 56 25 71
Card 167: 43 25 19 87 42 32 70 93 35 57 | 85 23 19 16 32 60 22 53 28 89 42 41 97 50 47 24 46 94 57 27 49 13 40 34 90
Card 168: 74 19 48 42 65 73 59  9 39 56 | 60 48 65 39 66  9 85 18 15 73 13  1 29 83 74 86 76 63 91 50 68 77  2 47 61
Card 169: 63 93  8 94 25 98 26 96 42 60 | 31 21  5 13 72 45 54 40 99 27 92 62 36 50  4 94 88 28 68 32  3 39 35 79 23
Card 170: 37 14 91 39 68 72 94 34 29 82 | 61 69 71  2 42 47 22 33 59  9 38 92 65 73 58 95 32  3 88 63  7 24 66 41 26
Card 171: 74 82 60 17 88 66 63 15 10  5 | 81 83 76 63 16 89 72 46  9 26 90 95 92 97 59 85  4 70 41 78 12 10 79 54 51
Card 172:  3 26 94 30 43 47 16 48 55 31 | 95 92 91 84 39 64 90 56 18 28 51 12 32 98 21 43 13 14 15  7 71 23 83 42 41
Card 173: 62 61 48 37 58 72  5 84 73 12 |  7 92 64 44 24 97 86 27 75 79 52 18 65 17 11 33 91 14 25 39 20 50 38 29 89
Card 174: 57 86 12 16 19 11 63 53 77 24 | 17 91 79 20 50 99 37  9 85 66 42 23 72 18 46 73 55 38 82 75 80 21 89 22 47
Card 175: 25 20  9 15  6 92 40 93 68 63 |  4  2 34 65 50 68  9  6 93 13 29 25 15 92 20 16 67 63 79 76 53 60 40 55 31
Card 176: 43 48 37 98 50 44 74  4 58 28 | 71 50 28 22 64 54 65 12 98 37 70 53 84 94  4 48 44 66 68 43 58 29 35 74 18
Card 177: 75 31 15 80 85 14  2 26 71 10 | 92 87  4 55 11 14 81 89 71 80 98 37 13 95 35  2 85 75 31  3 26 10 18 15 38
Card 178: 96 97 17  9 91 34 44 89 46 20 | 74 96 17 44 16 37 91 87 63 36 20 47 34 89 46 97 73 82  6  1 90  2 51 54  9
Card 179: 89 96 72 46  6 98 63 81 93 11 | 95 79 65 30 54 43 98 72 83 34 90 10 94 93 82 64 68 66  9  1 70 40 81 48 53
Card 180: 48 78 66 98 37 85 12 99 28 50 | 28 71 53 34 50 31 36 48 33 73 37  4 12 96 99 94 25 70  3 38 90 80 86 51 85
Card 181: 91 99 31 16 35 15 81 77 90 86 | 62 47 82  2 60 49 65 52 53 64 69 23 59 50 72 74 63  7 12 19 26 31 57 87 44
Card 182: 17 33 69 25 47 70 20 28 10 35 | 57 18 20 25 67 93 35 17 91 32  1 69 33 39 66 19 76 54 10  8 41 47 74 28 58
Card 183: 59 99 94 23  5 57 79 27 46 73 | 38 47 60 44 73 94 68 46 69 49 54 42 79 13 29  4 91 27 76 80 39 75 66 93 48
Card 184: 74 66 82 96 45 98 37 95 41 20 | 31 37 48 25 70 43 84 91 95 49 94  6 21 30 34 18 58 85 19 53 40 32 56  1 64
Card 185: 80 64 51 75 56 38 88 22 58 33 | 32 40 73 95 34 69 22 88 74 38 61 86 43 21 29 53 33 92  4 55 14 81 79 17 56
Card 186: 17 97 70 51 67  8 88 38 99 69 | 65 22 59 77 57 33 44 19 10 83 86  8  3 25 76 74 53 69 79 11 28 39 21 18 23
Card 187:  2 77 22  9 91 89 36 95  5 32 | 36 46 24 32  4 30 42  7 73 26 88 71 53 44 14 37 62  3 28 87 48 47 85 64  9
Card 188: 23 47 57 84 54  7 17 52 63 76 | 11  9 46 88 84 67 38 47  6 95 60 42  1 81 41 54 28 44  2 76  7 37 24 86 32
Card 189: 38 56 77 87 36 91 20 35 31 64 |  3 94 68 53 66 57 12 77 73 36 76  7 78 31 82 22 48 35 96 50 32 49 41 91 87
Card 190: 59 14 85 95 97 82 16 37 38 12 | 89 88 44  7 87 21 25 41 27 91 54  3 18 53 26 47 51 84 62 22 23 63  9  4 29
Card 191: 28  7  5 24 58 15 17 25 41 51 | 39 59 47 27 64 50  1 65 61 97  6 41 54 25 43 91 10 29 32 58 15 69  3 24 96
Card 192: 67 37 43 30  6  1 13 96 52  2 | 79 57 49 91 47 10 51 14 45 48 17 85 44 86 76 97 21 69 78 90 56 28 74 11  8
Card 193:  6 97 31 70 50 91  9 51 75 89 | 11 67 64 52 65 71  5 81 49 95 82  7 77 88 96 18 33 80 14 86 15 25 76 34 68
Card 194:  2 42 27 84 41 17  7 31 11  1 | 35  6 47 39 16 95 21 45 12 34 62 56 85 10 58 63 57  8 27 15 43 22 46 66 81
Card 195: 92 19 39 62 30 17 26  8 52 20 | 65 28 71 57 82 67 14 32  6  2  4 87 64 18 61 98 44 54 25  5 93 47 75 83 76
Card 196: 81 20 71 17 83 41 74 87 70 90 |  6 86 43 44 49 88 80 19 99 10 11 26 16 64 40 31 60 55  1 75 54 73 58 42 45
Card 197: 80 78 57 75 83 33 71 68 50 43 | 98  1 38 97 93 83 89 68 90 70 78 75 51 57 43 44 33 50 84 76 64 56 80 59 71
Card 198: 72 50 52 53  3 93 59 69 87 75 | 55  4 34 69 73 98 49 64 60 75 52  3 72 87 28 50 53 84 32 99 37 31 91 45 97
Card 199: 40 59 64 91 14 53 65 74 57 92 | 20 40 94 85 65 93  2 67 57 12 54 42 27 44 74  9 78 64 16 81 76 47  6 14 39
Card 200: 40 37 95 97 92 10 42 43 29  8 | 40 81 67 35 45 92 90 29 65 97 87 78 66 93 37 19 95  6 88 28 42 22  8 43 98
Card 201: 59 58 65 35 95 18 36 27 31  8 | 37 58 54  3 59 78 34 93 94 68 16 55 13 42 77  8 53 43 36 82 97 79 89 56 51
Card 202: 29 79  9 34 18 57  1 27 78 94 | 55 86 98 53 73 79 13 51 29 36 18 11 35  1 44 78 82 33 91 94  9 34 58 57 27
Card 203: 79 38 40 19 10 29 12 33 61 55 | 79 28 33 21 93 91 61 35 82  4 14 10 81 23 19 55 12 11 62 65 29 77 38 40 43
Card 204: 16 52 48 96 94 97 65 77 33 36 | 19 23 39 33 25 97 65 73 48 10 47 52 16 43 11 14 96 13 60 62 36 94 64 78 77
Card 205: 86 53 93  1 63 94 21 64 11 52 | 16 33 66 74 68 43 63 49 84 96 62 21 30 75 24 39 20 54 86 93 52 11 77 61 41
Card 206: 82 70 30 12 25 55 29 35  5 52 | 56 61 67 53 22 19 91 52 62 24 72 41 66 25 38 11  9 88 79 32 47 21 99 20 18
Card 207: 92 94 37 87 15  2 98 13 78 88 | 64 58 87 46 88  2 13 20 16 37 19 77 82 35 78 98 85 76 52 27 92 48 15 94 57
Card 208: 37 68 13 27 22 87 40 58 69 52 |  1 93 60 45 65 63 18 14 19 58 44 79 42 52 55 13 59 46 20 81 97 49 23 80 48
Card 209: 48 87  4 95 74 15 59 26 41 35 | 65 39 95 76 83 51  6  9 19 62 24 86 12 58 14 71 36 37 40 32 43 67 17 72 88
Card 210: 31 60 33  7 49 91 62 13 19 12 | 18 40 43 48 17 78 69 60 88 86 98 47 20  5  1 58 19 66  2 35  7 31 33 72 28
Card 211: 59 30 29 75 32 46 51 83 45 55 | 32 62 91 12  7  4 83 42 56 30  5 31 97 58 34 73 98 61 68 37  8 29 26 88 44
Card 212: 69 26 50 79 44 24 21  6 42 57 | 71 41 12 73 57 81 97  6 62 98 24 14 18 64  4 54  3 44 76  8 42 90 67 55 17
Card 213: 66 20 63 16 23  9 31 69 67 50 | 94 20 24 77 15 18  6 59 23 79 17 30 44 42 11 27 53 50 12 47 82  7 90 95 98
Card 214: 78 31  2 98 24 89 44  8 28 14 | 82  2 79 19 51 30 97 63  5 98 35 84 69 77 78 89 13 44 65 16 71 96  4 33 32
Card 215: 51 11 37 77  2 20 62 75 58 89 | 78 20 24 81 54 49 43 74 15  8 40 48  3 12 79 59 84 52  7 70 22  6 23 63 38
Card 216: 13 15 69  5 57 20 77 45 98 12 |  9 42 49 96 46 23 84 77 74 31 75 15 47  6 83 94 35  4 30 87 85 86 10 38  1
Card 217: 33 92 13  9 53 41 74 86  8 50 | 78 76 73 17 99 39 48 98 89 62  7 11 10 43 49 59 61 75 55 28 21 27 67 70 35
Card 218: 91 50 80 42 23 76 63 81 29 39 | 57 26  2  3 21 43 52 34 70 91 30  8 12 24 99 94 97 83  9 74 19 40 49 78 62
Card 219: 63 29 45 94 49 57 24 40 71 99 | 86 37 23 13 67 19 36 69 22 48 20 10 44 59  1 16 52 43  4  2 15 85 74 33 34
Card 220:  7 42 25 84 54 11 88  6 55 73 | 86  5 82 70 49 80 21 36 16 34 17 77 44 74 61  1  4 39 45 47  3 81 57 60 24`;

function advent(string) {
  let cards = string.split("\n").map((line) => {
    let [cardNumber, hnums, wnums] = line
      .split(/\:|\|/)
      .map((ns) => ns.match(/\d+/g).map((n) => Number(n)));

    return {
      cardNumber: cardNumber[0],
      wnums: wnums,
      hnums: hnums,
      score: hnums.reduce(
        (score, hnum) => Number(wnums.includes(hnum)) + score,
        0
      ),
    };
  });
  //console.log(cards)
  // given a set of cards, store the length of the cards, for each card, until you reach the score of the card, push onto the set of cards the following card. once you have done so for all cards, check the lenght of the array. if it does not match the initial length, repeat this proccess.

  function recur(cards, start) {
    let initCount = cards.length;
    for (let i = start; i < cards.length; i++) {
        for (let j = 0; j < cards[i].score; j++) {
            cards.push(cards[cards[i].cardNumber + j]);
          }
        }
        //return initCount != cards.length ? recur(cards, initCount) : cards;
        return cards;
    }
  recur(cards, 0);
  return cards.length;
}
console.log(advent(data));
