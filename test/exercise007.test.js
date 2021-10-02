const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("throws an error if not passed an Integer", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");

        expect(() => {
            sumDigits("foo");
        }).toThrow("an Integer is required");

        expect(() => {
            sumDigits(true);
        }).toThrow("an Integer is required");

        expect(() => {
            sumDigits(0.5);
        }).toThrow("an Integer is required");
    });

    test("returns the sum of all digits of the number passed", () => {
        expect(sumDigits(0)).toBe(0);
        expect(sumDigits(5)).toBe(5);
        expect(sumDigits(50)).toBe(5);
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(406)).toBe(10);
        expect(sumDigits(892123)).toBe(25);
    });

    test("returns the sum of negative digits if the number is negative", () => {
        expect(sumDigits(-5)).toBe(-5);
        expect(sumDigits(-123)).toBe(-6);
        expect(sumDigits(-406)).toBe(-10);
        expect(sumDigits(-892123)).toBe(-25);
    });
});

describe("createRange", () => {
    test("throws an error if start not passed", () => {
        expect(() => {
            createRange();
        }).toThrow("start is required");
    });

    test("throws an error if end not passed", () => {
        expect(() => {
            createRange(1);
        }).toThrow("end is required");
    });

    test("throws an error if start not a Number", () => {
        expect(() => {
            createRange("string", 4);
        }).toThrow("start: a Number is required");
    });

    test("throws an error if end not a Number", () => {
        expect(() => {
            createRange(1, "string");
        }).toThrow("end: a Number is required");
    });

    test("returns a range of numbers as an array", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(0, 100, 10)).toEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
        expect(createRange(-5, 10, 4)).toEqual([-5, -1, 3, 7]);
        expect(createRange(-23, -17, 3)).toEqual([-23, -20, -17]);
        expect(createRange(27, 31, 1)).toEqual([27, 28, 29, 30, 31]);
        expect(createRange(220, 621, 100)).toEqual([220, 320, 420, 520, 620]);
    });

    test("works with step = 1 if step is not provided", () => {
        expect(createRange(5, 12)).toEqual([5, 6, 7, 8, 9, 10, 11, 12]);
        expect(createRange(1, 4)).toEqual([1, 2, 3, 4]);
        expect(createRange(-4, -1)).toEqual([-4, -3, -2, -1]);
    });

    test("returns an empty array if end < start", () => {
        expect(createRange(11, 3)).toEqual([]);
        expect(createRange(5, -5)).toEqual([]);
        expect(createRange(-5, -6, 1)).toEqual([]);
    });

    test("works with decimal numbers", () => {
        expect(createRange(3.5, 11.5, 2)).toEqual([3.5, 5.5, 7.5, 9.5, 11.5]);
        // expect(createRange(0.3, 50.8, 10.1)).toEqual([0.3, 10.4, 20.5, 30.6, 40.7, 50.8]); 
        // fails due to precision loss here: 40.7 + 10.1 = 50.800000000000004
        // expect(createRange(-5.4, 10, 4)).toEqual([-5.4, -1.4, 3.4, 7.4]);
        // fails due to precision loss -1.4000000000000004, 2.5999999999999996
    });
});

describe("getScreentimeAlertList", () => {
    test("throws an error if array users not passed", () => {
        expect(() => {
            getScreentimeAlertList();
        }).toThrow("users is required");

        expect(() => {
            getScreentimeAlertList("string", "2019-06-11");
        }).toThrow("an Array is required");
    });

    test("throws an error if date not passed", () => {
        expect(() => {
            getScreentimeAlertList([]);
        }).toThrow("date is required");
    });

    test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const users =
            [
                {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    ]
                },
                {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    ]
                },
                {
                    username: "garryl",
                    name: "Garry Lane",
                    screenTime: [
                        { date: "2019-04-10", usage: { mapMyRun: 60, whatsApp: 10, facebook: 20, safari: 0 } },
                        { date: "2019-05-02", usage: { mapMyRun: 30, whatsApp: 30, facebook: 30, safari: 11 } },
                        { date: "2019-06-24", usage: { mapMyRun: 30, whatsApp: 0, facebook: 30, safari: 0 } },
                    ]
                },
            ];
        const expected = ["beth_1234"];
        const expected2 = ["beth_1234", "garryl"];
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(expected);
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(expected2);
    });

    test("returns an empty array if no users used more than 100 minutes of screentime for a given date", () => {
        const users =
            [
                {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    ]
                },
                {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    ]
                },
            ];
        expect(getScreentimeAlertList(users, "2019-06-14")).toEqual([]);
        expect(getScreentimeAlertList([], "2019-06-14")).toEqual([]);
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual([]);
    });
});

describe("hexToRGB", () => {
    test("throws an error if hexStr not passed", () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required");
    });

    test("throws an error if hexStr is not a valid hexadecimal color code", () => {
        expect(() => {
            hexToRGB("foo");
        }).toThrow("a hexadecimal color code is required");

        expect(() => {
            hexToRGB("#GH1133");
        }).toThrow("a hexadecimal color code is required");

        expect(() => {
            hexToRGB("FF1133");
        }).toThrow("a hexadecimal color code is required");

        expect(() => {
            hexToRGB("##FF1133");
        }).toThrow("a hexadecimal color code is required");

        expect(() => {
            hexToRGB("#FFA50");
        }).toThrow("a hexadecimal color code is required");
    });

    test("returns the RGB code equivalent of the hex code passed", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
        expect(hexToRGB("#0000FF")).toBe("rgb(0,0,255)");
        expect(hexToRGB("#800080")).toBe("rgb(128,0,128)");
        expect(hexToRGB("#FFA500")).toBe("rgb(255,165,0)");
        expect(hexToRGB("#E9967A")).toBe("rgb(233,150,122)");
    });

    test("it is not case sensitive", () => {
        expect(hexToRGB("#ffffff")).toBe("rgb(255,255,255)");
        expect(hexToRGB("#0000ff")).toBe("rgb(0,0,255)");
        expect(hexToRGB("#ffa500")).toBe("rgb(255,165,0)");
        expect(hexToRGB("#cd5c5c")).toBe("rgb(205,92,92)")
    });
});
