const AddInternelTransfer = require("./AddInternelTransfer")
// @ponicode
describe("setselectedTransferWard", () => {
    let inst

    beforeEach(() => {
        inst = new AddInternelTransfer.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.setselectedTransferWard({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.setselectedTransferWard({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.setselectedTransferWard({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.setselectedTransferWard(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setselectedTreatment", () => {
    let inst

    beforeEach(() => {
        inst = new AddInternelTransfer.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.setselectedTreatment({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.setselectedTreatment({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.setselectedTreatment({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.setselectedTreatment(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setselectedDate", () => {
    let inst

    beforeEach(() => {
        inst = new AddInternelTransfer.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.setselectedDate({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.setselectedDate({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.setselectedDate({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.setselectedDate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setTransferData", () => {
    let inst

    beforeEach(() => {
        inst = new AddInternelTransfer.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.setTransferData({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.setTransferData({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.setTransferData({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.setTransferData(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("submitTransferData", () => {
    let inst

    beforeEach(() => {
        inst = new AddInternelTransfer.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.submitTransferData()
        }
    
        expect(callFunction).not.toThrow()
    })
})
