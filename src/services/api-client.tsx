import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'815078f085bd4c608c724d43c0742ab8'
    }
})