import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../utils/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const {
    query: { id },
  } = req
  const movies = await db
    .collection("products")
    .find(ObjectId(id))
    .toArray();

  res.json(movies[0]);
  //res.json({ id: id })
};

//collection