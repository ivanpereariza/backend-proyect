const axios = require('axios')


class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://rickandmortyapi.com/api'
        })
    }

    getAllCharacters(page) {
        return this.api.get(`/character?page=${page}`)
    }

    getCharacterById(id) {
        return this.api.get(`/character/${id}`)
    }

    getAllLocations(page) {
        return this.api.get(`/location?page=${page}`)
    }

    getLocationById(id) {
        return this.api.get(`/location/${id}`)
    }

    getAllEpisodies(page) {
        return this.api.get(`/episode?page=${page}`)
    }

    getEpisodeById(id) {
        return this.api.get(`/episode/${id}`)
    }
}

module.exports = ApiService