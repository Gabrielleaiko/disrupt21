const connection = require("../database/connection");

module.exports = {
    async index(request, response) {

        const { container_id, date_payload } = request.query;

        const [count] = await connection('traking').count();

        const traking = await connection('traking')
            .limit(5)
            .select([
                'traking.*'
            ])
            .where('traking.container_id', container_id);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(traking);
    },

    async create(request, response ) {
        const {
            latitude,
            longitude,
            date_payload,
            container_id
        } = request.body;

        const [id] = await connection('traking').insert({
            latitude,
            longitude,
            date_payload,
            container_id
        });

        return response.json({ id });
    }
};