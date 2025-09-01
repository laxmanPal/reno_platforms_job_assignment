import { addSchoolToDB, getSchoolsFromDB } from "./db.js";

export const getSchools = async (req, res) => {
    try {
        const schools = await getSchoolsFromDB()
        res.json(schools);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Cannot get Schools" });
    }
}

export const addSchool = async (req, res) => {
    try {
        const { name, address, city, state, contact, email_id } = req.body;
        const image = req.file ? `schoolImages/${req.file.filename}` : null;

        if (!name || !address || !city || !state || !contact || !email_id) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const result = await addSchoolToDB(name, address, city, state, contact, image, email_id);
        res.status(201).json({ message: "School added", id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }



}