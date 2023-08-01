const searchAlumni = async (req, res) => {
    try {
        const { search, type } = req.query;
        const wordsToSearchWithLike = ['fullName', 'year']; // Add other searchable fields here

        let result = [];
        if (search && wordsToSearchWithLike.includes(type)) {
            result = await req.db.query(`SELECT * FROM alumni WHERE ${type} LIKE '%${search}%'`);
        } else {
            // Handle invalid or unsupported search type here if needed
        }

        if (result[0].length === 0) {
            result[0].push({ message: 'No records found!' });
        }

        res.status(200).json(result[0]);
    } catch (err) {
        res.status(400).send({ success: false, message: err, data: null });
    }
};

const getAllAlumni = async (req, res) => {
    try {
        const result = await req.db.query(
            `SELECT a.*, u.user 
            FROM alumni a
            JOIN users u
            ON a.user_id = u.id;`
        );
        res.status(200).json({ success: true, message: `Data retrieved`, data: result[0] });
    } catch (error) {
        res.status(400).json({ success: false, message: error, data: null });
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

        res.status(200).json({ success: true, message: `Successfully added data`, data: null });
    } catch (error) {
        res.status(400).json({ success: false, message: error, data: null });
    }
};

const updateAlumni = async (req, res) => {
    try {
        const bodyValuesArray = Object.entries(req.body);

        for (let i = 0, j = bodyValuesArray.length; i < j; i++) {
            await req.db.query(
                `UPDATE alumni SET ${bodyValuesArray[i][0]} = :value
                    WHERE user_id = :id`,
                {
                    value: bodyValuesArray[i][1],
                    id: req.user.user
                }
            );
        }

        res.status(200).json({ success: true, message: `Successfully updated data`, data: null });
    } catch (error) {
        res.status(400).json({ success: false, message: error, data: null });
    }
};

const editProfile = async (req, res) => {
    try {
        const { firstName, lastName, email, projects, skills, achievements, id } = req.body;
        
        const updatingValues = [['firstName', firstName], ['lastName', lastName], ['email', email], ['projects',projects], ['skills', skills], ['achievements', achievements]];

        for(let i = 0, j = updatingValues.length; i < j; i++) {
            await req.db.query(
                `UPDATE alumni SET ${updatingValues[i][0]} = :value
                    WHERE id = :id`,
                {
                    value: updatingValues[i][1],
                    id
                }
            );
        }

        const { user } = req.body;

        await req.db.query(
            `UPDATE users
                SET user = :user
                WHERE id = :id`,
            {
                user,
                id: req.user.user
            }
        );

        res.status(200).json({ success: true, message: `Successfully updated data`, data: null });
    } catch (error) {
        if (error?.data?.message?.code == '1062') {
            res.status(400).json({ success: false, message: 'Username taken. Please Try again', data: null });
        } else {
            res.status(400).json({ success: false, message: error, data: null });
        }
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

        res.status(200).json({ success: true, message: `Data retrieved`, data: result[0] });
    } catch (error) {
        res.status(400).json({ success: false, message: error, data: null });
    }
};

const getAlumniByName = async (req, res) => {
    try {
        const { name } = req.params;
        const result = await req.db.query(
            `SELECT * FROM alumni
                WHERE fullName = ${name}`
        );

        res.status(200).json({ success: true, message: `Data retrieved`, data: result[0] });
    } catch (error) {
        res.status(400).json({ success: false, message: error, data: null });
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

        res.status(200).json({ success: true, message: `Data retrieved`, data: result[0] });
    } catch (error) {
        res.status(400).json({ success: false, message: error, data: null });
    }
};

module.exports = {
    searchAlumni,
    getAllAlumni,
    createAlumni,
    updateAlumni,
    editProfile,
    getAlumniById,
    getAlumniByName,
    getAlumniByYear
};