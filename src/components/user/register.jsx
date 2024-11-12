import { useState } from "react";
import { register_user } from "../../api/user/userapi";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../microcomponents/spinner";
import PhoneInput from "react-phone-number-input/input";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for DatePicker

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("O");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);

  const handle_form_submission = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await register_user({
        username,
        name,
        mobile,
        password,
        gender,
        email,
        dob: dob ? dob.toISOString().split("T")[0] : "", // Format date to YYYY-MM-DD
      });
      console.log("response", response);  
      if (response === 200) {
        navigator("/");
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
    setLoading(false);
  };

  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="text-center min-h-[160px] sm:p-6 p-4">
        <h4 className="sm:text-3xl text-2xl font-bold text-black w-fit mx-auto">
          Create your free account
        </h4>
      </div>
      <div className="mx-4 mb-4 -mt-16">
        <form
          onSubmit={handle_form_submission}
          className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md"
        >
          <div className="md:gap-12 gap-7 flex flex-col">
            <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
              <div>
                <label className="text-sm mb-2 block">Username</label>
                <input
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label className="text-sm mb-2 block">Name</label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter name"
                  required
                />
              </div>
              <div>
                <label className="text-sm mb-2 block">Email</label>
                <input
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label className="text-sm mb-2 block">Mobile No.</label>
                <PhoneInput
                  value={mobile}
                  onChange={(value) => setMobile(value)}
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter mobile number"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Select Your Gender
                </label>
                <select
                  id="countries"
                  value={gender}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm mb-2 block">Date of Birth</label>
                <DatePicker
                  selected={dob}
                  onChange={(date) => setDob(date)} // DatePicker sets the date object
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholderText="Select date"
                  dateFormat="yyyy-MM-dd" // Set format
                  showYearDropdown // Optional: show year dropdown
                  scrollableYearDropdown // Optional: enable scrolling for years
                  yearDropdownItemNumber={100} // Optional: number of years to display in dropdown
                  isClearable // Optional: clearable date input
                />
              </div>
            </div>

            <div className="!mt-10">
              <button
                type="submit"
                className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
              >
                {loading ? <Spinner /> : <span>Sign up</span>}
              </button>
              <div className="flex justify-end">
                <p className="font-thin">Already Have An Account? </p>{" "}
                <Link
                  to="/login"
                  className="min-w-[100px] py-1 px-1 flex text-black justify-center text-sm font-semibold rounded-md  hover:text-white bg-gray-200 hover:bg-gray-600 focus:outline-none"
                >
                  Login In
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
