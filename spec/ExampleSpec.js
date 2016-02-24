describe("An example", function() {
    it("should have the correct name", function() {
        var e = new Example('Test');
        expect(e.name).toBe('Test');
    });
});