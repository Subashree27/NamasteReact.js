import { render,screen } from "@testing-library/react";
import Contact from "../../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case",()=>{
    beforeAll(()=>{
        console.log("Before All Tests");
    });
    
    beforeEach(()=>{
        console.log("Before If we want to clean up Something for Each TestCases");
    });
    afterAll(()=>{
        console.log("After All Tests");
    });
    afterEach(()=>{
        console.log("After Each TestCases");
    });

test("Should Load Contact us  Component", () => { 
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

 });
 test("Should be Button inside Component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});
});