import { getSchoolsFromDB } from "./db.js";

export const getSchools = async (req, res) => {
    try {
        const schools = await getSchoolsFromDB()
        res.json(schools);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Cannot get Schools" });
    }
}