"use server";
import { Order, User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
// import { revalidatePath } from "next/cache"
// import { redirect } from "next/navigation"

import bcrypt from "bcryptjs";
import { signIn } from "./auth";

export const addUser = async (previousState, formData) => {
  console.log(formData);
  const { username, email, password, phone, adress, repeatPassword } =
    Object.fromEntries(formData);

  if (password !== repeatPassword) {
    return { error: "Passwords do not match" };
  }
  try {
    connectToDb();

    const user = User.await.findOne({ username });

    if (user) {
      return { error: "User already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      adress,
      isAdmin,
    });
    await newUser.save();
    return { success: true };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user");
  }
  // revalidatePath("/")
  // redirect("/")
};
export const addOrder = async (previousState, formData) => {
  const {
    title,
    price,
    stock,
    email,
    name,
    phone,
    adress,
    isPending,
    isCompleted,
  } = Object.fromEntries(formData);

  try {
    connectToDb();

    const newOrder = new Order({
      title,
      price,
      stock,
      email,
      name,
      phone,
      adress,
      isPending,
      isCompleted,
    });
    await newOrder.save();
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Please fillout the form!" };
    // throw new Error("Failed to create order");
  }
  // revalidatePath("/")
  // redirect("/orderdone")
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};
