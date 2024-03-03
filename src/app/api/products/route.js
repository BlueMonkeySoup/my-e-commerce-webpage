import { Products } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, query) => {
  // console.log(query)
  const regex = new RegExp(query, "i");
  try {
    connectToDb();

    const products = await Products.find({ title: { $regex: regex } });

    // console.log(products)
    return NextResponse.json(products);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};
