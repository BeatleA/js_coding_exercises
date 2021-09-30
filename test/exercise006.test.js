const {
    sumMultiples,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is required");

        expect(() => {
            sumMultiples(4);
        }).toThrow("an Array is required");
    });

    test("returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("works with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test("returns 0 if there are no mutiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe("createMatrix", () => {
    test("throws an error if n is not an Integer >= 0", () => {
        expect(() => {
            createMatrix();
        }).toThrow("n is required");

        expect(() => {
            createMatrix("foo");
        }).toThrow("Integer number n is required");

        expect(() => {
            createMatrix(true);
        }).toThrow("Integer number n is required");

        expect(() => {
            createMatrix(-1);
        }).toThrow("n >= 0 is required");

        expect(() => {
            createMatrix(-1, "bar");
        }).toThrow("n >= 0 is required");
    });

    test("throws an error if fill is not passed", () => {
        expect(() => {
            createMatrix(3);
        }).toThrow("fill is required");
    });

    test("returns an empty array when passed 0", () => {
        const result = createMatrix(0, "foo");
        const expected = [];
        expect(result).toEqual(expected);
    });

    test("returns a matrix of 1 * 1 when passed 1", () => {
        const result = createMatrix(1, "foo");
        const expected = [["foo"]];
        expect(result).toEqual(expected);
    });

    test("returns a matrix of x * x when passed x", () => {
        const result = createMatrix(3, "foo");
        const expected =
            [
                ["foo", "foo", "foo"],
                ["foo", "foo", "foo"],
                ["foo", "foo", "foo"]
            ]
        expect(result).toEqual(expected);

        const result2 = createMatrix(5, "bar");
        const expected2 =
            [
                ["bar", "bar", "bar", "bar", "bar"],
                ["bar", "bar", "bar", "bar", "bar"],
                ["bar", "bar", "bar", "bar", "bar"],
                ["bar", "bar", "bar", "bar", "bar"],
                ["bar", "bar", "bar", "bar", "bar"]
            ]
        expect(result2).toEqual(expected2);
    });
});

describe("areWeCovered", () => {
    test("throws an error if not passed an array", () => {
        expect(() => {
            areWeCovered();
        }).toThrow("staff is required");

        expect(() => {
            areWeCovered("foo");
        }).toThrow("(Array, String) is required");

        expect(() => {
            areWeCovered(4);
        }).toThrow("(Array, String) is required");
    });

    test("throws an error if not passed a string", () => {
        expect(() => {
            areWeCovered([]);
        }).toThrow("day is required");

        expect(() => {
            areWeCovered([], 1);
        }).toThrow("(Array, String) is required");

        expect(() => {
            areWeCovered([], true);
        }).toThrow("(Array, String) is required");
    });

    test("returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });

    test("returns false if there are staff but < 3 scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "paul", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "sally", rota: ["Monday", "Tuesday", "Thursday"] },
            { name: "jess", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
        expect(areWeCovered(staff, "Thursday")).toBe(false);
        expect(areWeCovered(staff, "Friday")).toBe(false);
        expect(areWeCovered(staff, "Saturday")).toBe(false);
        expect(areWeCovered(staff, "Sunday")).toBe(false);

    });

    test("returns true if there are 3 members of staff scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Thursday"] },
            { name: "sally", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Wednesday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
    });

    test("returns true if there are > 3 members of staff scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday"] },
            { name: "sally", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
    });
});