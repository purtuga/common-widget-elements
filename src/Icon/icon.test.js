customElements.whenDefined("i-con").then(() => {
    const Icon = customElements.get("i-con");

    describe("Icon Element", function () {
        it('should be defined', function () {
            expect(Icon).to.not.be.undefined;
        });


    });
});
