const getAllAlumni = async (req, res) => {
    try {
        const result = await req.db.query(
            `SELECT * FROM alumni`
        );
        res.status(200).json({success: true, message: `Data retrieved`, data: result[0]});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const getAlumniById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await req.db.query(
            `SELECT * FROM alumni
                WHERE id = :id`,
            {
                id
            }
        );

        res.status(200).json({success: true, message: `Data retrieved`, data: result[0]});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const getAlumniByName = async (req, res) => {
    try {
        const { name } = req.params;
        const result = await req.db.query(
            `SELECT * FROM alumni
                WHERE name = :name`,
            {
                name
            }
        );

        res.status(200).json({success: true, message: `Data retrieved`, data: result[0]});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const getAlumniByYear = async (req, res) => {
    try {
        const { year } = req.params;
        const result = await req.db.query(
            `SELECT * FROM alumni
                WHERE year = :year`,
            {
                year
            }
        );

        res.status(200).json({success: true, message: `Data retrieved`, data: result[0]});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const createAlumni = async (req, res) => {
    try {
        const { fullName, contactInfo, degree, achievements, projects, skills, recommendations } = req.body;
        
        await req.db.query(
            `INSERT INTO pokedex (fullName, contactInfo, degree, achievements, projects, skills, recommendations)
                VALUES (:fullName, :contactInfo, :degree, :achievements, :projects, :skills, :recommendations)`,
            {
                fullName, contactInfo, degree, achievements, projects, skills, recommendations
            }
        );

        res.status(200).json({success: true, message: `Successfully added data`, data: null});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

/**
 * Assumes req.body contains properties and values that need to be updated but does not assume the amount.
 * Creates an array of any possible properties and values that will then be iterated over to make a request 
 * to the database to update the specified entry. This method allows the user to chose the amount of updates
 * to send to the server.
 */
const updateAlumni = async (req, res) => {
    try {
        const { id } = req.params;
        const bodyValuesArray = Object.entries(req.body);

        //I am worried that :property will not work 
        for(let i = 0; i < bodyValuesArray.length; i++) {
            await req.db.query(
                `UPDATE almuni SET :property = :value
                    WHERE id = :id`,
                {
                    property: bodyValuesArray[i][0],
                    value: bodyValuesArray[i][1],
                    id
                }
            )
        }

        res.status(200).json({success: true, message: `Successfully updated data`, data: null});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

module.exports = {
    getAllAlumni,
    getAlumniById,
    getAlumniByName,
    getAlumniByYear,
    createAlumni,
    updateAlumni
}