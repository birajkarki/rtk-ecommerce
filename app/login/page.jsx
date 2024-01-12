"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "mor_2314",
      password: "83r5^_",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const apiResponse = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!apiResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await apiResponse.json();

        if (data.token) {
          // Save the token to local storage
          localStorage.setItem("token", data.token);
          alert(`Successfully Logged In.`);
          console.log("Token:", data.token);
          // Assuming setResponse and data.status are part of your state management
          // Ensure you have the necessary state and functions defined.
          // setResponse(data);
          router.push(`/`);
        } else {
          console.error(
            "Login failed. Message:",
            data.message || "Unknown error"
          );
        }
      } catch (error) {
        console.error("Error during API request:", error.message);
      }
    },
  });

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <Image
            className="mx-auto h-20 w-auto"
            width={64}
            height={64}
            src="/qadron-merch-logo.svg"
            alt="Your Company"
            priority={true}
          />
          <h2 className="mt-4 text-2xl font-extrabold text-gray-800">
            Sign in to your account
          </h2>
        </div>

        <form className="mt-6 space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className={
                "mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" +
                (formik.touched.username && formik.errors.username
                  ? " border-red-500"
                  : "")
              }
              placeholder="Enter your username"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="mt-2 text-sm text-red-500">
                {formik.errors.username}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={
                "mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" +
                (formik.touched.password && formik.errors.password
                  ? " border-red-500"
                  : "")
              }
              placeholder="Enter your password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {formik.errors.password}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          Not a member?{" "}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>

        {formik.values.username !== "mor_2314" ||
        formik.values.password !== "83r5^_" ? (
          <p className="mt-4 text-red-500 text-sm text-center">
            Note: This is a demo. Please use the provided username and password.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Page;
