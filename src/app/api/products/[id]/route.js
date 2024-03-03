import { Products } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    const products = await Products.findOne({ slug });
    return NextResponse.json(products);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};
