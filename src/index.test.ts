import { describe, expect, test } from '@jest/globals';
import MSX from './index';

describe("MSX class", () => {
    test("should parse a human-readable string into a number of milliseconds", () => {
        expect(MSX.parse("1ms")).toBe(1.00);
        expect(MSX.parse("1s")).toBe(1000);
        expect(MSX.parse("1m")).toBe(60000);
        expect(MSX.parse("1h")).toBe(3600000);
        expect(MSX.parse("1d")).toBe(86400000);
        expect(MSX.parse("1w")).toBe(604800000);
        expect(MSX.parse("1y")).toBe(31557600000);
        expect(MSX.stringify(1)).toBe("1.00ms");
        expect(MSX.stringify(1000)).toBe("1000.00ms");
        expect(MSX.stringify(60000)).toBe("60000.00ms");
        expect(MSX.stringify(3600000)).toBe("3600000.00ms");
        expect(MSX.stringify(86400000)).toBe("86400000.00ms");
    })
})