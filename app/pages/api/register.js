import clientPromise from "../../components/mongodb/mongo_init";
import AES from "crypto-js/aes";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Digital_Delirium");
    const collection = db.collection("members");
    const ETHwalletaddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;

    switch (req.method) {
        case "POST":
            const { username, password, walletaddress } = req.body;

            if (!username || !password || !walletaddress) {
                return res.status(400).json({
                    status: 400,
                    message: "Missing username, password or walletaddress" });
            }

            if (!walletaddress.match(ETHwalletaddressRegex)) {
                return res.status(400).json({ 
                    status: 400,
                    message: "Wallet Address is invalid" 
                });
            }

            const encryptedPassword = AES.encrypt(password, process.env.SECRET_KEY).toString();

            // We verify if the account in the database already exists
            const verifyAccount = await collection.findOne({ username: username });

            if (verifyAccount) {
                return res.status(400).json({ message: `The account ${verifyAccount.username} already exists. ` });
            }

            const insertedMember = await collection.insertOne({
                username,
                encryptedPassword,
                walletAddress: walletaddress,
                created: new Date()
            });

            res.status(200).json(insertedMember, { 
                status: 200,
                message: `${insertedMember.username} registered successfully` });
            break;
    }

    client.close();
}