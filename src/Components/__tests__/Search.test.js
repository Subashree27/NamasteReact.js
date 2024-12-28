import {fireEvent, render,screen} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should render the Body Component with Search",async()=>{
    await act(async()=>
    render(
    <BrowserRouter>
       <Body/>
    </BrowserRouter>
    )
     );

     const cardsBeforeSearch = screen.getAllByTestId("resCard");
     expect(cardsBeforeSearch.length).toBe(8);
     
     const cardsAfterSearch = screen.getAllByTestId("resCard");
     expect(cardsAfterSearch.length).toBe(8);

     const searchBtn= screen.getByRole("button",{name:"Search"});
     const searchInput= screen.getByTestId("searchInput");
     fireEvent.change(searchInput,{target:{value:"Paratha"}}) 
     fireEvent.click(searchBtn)
    //  console.log(searchBtn);

   
});

it("Should filter Top Rated Restaurant",async()=>{
    await act(async()=>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>

    )
);
   const cardsBeforeFilter= screen.getAllByTestId("resCard");
   expect(cardsBeforeFilter.length).toBe(8);

   const topRatedbtn=screen.getByRole("button",{name:"Top Rated Foods"});
   fireEvent.click(topRatedbtn);

   const cardsAfterFilter=screen.getAllByTestId("resCard");
   expect(cardsAfterFilter.length).toBe(3); 
})





