import clientPromise from "../../components/mongodb/mongo_init";
import AES from "crypto-js/aes";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Digital_Delirium");
    const collection = db.collection("members");
    const ETHwalletaddressRegex = new RegExp("^(0x)?[0-9a-fA-F]{40}$");

    switch (req.method) {
        case "POST":
            const { username, password, walletaddress } = req.body;

            if (!username || !password || !walletaddress) {
                return res.status(400).json({ message: "Missing username, password or walletaddress" });
            }

            if (!walletaddress.match(ETHwalletaddressRegex)) {
                return res.status(400).json({ message: "Wallet Name is invalid" });
            }

            const encryptedPassword = AES.encrypt(password, process.env.SECRET_KEY).toString();
            const insertedMember = await collection.insertOne({
                username,
                encryptedPassword,
                walletaddress,
            });

            res.status(200).json(insertedMember);
            break;
    }

    client.close();
}