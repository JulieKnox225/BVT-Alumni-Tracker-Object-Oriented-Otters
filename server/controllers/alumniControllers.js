
/* 
  This should be able to replace all other getAlumniBy____ :
  
const getPlants = async (req, res) => {
    try {
        const { search, type } = req.query;
        const wordsToSearchWithLike = ['name', 'nickname', 'months_to_plant', 'sow_temp_range', 'description', 'planting_zone'];
        let result = [];
        if(search) {
            if(wordsToSearchWithLike.includes(type)) {
                result = await req.db.query(`SELECT * FROM plants WHERE ${type} LIKE '%${search}%'`);
            } else {
                result = await req.db.query(`SELECT * FROM plants WHERE ${type} = :search`, { search });
            }
        }
        else {
            result = await req.db.query(`SELECT * FROM plants`);
        }

        if(result[0].length === 0) {
            result[0].push({ name: 'Sorry none found!' });
        }

        res.status(200).json(result[0]);
    } catch (err) {
        res.status(400).send({success: false, message: err, data: null});
    }
};

*/

const getAllAlumni = async (req, res) => {
    try {
        const result = await req.db.query(
            `SELECT * FROM alumni`
        );
        //CHANGED result[0] TO result[0][0] FOR DEBUGGING PROFILE
        res.status(200).json({success: true, message: `Data retrieved`, data: result[0][0]});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const createAlumni = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, degree, achievements, projects, skills, recommendations } = req.body;
        
        await req.db.query(
            `INSERT INTO alumni (firstName, lastName, email, phoneNumber, degree, achievements, projects, skills, recommendations)
                VALUES (:firstName, :lastName, :email, :phoneNumber, :degree, :achievements, :projects, :skills, :recommendations)`,
            {
                firstName, lastName, email, phoneNumber, degree, achievements, projects, skills, recommendations
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
 * to the database to update the specified entry. 
 * This method allows the user to chose the amount of updates to send to the server.
 */
const updateAlumni = async (req, res) => {
    try {
        const { id } = req.params;
        const bodyValuesArray = Object.entries(req.body);

        for(let i = 0; i < bodyValuesArray.length; i++) {
            await req.db.query(
                `UPDATE alumni SET ${bodyValuesArray[i][0]} = :value
                    WHERE id = :id`,
                {
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

//these **need** to be replaced by one search function because they do not work separately. 
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
                WHERE fullName = ${name}`
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
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ See line 90 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

module.exports = {
    getAllAlumni,
    getAlumniById,
    getAlumniByName,
    getAlumniByYear,
    createAlumni,
    updateAlumni
}