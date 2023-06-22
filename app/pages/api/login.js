import clientPromise from "../../components/mongodb/mongo_init";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Digital_Delirium");
    const collection = db.collection("members");

    switch (req.method) {
        case "POST":
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({ message: "Missing username or password" });
            }

            const encryptedPassword = bcrypt.hashSync(password, 10);

            if (username.length < 3 || password.length < 3) {
                return res.status(400).json({ message: "Username or password is too short" });
            } 

            const foundMember = await collection.findOne({ 
                username, 
                password: encryptedPassword
            });

            if (!foundMember) {
                return res.status(400).json({ message: "Wrong username or password" });
            }

            res.status(200).json(foundMember);
            break;
    }
}

