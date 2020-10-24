import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("products")
    .findOne({ id: res.id })
    .toArray();
    
  res.json(movies);
};

//collection