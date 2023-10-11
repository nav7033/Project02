import {render as Renderopt,screen,fireEvent,waitForElementToBeRemoved} from "@testing-library/react";
  import {Home} from "./components/Home";
  import * as React from "react";
  import { Provider } from "react-redux";
  import { configureStore } from "@reduxjs/toolkit";
  import reducers from "./Redux/reducers/productReducers";
  import axios from "axios";


// pay attention to write it at the top level of your file
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

//Mock axios
jest.mock("axios");

//redux 
const render = (
    ui,
    {
    store = configureStore({
        reducer: reducers,
    }),
    ...renderOptions
    } = {}
) => {

const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
return Renderopt(ui, { wrapper: Wrapper, ...renderOptions });
}

test("renders page with redux", async () => {
const products = [ {
  "id": 3,
  "title": "Samsung Universe 9",
  "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
  "price": 1249,
  "discountPercentage": 15.46,
  "rating": 4.09,
  "stock": 36,
  "brand": "Samsung",
  "category": "smartphones",
  "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
  "images": [
      "https://dummyjson.com/image/i/products/3/1.jpg"
  ]
},
{
  "id": 4,
  "title": "OPPOF19",
  "description": "OPPO F19 is officially announced on April 2021.",
  "price": 280,
  "discountPercentage": 17.91,
  "rating": 4.3,
  "stock": 123,
  "brand": "OPPO",
  "category": "smartphones",
  "thumbnail": "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
  "images": [
      "https://dummyjson.com/image/i/products/4/1.jpg",
      "https://dummyjson.com/image/i/products/4/2.jpg",
      "https://dummyjson.com/image/i/products/4/3.jpg",
      "https://dummyjson.com/image/i/products/4/4.jpg",
      "https://dummyjson.com/image/i/products/4/thumbnail.jpg"
  ]
}]





    // Mock axios implementation
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { products } })
    );
  
    render(<Home />);
  
    const makeCustomWait = () => {
      return waitForElementToBeRemoved(() => screen.queryByAltText("loading"));
    };
  
    await makeCustomWait();
  
    screen.debug();
  
    const item1 = screen.getByText("OPPOF19");
    expect(item1).toBeInTheDocument();
  
    const item2 = screen.getByText("");
    expect(item2).toBeInTheDocument();
  
    const link = screen.getAllByText("More Details");
    expect(link.length).toBe(2);
  });


















  //testing navigate to cart
//   test("Learn more on click", async () => {
//     const products = [
//       {
//         id: 1,
//         title: "iPhone 9",
//         description: "An apple mobile which is nothing like apple",
//         price: 549,
//         discountPercentage: 12.96,
//         rating: 4.69,
//         stock: 94,
//         brand: "Apple",
//         category: "smartphones",
//         thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//         images: [
//           "https://dummyjson.com/image/i/products/1/1.jpg",
//           "https://dummyjson.com/image/i/products/1/2.jpg",
//           "https://dummyjson.com/image/i/products/1/3.jpg",
//           "https://dummyjson.com/image/i/products/1/4.jpg",
//           "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//         ],
//       },
//       {
//         id: 2,
//         title: "iPhone X",
//         description:
//           "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//         price: 899,
//         discountPercentage: 17.94,
//         rating: 4.44,
//         stock: 34,
//         brand: "Apple",
//         category: "smartphones",
//         thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
//         images: [
//           "https://dummyjson.com/image/i/products/2/1.jpg",
//           "https://dummyjson.com/image/i/products/2/2.jpg",
//           "https://dummyjson.com/image/i/products/2/3.jpg",
//           "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
//         ],
//       },
//     ];

//     // Mock axios implementation
//     axios.get.mockImplementationOnce(() =>
//       Promise.resolve({ data: { products } })
//     );
  
//     render(<Home />);
  
//     const makeCustomWait = () => {
//       return waitForElementToBeRemoved(() => screen.queryByAltText("loading"));
//     };
  
//     await makeCustomWait();
  
//     screen.debug();
  
//     const cart = screen.getByAltText("cart");

//     fireEvent.click(cart);

//     expect(mockedUsedNavigate).toHaveBeenCalledWith("/Cart");
//   });

// test("renders page with redux", async () => {
//   const products = [ {
//     "id": 3,
//     "title": "Samsung Universe 9",
//     "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
//     "price": 1249,
//     "discountPercentage": 15.46,
//     "rating": 4.09,
//     "stock": 36,
//     "brand": "Samsung",
//     "category": "smartphones",
//     "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
//     "images": [
//         "https://dummyjson.com/image/i/products/3/1.jpg"
//     ]
// },
// {
//     "id": 4,
//     "title": "OPPOF19",
//     "description": "OPPO F19 is officially announced on April 2021.",
//     "price": 280,
//     "discountPercentage": 17.91,
//     "rating": 4.3,
//     "stock": 123,
//     "brand": "OPPO",
//     "category": "smartphones",
//     "thumbnail": "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
//     "images": [
//         "https://dummyjson.com/image/i/products/4/1.jpg",
//         "https://dummyjson.com/image/i/products/4/2.jpg",
//         "https://dummyjson.com/image/i/products/4/3.jpg",
//         "https://dummyjson.com/image/i/products/4/4.jpg",
//         "https://dummyjson.com/image/i/products/4/thumbnail.jpg"
//     ]
// }]

//  // Mock axios implementation
//  axios.get.mockImplementationOnce(() =>
//  Promise.resolve({ data: { products } })
// );

// render(<Home />);

// const makeCustomWait = () => {
//  return waitForElementToBeRemoved(() => screen.queryByAltText("Please wait...."));
// };

// await makeCustomWait();

// screen.debug();

// const title = screen.getByPlaceholderText("Enter Title");

// fireEvent.change(title,{target:{value:"Samsung"}});

// var cards = screen.getAllByText("More Details");
// expect(cards.length).toBe(1);
// });