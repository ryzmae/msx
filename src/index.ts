const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const y = d * 365.25;

type Unit = "ms" | "s" | "m" | "h" | "d" | "w" | "y";

export type StringValue = `${number}${Unit}`;

interface Options {
  long?: boolean;
}

const UNIT_VALUES: Record<Unit, number> = {
  ms: 1,
  s,
  m,
  h,
  d,
  w,
  y,
};

const SHORT_UNITS: Unit[] = ["ms", "s", "m", "h", "d", "w", "y"];
const LONG_UNITS = [
  "millisecond",
  "second",
  "minute",
  "hour",
  "day",
  "week",
  "year",
];

export default class MSX {
  /**
   * Parse a human-readable string into a number of milliseconds
   * @param value - string value
   * @returns - number of milliseconds
   */
  static parse(value: string): number {
    const match = value.match(/^(\d+)(ms|s|m|h|d|w|y)$/);
    if (!match) {
      throw new Error("Invalid value");
    }
    return parseInt(match[1]) * UNIT_VALUES[match[2] as Unit];
  }

  /**
   * Stringify a number of milliseconds into a human-readable string
   * @param value - number of milliseconds
   * @param options - options for stringifying the value
   * @returns - stringified value
   */
  static stringify(value: number, options: Options = {}): StringValue {
    const { long = false } = options;
    const units = long ? LONG_UNITS : SHORT_UNITS;

    for (const unit of SHORT_UNITS) {
      const unitValue = UNIT_VALUES[unit];
      if (value >= unitValue) {
        const unitIndex = SHORT_UNITS.indexOf(unit);
        const valueString = (value / unitValue).toFixed(2);
        return `${valueString}${units[unitIndex]}` as StringValue;
      }
    }

    return `${value}ms` as StringValue; // fallback to ms if value is smaller than any other unit
  }
}
