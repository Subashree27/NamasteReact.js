import {render,screen} from "@testing-library/react";
import RestaurantContainer from "../../RestaurantContainer";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantContainer Component with props Data",()=>{
    
    render(<RestaurantContainer resData={MOCK_DATA}/>); 

    const name = screen.getByText("Dev International");    
    expect(name).toBeInTheDocument();
});
