
describe("Icon Element", function () {
    let Icon;
    const whenDefined = customElements.whenDefined("i-con").then(() => {
        Icon = customElements.get("i-con");

        // Setup icon test source
        const iconTemplate = document.createElement("template");
        iconTemplate.innerHTML = `<i class="test-icon"></i>`;

        Icon.sources.test = {
            icon: iconTemplate,
            getIcon(props) {
                return Promise.resolve().then(() => {
                    // Icon (<i>) return will have an attribute of either code or name on it.
                    if (props.code === "123" || props.name === "edit") {
                        const response = document.importNode(this.icon.content, true).firstChild;
                        response.setAttribute(props.code ? "code" : "name", props.code || props.name);
                        return response;
                    }
                })
            }
        };
    });
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms || 0));
    const createIcon = (from, name, code, size) => {
        let icon = document.createElement("template");
        let attributes = "";

        if (from) {
            attributes += ` from="${ from }"`;
        }
        if (name) {
            attributes += ` name="${ name }"`;
        }
        if (code) {
            attributes += ` code="${ code }"`;
        }
        if (size) {
            attributes += ` size="${ size }"`;
        }

        icon.innerHTML = `<i-con${attributes}></i-con>`;
        return document.importNode(icon.content, true).firstChild;
    };


    beforeEach(function () {
        this.sandbox = document.createElement("div");
        this.sandbox.setAttribute("style", "display: absolute: bottom: 10px; right:10px;");
        document.body.appendChild(this.sandbox);
    });

    afterEach(function () {
        if (this.sandbox && this.sandbox.parentNode) {
            this.sandbox.parentNode.removeChild(this.sandbox);
        }
    });

    describe("Base", function () {
        it('should be defined', function () {
            return whenDefined.then(() => {
                expect(Icon).to.not.be.undefined;
            });
        });

        it('should have tagName', function () {
            whenDefined.then(() => {
                expect(Icon.tagName).to.equal("i-con");
            });
        });

        it('should have static sources object', function () {
            whenDefined.then(() => {
                expect(Icon)
                    .to.have.property("sources")
                    .and.be.an("object");
            });
        });

        it("should have static fetchSvg() method", function () {
            whenDefined.then(() => {
                expect(Icon)
                    .to.have.property("fetchSvg")
                    .and.be.a("function");
            });
        });

        it("should have static setupFont() method", function () {
            whenDefined.then(() => {
                expect(Icon)
                    .to.have.property("fetchSvg")
                    .and.to.be.a("function");
            });
        });

        it("should have static fromCodePoint() method", function () {
            whenDefined.then(() => {
                expect(Icon)
                    .to.have.property("fromCodePoint")
                    .and.to.be.a("function");
            });
        });
    });

    describe("'size' Attribute", function () {
        beforeEach(function () {
            this.setupIconWithSize = function(size) {
                const icon = createIcon(null, null, null, size);
                this.sandbox.appendChild(icon);
                return icon;
            }
        });

        it('should support xs size', function () {
            whenDefined.then(() => {
                const nextSizeIcon = this.setupIconWithSize("sm");
                const icon = this.setupIconWithSize("xs");
                return delay().then(() => {
                    expect(icon.clientWidth < nextSizeIcon.clientWidth).to.be.true;
                });
            });
        });

        it("should support sm size", function () {
            whenDefined.then(() => {
                const nextSizeIcon = this.setupIconWithSize("md");
                const icon = this.setupIconWithSize("sm");
                return delay().then(() => {
                    expect(icon.clientWidth < nextSizeIcon.clientWidth).to.be.true;
                });
            });
        });

        it("should support md size", function () {
            whenDefined.then(() => {
                const nextSizeIcon = this.setupIconWithSize("lg");
                const icon = this.setupIconWithSize("md");
                return delay().then(() => {
                    expect(icon.clientWidth < nextSizeIcon.clientWidth).to.be.true;
                });
            });
        });

        it("should support lg size", function () {
            whenDefined.then(() => {
                const nextSizeIcon = this.setupIconWithSize("xl");
                const icon = this.setupIconWithSize("lg");
                return delay().then(() => {
                    expect(icon.clientWidth < nextSizeIcon.clientWidth).to.be.true;
                });
            });
        });

        it("should support xl size", function () {
            whenDefined.then(() => {
                const prevSizeIcon = this.setupIconWithSize("lg");
                const icon = this.setupIconWithSize("xl");
                return delay().then(() => {
                    expect(icon.clientWidth > prevSizeIcon.clientWidth).to.be.true;
                });
            });
        });
    });

    describe("'from' Attribute", function () {
        beforeEach(function () {
            this.setupIcon = function (from, name) {
                const icon = createIcon(from, name);
                this.sandbox.appendChild(icon);
                return icon;
            };
        });

        it("should do nothing if 'from' is not set", function () {
            return whenDefined.then(() => {
                const icon = this.setupIcon();
                return delay().then(() => {
                    expect(icon.$("i.test-icon")).to.be.null;
                });
            });
        });

        it("should do nothing if 'from' value is unknown", function () {
            return whenDefined.then(() => {
                const icon = this.setupIcon("invalid-from-source");
                return delay().then(() => {
                    expect(icon.$("i.test-icon")).to.be.null;
                });
            });
        });
    });

    describe("'name' Attribute", function () {
        beforeEach(function () {
            this.setupIcon = function (from, name) {
                const icon = createIcon(from, name);
                this.sandbox.appendChild(icon);
                return icon;
            };
        });

        it("should do nothing if not set", function () {
            return whenDefined.then(() => {
                const icon = this.setupIcon("test");
                return delay().then(() => {
                    expect(icon.$("i.test-icon")).to.be.null;
                });
            });
        });

        it("should display icon if set", function () {
            return whenDefined.then(() => {
                const icon = this.setupIcon("test", "edit");
                return delay().then(() => {
                    expect(icon.$("i.test-icon")).to.not.be.null;
                    expect(icon.$("i.test-icon").hasAttribute("name")).to.be.true;
                });
            });
        });

        it("should do nothing if invalid value is used", function () {
            return whenDefined.then(() => {
                const icon = this.setupIcon("test", "invalid-value");
                return delay().then(() => {
                    expect(icon.$("i.test-icon")).to.be.null;
                });
            });
        });
    });

    describe("'code' Attribute", function () {
        beforeEach(function () {
            this.setupIcon = function (from, name, code) {
                const icon = createIcon(from, name, code);
                this.sandbox.appendChild(icon);
                return icon;
            };
        });

        it("should display icon if set", function () {
            return whenDefined.then(() => {
                const icon = this.setupIcon("test", null, "123");
                return delay().then(() => {
                    expect(icon.$("i.test-icon")).to.not.be.null;
                    expect(icon.$("i.test-icon", "Icon does not seem to have used `code`").hasAttribute("code")).to.be.true;
                });
            });
        });

        it("should do nothing if invalid value", function () {
            return whenDefined.then(() => {
                const icon = this.setupIcon("test", null, "invalid-123");
                return delay().then(() => {
                    expect(icon.$("i.test-icon")).to.be.null;
                });
            });
        });

        it("should use code ahead of name", function () {
            return whenDefined.then(() => {
                const icon = this.setupIcon("test", "edit", "invalid-123");
                return delay().then(() => {
                    expect(icon.$("i.test-icon")).to.not.be.null;
                    expect(icon.$("i.test-icon").hasAttribute("code"), "Icon was NOT served using `code`").to.be.true;
                    expect(icon.$("i.test-icon").hasAttribute("name"), "Icon was served via `name`").to.be.false;
                });
            });
        });
    });
});
