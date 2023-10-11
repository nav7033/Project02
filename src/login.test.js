import { render, screen,fireEvent } from '@testing-library/react';
import {Login} from './components/Login'


const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));



// 1

test("renders Login page", () => {
  render(<Login />);
    // screen.debug();
  const email = screen.getByPlaceholderText("Email Id");
  expect(email).toBeInTheDocument(); // jest
});


//2

test("renders Login page", () => {
  render(<Login />);
    // screen.debug();
  const password = screen.getByPlaceholderText("Enter password");
  expect(password).toBeInTheDocument(); // jest
});

// 2
//=======================email======================
// test("should accept email value", () => {
//   render(<Login />);
//   const element = screen.getByPlaceholderText("Email Id");
//   fireEvent.change(element, { target: { value: "test@gmail.com" } });
//   screen.debug();
//   expect(element.value).toBe("test@gmail.com");
// });


//==================password========================================

// test("Test if password value matches with input", () => {
//     render(<Login />);

//     var pass = screen.getByPlaceholderText("Enter password");
//     fireEvent.change(pass,{target: {value: "Speacial@98"}});

//     var button = screen.getByRole("button");
//     fireEvent.click(button);
//     // screen.debug()

//     expect(pass.value).toBe("Ram@12");
// })

//email and password error
// test("Test number of errors", () => {
//     render(<Login />);

//     var email = screen.getByPlaceholderText("Email Id");
//     fireEvent.change(email,{target: {value: "test@gmail"}});

//     var password = screen.getByPlaceholderText("Enter password");
//     fireEvent.change(password, {target: {value:"Speacial@98"}});

//     var button = screen.getByRole("button");
//     fireEvent.click(button);
//     // screen.debug()
//     var err1 = screen.getAllByText("required email*")
//     expect(err1.length).toBe(1);
//     var err = screen.getAllByText("Invalid Email*")
//     expect(err.length).toBe(1);

//     var pe = screen.getAllByText("password length should be min 8 and [Aa@1]*")
//     expect(pe.length).toBe(1);
// })

//Mocking navigate
test("Mock navigate to product page", () => {
  render(<Login />);

  var email = screen.getByPlaceholderText("Email Id");
  fireEvent.change(email,{target: {value: "tam@gmail.com"}});

  var password = screen.getByPlaceholderText("Enter password");
  fireEvent.change(password, {target: {value:"Ramsan@12"}});

  var button = screen.getByRole("button");
  fireEvent.click(button);
  // screen.debug()

  expect(mockedUsedNavigate).toHaveBeenCalledWith('/product')
})