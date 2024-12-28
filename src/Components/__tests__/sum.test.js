import { sum } from "../sum"; 

 test("Sum Function should Calculate the sum of Two numbers",()=>{
    const result = sum (3,4);

    expect(result).toBe(7);
     
});