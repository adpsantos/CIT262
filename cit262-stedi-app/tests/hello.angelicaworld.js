import hello from "../utils/hello.js";

it("Should say Angelica",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Angelica");
})