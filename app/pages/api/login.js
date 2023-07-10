import clientPromise from "../../components/mongodb/mongo_init";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("Digital_Delirium");
        const collection = db.collection("members");

        switch (req.method) {
            case "POST":
                const { username, password } = req.body;

                if (!username || !password) {
                    return res.status(400).json({ message: "Missing username or password" });
                }

                const foundMember = await collection.findOne({ username });

                if (!foundMember) {
                    return res.status(400).json({ message: "Wrong username or password" });
                }

                const passwordMatch = await bcrypt.compare(password, foundMember.encryptedPassword);

                if (!passwordMatch) {
                    return res.status(400).json({ message: "Wrong username or password" });
                }

                if (foundMember && passwordMatch) {
                    const data = {
                        foundMember: {
                            insertedId: foundMember._id,
                            username: foundMember.username,
                            encryptPassword: foundMember.encryptedPassword,
                            walletAddress: foundMember.walletAddress,
                            created: foundMember.created,
                        }
                    };
                    return res.status(200).json(data);
                }
            default:
                res.status(405).json({ message: `Method ${req.method} Not Allowed` });
                break;
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}