import clientPromise from "../../components/mongodb/mongo_init";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Digital_Delirium");
    const collection = db.collection("members");

    const ETHwalletaddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;

    switch (req.method) {
        case "POST":
            const { username, password, walletAddress } = req.body;

            if (!username || !password || !walletAddress) {
                return res.status(400).json({
                    status: 400,
                    message: "Missing username, password or walletaddress" });
            }

            if (!walletAddress.match(ETHwalletaddressRegex)) {
                return res.status(400).json({
                    status: 400,
                    message: "Wallet Address is invalid"
                });
            }

            const encryptedPassword = bcrypt.hashSync(password, 10);

            // We verify if the account in the database already exists
            const verifyAccount = await collection.findOne({ username: username });

            if (verifyAccount) {
                return res.status(400).json({ message: `The account ${verifyAccount.username} already exists. ` });
            }

            const verifyWalletAddress = await collection.findOne({ walletAddress: walletAddress });

            if (verifyWalletAddress) {
                return res.status(400).json({ message: `The wallet address ${verifyWalletAddress.walletAddress} already exists. ` });
            }

            if (username.length < 3 || password.length < 3) {
                return res.status(400).json({
                    status: 400,
                    message: "Username and password must be at least 3 characters long" }
                );
            }

            const insertedMember = await collection.insertOne({
                username: username,
                encryptedPassword: encryptedPassword,
                walletAddress: walletAddress,
                created: new Date()
            });

            if (insertedMember) {
                const insertedMemberData = await collection.findOne({ username: username });
                if (insertedMemberData) {
                    const data = {
                        insertedMember: {
                            insertedId: insertedMemberData._id,
                            username: insertedMemberData.username,
                            encryptPassword: insertedMemberData.encryptedPassword,
                            walletAddress: insertedMemberData.walletAddress,
                            created: insertedMemberData.created,
                        }
                    };
                    res.status(200).json(data);
                    return;
                }
            }
    }
}