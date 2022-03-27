import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      console.log(name);
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    //store it in database

    const newMessage = {
      email: email,
      name: name,
      message: message,
    };

    console.log(newMessage);

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.0trdk.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    console.log(connectionString);
    try {
      client = await MongoClient.connect(
        // "mongodb+srv://root:root@cluster0.0trdk.mongodb.net/blog-contact?retryWrites=true&w=majority"

        // mongodb+srv://root:root@blog-contact.0trdk.mongodb.net/blog-contact?retryWrites=true&w=majority
        connectionString
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database!" });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing the message failed!!" });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ message: "Message successfully stored!", message: newMessage });
  }
}
