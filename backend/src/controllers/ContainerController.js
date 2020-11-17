const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(request,response){
        const containers = await connection('containers').select('*');

        return response.json(containers);
    },
    
    async create(request, response ) {
        const { 
            typeCode,
            origin,
            approve_reference,
            date_manufactored,
            identification,
            gross_max,
            stacking_max,
            racking_test
        } = request.body;

        const id = generateUniqueId();

        await connection('containers').insert({
            id,
            typeCode,
            origin,
            approve_reference,
            date_manufactored,
            identification,
            gross_max,
            stacking_max,
            racking_test
        })

        return response.json({ id });
    }
};