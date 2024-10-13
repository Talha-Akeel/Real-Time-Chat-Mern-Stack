import React from "react";
import { useFormik } from "formik";
import { login_schema } from "../../schemas";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  // const navigate = useNavigate();
  // const { is_authenticated, set_is_authenticated } = use_user_store();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: login_schema,
      onSubmit: async (values, action) => {
        try {
          console.log(values);

          //   const response = await axios.post(
          //     users_end_points.login_users(),
          //     { email: values.email, password: values.password },
          //     {
          //       headers: {
          //         "Content-Type": "application/json",
          //       },
          //       withCredentials: true,
          //     }
          //   );
          //   console.log(response);

          //   // set_token(response?.token);
          //   if (response?.data?.success) {
          //     // set_token(response?.data?.token);
          //     toast.success(response?.data?.message);
          //     set_is_authenticated(true);
          //     // localStorage.setItem('token', 1);
          //     // localStorage.setItem('token', response?.data?.token);
          //     navigate("/");

          //     // window.location.reload();
          //   } else {
          //     toast.message(response?.data?.message);
          //   }
        } catch (error) {
          //   toast.error("Invalid credentials");
          console.log(error);
        }

        action.resetForm();
        //   navigate('/profile');
      },
    });

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded"
            />
            {errors.email && touched.email ? (
              <p className="text-red-800">{errors.email}</p>
            ) : null}
          </div>

          <div>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded"
            />
            {errors.password && touched.password ? (
              <p className="text-red-800">{errors.password}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="mt-10 sm:mt-10 px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 w-3/4"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
