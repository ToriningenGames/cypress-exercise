describe("Test test", () => {
	it("does not blow up", () => {
		expect(true).to.equal(true);
	});
});

describe("Example server", () => {
	it("can be accessed", () => {
		cy.visit("/");
	});
});

