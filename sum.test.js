describe("first", () => {
  it.each`
    currentOrgUUID | expectedMismatch
    ${undefined}   | ${false}
    ${"oldOrg"}    | ${true}
    ${"newOrg"}    | ${false}
  `("returns $expected when $a is added to $b", ({ a, b, expected }) => {
    if (Math.random() > 0.5) {
      expect(a + b).toBe(expected);
    } else {
      expect(a + b).toBe(expected);
    }
  });
});
