import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  console.log(req);
  const fruitName = req.nextUrl.searchParams.get("fruit");

  if (!fruitName) {
    return NextResponse.json(
      { error: "No fruit name provided" },
      { status: 400 }
    );
  }

  const response = await fetch(
    `https://www.fruityvice.com/api/fruit/${fruitName}`
  ).then((res) => res.json());

  return NextResponse.json(response);
};
