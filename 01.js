const chai = require("chai");

// https://adventofcode.com/2020
// npx mocha --watch -- *.js

describe("01", () => {
  const input01 = [
    2004,
    1671,
    1678,
    1304,
    1242,
    1882,
    1605,
    1034,
    1883,
    1589,
    1881,
    1546,
    1713,
    1218,
    1982,
    1395,
    1277,
    1417,
    1497,
    1499,
    1847,
    1989,
    1172,
    1684,
    1243,
    1843,
    1661,
    1662,
    1421,
    1790,
    1344,
    1458,
    1074,
    1809,
    1990,
    1369,
    1386,
    1736,
    1972,
    1634,
    1229,
    1123,
    1870,
    1595,
    1934,
    1399,
    1732,
    1545,
    1208,
    368,
    1907,
    1143,
    443,
    1929,
    1965,
    1872,
    1738,
    1967,
    997,
    1473,
    1041,
    1991,
    1868,
    1180,
    1409,
    1379,
    1568,
    1163,
    1869,
    1391,
    1956,
    1249,
    1505,
    351,
    2001,
    462,
    1219,
    1731,
    1802,
    1798,
    1626,
    1438,
    1099,
    1477,
    1980,
    1708,
    1666,
    1066,
    1121,
    1359,
    1426,
    1734,
    1768,
    1836,
    1453,
    923,
    1660,
    1878,
    1522,
    1024,
    1429,
    232,
    1952,
    1730,
    1763,
    1981,
    1388,
    1337,
    1317,
    1922,
    1044,
    1999,
    1341,
    1178,
    1524,
    1185,
    1257,
    1256,
    1061,
    1262,
    1022,
    1778,
    1917,
    1205,
    1272,
    1842,
    1533,
    1194,
    1746,
    1691,
    1617,
    1667,
    1940,
    1171,
    1792,
    1773,
    1411,
    1902,
    1859,
    1978,
    1764,
    1482,
    1276,
    735,
    1716,
    1915,
    1675,
    1126,
    1830,
    1227,
    1299,
    1535,
    1700,
    1658,
    1771,
    1823,
    1055,
    1602,
    1590,
    1983,
    1885,
    1735,
    103,
    1766,
    14,
    1486,
    1939,
    1525,
    1916,
    1279,
    544,
    1406,
    1674,
    1948,
    1971,
    1651,
    1715,
    1943,
    1784,
    2008,
    1800,
    1720,
    1557,
    1467,
    1371,
    1637,
    1345,
    1924,
    1565,
    1976,
    1827,
    1890,
    1848,
    1465,
    1573,
    1231,
    1310,
    1754,
    1569,
    1532,
  ];

  const inMap = input01.reduce((acc, i) => acc.set(i, ""), new Map());
  const isInInput = (n) => inMap.get(n) != null;

  it("01-1", () => {
    const remindersA = input01.map((i) => 2020 - i);

    const b = remindersA.find(isInInput);
    const a = 2020 - b;

    console.log("a=", a);
    console.log("b=", b);

    chai.expect(b).to.be.deep.equal(103);
    chai.expect(a).to.be.deep.equal(1917);
    chai.expect(a + b).to.be.deep.equal(2020);
    chai.expect(a * b).to.be.deep.equal(197451);
  });

  it("01-2", () => {
    const remindersA = input01.map((i) => 2020 - i);

    for (let i = 0; i < remindersA.length; i++) {
      const reminder = remindersA[i];
      const a = 2020 - reminder;

      const possibleB = input01.filter((i) => i < reminder);

      const b = possibleB.find((p) => isInInput(p) && isInInput(reminder - p));

      if (b != null) {
        const c = reminder - b;
        console.log("a=", a);
        console.log("b=", b);
        console.log("c=", c);

        chai.expect(a + b + c).to.be.deep.equal(2020);
        chai.expect(a * b * c).to.be.deep.equal(138233720);
      }
    }
  });
});
